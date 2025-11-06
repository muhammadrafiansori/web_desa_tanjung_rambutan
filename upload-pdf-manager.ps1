# 📁 PDF Manager untuk Website Desa Tanjung Rambutan
# Script untuk mengelola file PDF dalam website

param(
    [Parameter(Mandatory=$false)]
    [string]$Action = "menu"
)

# Colors untuk output
$colors = @{
    Green = "Green"
    Yellow = "Yellow" 
    Red = "Red"
    Blue = "Cyan"
    White = "White"
}

function Show-Header {
    Clear-Host
    Write-Host "╔══════════════════════════════════════════════════════╗" -ForegroundColor $colors.Blue
    Write-Host "║           📁 PDF MANAGER DESA WEBSITE               ║" -ForegroundColor $colors.Blue
    Write-Host "║        Desa Tanjung Rambutan - File Manager         ║" -ForegroundColor $colors.Blue
    Write-Host "╚══════════════════════════════════════════════════════╝" -ForegroundColor $colors.Blue
    Write-Host ""
}

function Show-Menu {
    Show-Header
    Write-Host "Pilih aksi yang ingin dilakukan:" -ForegroundColor $colors.White
    Write-Host ""
    Write-Host "1. 📄 Upload PDF baru ke website" -ForegroundColor $colors.Green
    Write-Host "2. 📋 Lihat daftar PDF yang ada" -ForegroundColor $colors.Blue
    Write-Host "3. 🗑️  Hapus PDF dari website" -ForegroundColor $colors.Red
    Write-Host "4. 📊 Informasi folder dan ukuran" -ForegroundColor $colors.Yellow
    Write-Host "5. 🚀 Jalankan development server" -ForegroundColor $colors.Blue
    Write-Host "0. ❌ Keluar" -ForegroundColor $colors.Red
    Write-Host ""
    
    $choice = Read-Host "Masukkan pilihan (0-5)"
    
    switch ($choice) {
        "1" { Upload-PDF }
        "2" { List-PDFs }
        "3" { Delete-PDF }
        "4" { Show-FolderInfo }
        "5" { Start-DevServer }
        "0" { 
            Write-Host "Terima kasih! 👋" -ForegroundColor $colors.Green
            exit 
        }
        default { 
            Write-Host "Pilihan tidak valid!" -ForegroundColor $colors.Red
            Start-Sleep 2
            Show-Menu 
        }
    }
}

function Upload-PDF {
    Show-Header
    Write-Host "📄 UPLOAD PDF BARU" -ForegroundColor $colors.Green
    Write-Host "===================" -ForegroundColor $colors.Green
    Write-Host ""
    
    # Check if documents folder exists
    $documentsPath = ".\frontend\public\documents"
    if (-not (Test-Path $documentsPath)) {
        Write-Host "❌ Folder documents tidak ditemukan!" -ForegroundColor $colors.Red
        Write-Host "Membuat folder documents..." -ForegroundColor $colors.Yellow
        New-Item -Path $documentsPath -ItemType Directory -Force
    }
    
    Write-Host "Pilih file PDF yang ingin diupload:" -ForegroundColor $colors.White
    
    # Open file dialog
    Add-Type -AssemblyName System.Windows.Forms
    $fileDialog = New-Object System.Windows.Forms.OpenFileDialog
    $fileDialog.Title = "Pilih File PDF"
    $fileDialog.Filter = "PDF Files (*.pdf)|*.pdf"
    $fileDialog.InitialDirectory = [Environment]::GetFolderPath("Desktop")
    
    if ($fileDialog.ShowDialog() -eq "OK") {
        $sourcePath = $fileDialog.FileName
        $fileName = [System.IO.Path]::GetFileName($sourcePath)
        $targetPath = Join-Path $documentsPath $fileName
        
        Write-Host ""
        Write-Host "📁 File dipilih: $fileName" -ForegroundColor $colors.Blue
        
        # Check file size
        $fileSize = (Get-Item $sourcePath).Length / 1MB
        Write-Host "📊 Ukuran file: $([math]::Round($fileSize, 2)) MB" -ForegroundColor $colors.Blue
        
        if ($fileSize -gt 10) {
            Write-Host "⚠️  Warning: File lebih dari 10MB, mungkin loading lambat di website" -ForegroundColor $colors.Yellow
        }
        
        Write-Host ""
        $confirm = Read-Host "Lanjutkan upload? (y/n)"
        
        if ($confirm -eq "y" -or $confirm -eq "Y") {
            try {
                Copy-Item $sourcePath $targetPath -Force
                Write-Host ""
                Write-Host "✅ File berhasil diupload!" -ForegroundColor $colors.Green
                Write-Host "📂 Lokasi: $targetPath" -ForegroundColor $colors.Blue
                Write-Host "🌐 URL: /documents/$fileName" -ForegroundColor $colors.Blue
                
                # Show next steps
                Write-Host ""
                Write-Host "📝 LANGKAH SELANJUTNYA:" -ForegroundColor $colors.Yellow
                Write-Host "1. Buka file ProfilDesa.jsx" -ForegroundColor $colors.White
                Write-Host "2. Tambahkan data dokumen baru di array 'documents'" -ForegroundColor $colors.White
                Write-Host "3. Sesuaikan title, deskripsi, dan informasi lainnya" -ForegroundColor $colors.White
                
            } catch {
                Write-Host "❌ Gagal mengupload file: $($_.Exception.Message)" -ForegroundColor $colors.Red
            }
        }
    } else {
        Write-Host "Upload dibatalkan." -ForegroundColor $colors.Yellow
    }
    
    Write-Host ""
    Read-Host "Tekan Enter untuk kembali ke menu"
    Show-Menu
}

function List-PDFs {
    Show-Header
    Write-Host "📋 DAFTAR PDF YANG ADA" -ForegroundColor $colors.Blue
    Write-Host "======================" -ForegroundColor $colors.Blue
    Write-Host ""
    
    $documentsPath = ".\frontend\public\documents"
    
    if (-not (Test-Path $documentsPath)) {
        Write-Host "❌ Folder documents tidak ditemukan!" -ForegroundColor $colors.Red
        Write-Host ""
        Read-Host "Tekan Enter untuk kembali ke menu"
        Show-Menu
        return
    }
    
    $pdfFiles = Get-ChildItem -Path $documentsPath -Filter "*.pdf"
    
    if ($pdfFiles.Count -eq 0) {
        Write-Host "📂 Tidak ada file PDF ditemukan." -ForegroundColor $colors.Yellow
    } else {
        Write-Host "Ditemukan $($pdfFiles.Count) file PDF:" -ForegroundColor $colors.Green
        Write-Host ""
        
        foreach ($file in $pdfFiles) {
            $size = [math]::Round($file.Length / 1MB, 2)
            Write-Host "📄 $($file.Name)" -ForegroundColor $colors.White
            Write-Host "   📊 Ukuran: $size MB" -ForegroundColor $colors.Blue
            Write-Host "   📅 Dimodifikasi: $($file.LastWriteTime.ToString('dd/MM/yyyy HH:mm'))" -ForegroundColor $colors.Blue
            Write-Host "   🌐 URL: /documents/$($file.Name)" -ForegroundColor $colors.Blue
            Write-Host ""
        }
    }
    
    Read-Host "Tekan Enter untuk kembali ke menu"
    Show-Menu
}

function Delete-PDF {
    Show-Header
    Write-Host "🗑️ HAPUS PDF" -ForegroundColor $colors.Red
    Write-Host "=============" -ForegroundColor $colors.Red
    Write-Host ""
    
    $documentsPath = ".\frontend\public\documents"
    $pdfFiles = Get-ChildItem -Path $documentsPath -Filter "*.pdf"
    
    if ($pdfFiles.Count -eq 0) {
        Write-Host "📂 Tidak ada file PDF untuk dihapus." -ForegroundColor $colors.Yellow
        Write-Host ""
        Read-Host "Tekan Enter untuk kembali ke menu"
        Show-Menu
        return
    }
    
    Write-Host "Pilih file yang akan dihapus:" -ForegroundColor $colors.White
    Write-Host ""
    
    for ($i = 0; $i -lt $pdfFiles.Count; $i++) {
        Write-Host "$($i + 1). $($pdfFiles[$i].Name)" -ForegroundColor $colors.White
    }
    
    Write-Host "0. Batal" -ForegroundColor $colors.Yellow
    Write-Host ""
    
    $choice = Read-Host "Masukkan nomor file"
    
    if ($choice -eq "0") {
        Show-Menu
        return
    }
    
    $index = [int]$choice - 1
    
    if ($index -ge 0 -and $index -lt $pdfFiles.Count) {
        $fileToDelete = $pdfFiles[$index]
        Write-Host ""
        Write-Host "⚠️  Akan menghapus: $($fileToDelete.Name)" -ForegroundColor $colors.Yellow
        $confirm = Read-Host "Apakah Anda yakin? (y/n)"
        
        if ($confirm -eq "y" -or $confirm -eq "Y") {
            try {
                Remove-Item $fileToDelete.FullName -Force
                Write-Host "✅ File berhasil dihapus!" -ForegroundColor $colors.Green
            } catch {
                Write-Host "❌ Gagal menghapus file: $($_.Exception.Message)" -ForegroundColor $colors.Red
            }
        }
    } else {
        Write-Host "❌ Pilihan tidak valid!" -ForegroundColor $colors.Red
    }
    
    Write-Host ""
    Read-Host "Tekan Enter untuk kembali ke menu"
    Show-Menu
}

function Show-FolderInfo {
    Show-Header
    Write-Host "📊 INFORMASI FOLDER" -ForegroundColor $colors.Yellow
    Write-Host "===================" -ForegroundColor $colors.Yellow
    Write-Host ""
    
    $documentsPath = ".\frontend\public\documents"
    
    if (Test-Path $documentsPath) {
        $files = Get-ChildItem -Path $documentsPath -Recurse
        $totalSize = ($files | Measure-Object -Property Length -Sum).Sum
        $totalSizeMB = [math]::Round($totalSize / 1MB, 2)
        
        Write-Host "📂 Path: $((Get-Item $documentsPath).FullName)" -ForegroundColor $colors.Blue
        Write-Host "📁 Total files: $($files.Count)" -ForegroundColor $colors.Blue
        Write-Host "📊 Total size: $totalSizeMB MB" -ForegroundColor $colors.Blue
        Write-Host ""
        
        $pdfFiles = $files | Where-Object { $_.Extension -eq ".pdf" }
        Write-Host "📄 PDF files: $($pdfFiles.Count)" -ForegroundColor $colors.Green
        
        if ($pdfFiles.Count -gt 0) {
            $pdfSize = ($pdfFiles | Measure-Object -Property Length -Sum).Sum / 1MB
            Write-Host "📊 PDF total size: $([math]::Round($pdfSize, 2)) MB" -ForegroundColor $colors.Green
        }
    } else {
        Write-Host "❌ Folder documents tidak ditemukan!" -ForegroundColor $colors.Red
    }
    
    Write-Host ""
    Read-Host "Tekan Enter untuk kembali ke menu"
    Show-Menu
}

function Start-DevServer {
    Show-Header
    Write-Host "🚀 MENJALANKAN DEVELOPMENT SERVER" -ForegroundColor $colors.Blue
    Write-Host "=================================" -ForegroundColor $colors.Blue
    Write-Host ""
    
    if (Test-Path ".\frontend\package.json") {
        Write-Host "📦 Package.json ditemukan, menjalankan npm run dev..." -ForegroundColor $colors.Green
        Set-Location ".\frontend"
        npm run dev
    } else {
        Write-Host "❌ Package.json tidak ditemukan di folder frontend!" -ForegroundColor $colors.Red
        Write-Host "Pastikan Anda menjalankan script dari root folder project." -ForegroundColor $colors.Yellow
    }
    
    Read-Host "Tekan Enter untuk kembali ke menu"
    Show-Menu
}

# Main execution
switch ($Action.ToLower()) {
    "menu" { Show-Menu }
    "upload" { Upload-PDF }
    "list" { List-PDFs }
    "delete" { Delete-PDF }
    "info" { Show-FolderInfo }
    "dev" { Start-DevServer }
    default { Show-Menu }
}