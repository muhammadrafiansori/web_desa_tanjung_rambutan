import React from 'react';

const Footer = () => {
    return (
        <footer className="bg-gradient-to-r from-desa-green-700 to-desa-green-600 text-white mt-auto">
            <div className="max-w-6xl mx-auto px-5">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 py-12">
                    {/* Info Kontak */}
                    <div>
                        <h3 className="text-desa-green-100 text-lg font-semibold mb-4">Kontak Kami</h3>
                        <div className="space-y-3">
                            <p className="flex items-center text-desa-green-50">
                                <svg className="w-5 h-5 mr-3 text-desa-green-100" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                </svg>
                                Jl. Raya Desa Tanjung Rambutan
                            </p>
                            <p className="flex items-center text-desa-green-50">
                                <svg className="w-5 h-5 mr-3 text-desa-green-100" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                                </svg>
                                (0761) 123456
                            </p>
                            <p className="flex items-center text-desa-green-50">
                                <svg className="w-5 h-5 mr-3 text-desa-green-100" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                </svg>
                                admin@tanjungrambutan-desa.id
                            </p>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="text-desa-green-100 text-lg font-semibold mb-4">Tautan Cepat</h3>
                        <ul className="space-y-2">
                            <li>
                                <a href="/profil" className="text-desa-green-50 hover:text-desa-green-100 hover:pl-2 transition-all duration-300 block py-1">
                                    Profil Desa
                                </a>
                            </li>
                            <li>
                                <a href="/pemerintahan" className="text-desa-green-50 hover:text-desa-green-100 hover:pl-2 transition-all duration-300 block py-1">
                                    Pemerintahan
                                </a>
                            </li>
                            <li>
                                <a href="/layanan" className="text-desa-green-50 hover:text-desa-green-100 hover:pl-2 transition-all duration-300 block py-1">
                                    Layanan
                                </a>
                            </li>
                            <li>
                                <a href="/berita" className="text-desa-green-50 hover:text-desa-green-100 hover:pl-2 transition-all duration-300 block py-1">
                                    Berita
                                </a>
                            </li>
                        </ul>
                    </div>

                    {/* Layanan */}
                    <div>
                        <h3 className="text-desa-green-100 text-lg font-semibold mb-4">Layanan Desa</h3>
                        <ul className="space-y-2">
                            <li>
                                <a href="/layanan/ktp" className="text-desa-green-50 hover:text-desa-green-100 hover:pl-2 transition-all duration-300 block py-1">
                                    Kartu Tanda Penduduk
                                </a>
                            </li>
                            <li>
                                <a href="/layanan/kk" className="text-desa-green-50 hover:text-desa-green-100 hover:pl-2 transition-all duration-300 block py-1">
                                    Kartu Keluarga
                                </a>
                            </li>
                            <li>
                                <a href="/layanan/surat-keterangan" className="text-desa-green-50 hover:text-desa-green-100 hover:pl-2 transition-all duration-300 block py-1">
                                    Surat Keterangan
                                </a>
                            </li>
                            <li>
                                <a href="/layanan/pengaduan" className="text-desa-green-50 hover:text-desa-green-100 hover:pl-2 transition-all duration-300 block py-1">
                                    Pengaduan Online
                                </a>
                            </li>
                        </ul>
                    </div>

                    {/* Social Media & Stats */}
                    <div>
                        <h3 className="text-desa-green-100 text-lg font-semibold mb-4">Media Sosial</h3>
                        <div className="flex flex-wrap gap-2 mb-6">
                            <a href="#" className="bg-white/10 hover:bg-blue-600 px-3 py-2 rounded-full text-white text-sm font-medium transition-all duration-300 hover:-translate-y-1">
                                Facebook
                            </a>
                            <a href="#" className="bg-white/10 hover:bg-pink-500 px-3 py-2 rounded-full text-white text-sm font-medium transition-all duration-300 hover:-translate-y-1">
                                Instagram
                            </a>
                            <a href="#" className="bg-white/10 hover:bg-green-500 px-3 py-2 rounded-full text-white text-sm font-medium transition-all duration-300 hover:-translate-y-1">
                                WhatsApp
                            </a>
                        </div>

                        <div className="bg-white/5 p-4 rounded-lg border border-white/10">
                            <h4 className="text-desa-green-100 text-sm font-semibold mb-3">Statistik Pengunjung</h4>
                            <div className="space-y-2 text-sm">
                                <div className="flex justify-between">
                                    <span className="text-desa-green-50">Hari ini:</span>
                                    <span className="text-desa-green-100 font-semibold">127</span>
                                </div>
                                <div className="flex justify-between">
                                    <span className="text-desa-green-50">Bulan ini:</span>
                                    <span className="text-desa-green-100 font-semibold">3.450</span>
                                </div>
                                <div className="flex justify-between">
                                    <span className="text-desa-green-50">Total:</span>
                                    <span className="text-desa-green-100 font-semibold">45.678</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Copyright */}
                <div className="border-t border-white/10 py-6 flex flex-col md:flex-row justify-between items-center gap-4">
                    <div className="text-center md:text-left">
                        <p className="text-desa-green-100 text-sm">
                            &copy; 2024 Desa Tanjung Rambutan. Semua hak cipta dilindungi.
                        </p>
                    </div>
                    <div className="text-center md:text-right">
                        <p className="text-desa-green-100 text-sm">
                            Dikembangkan dengan ❤️ menggunakan React & WordPress
                        </p>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;