# 🔑 SSH Key Setup Guide untuk Team

## 📋 SSH Key yang Sudah Dibuat untuk Admin (4hannnn)

### ✅ Status SSH Key:
- **Private Key**: `~/.ssh/id_rsa` ✅ Created
- **Public Key**: `~/.ssh/id_rsa.pub` ✅ Created  
- **Key Type**: RSA 4096-bit (High Security)
- **Email**: 4hannnn@github.com

### 🔐 Your Public Key (COPY THIS TO GITHUB):
```
ssh-rsa AAAAB3NzaC1yc2EAAAADAQABAAACAQDiAYMxYlgz1lbkzeQzB1yD6BNRQA2eQs0/5ema/ZhRSJpinttIKPgsr5211u5nLEoWMDm6tGy+akoFdcyFNnHQutgTDsLsTvIcbYrTZNGvscvFQfwJ6iTy/t6pURNCx9cdhaQ5/pFAwoHfBipOfaG5yq9jgCNobWHRs1b7YiGrPCE45xAVBynI9ODtM4a037UQWHFm5j8H6teBck2TBul34EMwfFp89eSmXvv8Tk4O6vpSGiw/6an8Al9/TL3hJQxwtf8UaR2WVghghvb9PuDO2A4/XflgHRZob5DmZ9zT7qhpkTS+/jrXxh5IARcustS0fZWCz0uDhwiRA2Kz6U2dpIyhwxmbgnjLF8OjOG3+PEJZcQzRaiVFZfa7x8uEBfb0H34hZ3bqBR8yywu3Ehr6G6MOuNn0sE1nVy9D7au79uaSVqpqjZtQrWaOlfIPTg/qnvb9eZVDBtNd9Cq3740T+QqBbld/l++ctfZmbTLS+aqUS5q8TqUy3m7Y6o1Rq3q1KOetWfYJNoy40l7OLcHC8pes8wT/r5RleLMz45/ri89UZpWxHBAd8jOVjwLHIUCnaSZJLtDZUNTOIZvGyGo8lj9npx40eRPPm+QcdrkXW20bYPib1KdVMIA4lgJ2Bx75vMXT8957/Qd1LpN6rHRRa4dm7nbwj2yAnVFgdVYueQ== 4hannnn@github.com
```

## 🎯 Next Steps untuk Admin (4hannnn):

### 1. Add SSH Key to GitHub Account:
```
1. Go to: https://github.com/settings/keys
2. Click "New SSH key"
3. Title: "Development Machine - Oct 2025"
4. Key type: Authentication Key
5. Paste the public key above
6. Click "Add SSH key"
```

### 2. Test SSH Connection:
```bash
ssh -T git@github.com
# Should return: "Hi 4hannnn! You've successfully authenticated..."
```

### 3. Update Repository Remote (if needed):
```bash
# Check current remote
git remote -v

# If using HTTPS, change to SSH
git remote set-url origin git@github.com:4hannnn/web_desa_tanjung_rambutan.git

# Verify
git remote -v
```

## 👥 SSH Setup Guide untuk Team Members

### Step 1: Generate SSH Key (Each Team Member)
```bash
# Open terminal/PowerShell dan jalankan:
ssh-keygen -t rsa -b 4096 -C "your.email@example.com"

# Press Enter untuk default location
# Press Enter twice (no passphrase untuk kemudahan)
```

### Step 2: Copy Public Key
```bash
# Windows PowerShell:
cat ~/.ssh/id_rsa.pub

# Mac/Linux:
pbcopy < ~/.ssh/id_rsa.pub
# atau
cat ~/.ssh/id_rsa.pub
```

### Step 3: Add to GitHub Account
```
1. Login to GitHub
2. Go to Settings → SSH and GPG keys
3. Click "New SSH key"
4. Paste public key content
5. Click "Add SSH key"
```

### Step 4: Test & Clone Repository
```bash
# Test SSH connection
ssh -T git@github.com

# Clone repository with SSH
git clone git@github.com:4hannnn/web_desa_tanjung_rambutan.git

# Enter project directory
cd web_desa_tanjung_rambutan

# Setup development environment
cd frontend
npm install
npm run dev
```

## 📱 Team Member Setup Checklist

### For Each Developer:
- [ ] Accept GitHub repository invitation
- [ ] Generate SSH key pair
- [ ] Add public key to GitHub account  
- [ ] Test SSH connection to GitHub
- [ ] Clone repository using SSH
- [ ] Setup development environment
- [ ] Test that they can push/pull code

### Verification Commands:
```bash
# Check SSH key exists
ls ~/.ssh/id_rsa*

# Test GitHub connection
ssh -T git@github.com

# Check repository access
git clone git@github.com:4hannnn/web_desa_tanjung_rambutan.git

# Test development server
cd web_desa_tanjung_rambutan/frontend
npm install && npm run dev
```

## 🚨 Troubleshooting Common Issues

### "Permission denied (publickey)"
```bash
# Solution 1: Add SSH key to agent
ssh-add ~/.ssh/id_rsa

# Solution 2: Check SSH key exists
ls ~/.ssh/id_rsa*

# Solution 3: Regenerate key if needed
ssh-keygen -t rsa -b 4096 -C "your.email@example.com"
```

### "Repository not found"
- Verify repository invitation was accepted
- Check SSH key is added to GitHub account
- Ensure using SSH URL (not HTTPS)

### "Host key verification failed"
```bash
# Add GitHub to known hosts
ssh-keyscan -t rsa github.com >> ~/.ssh/known_hosts
```

## 💡 Pro Tips for Team

### Daily Git Workflow:
```bash
# Morning routine
git checkout develop
git pull origin develop

# Create feature branch
git checkout -b feature/FE-new-component

# After development
git add .
git commit -m "[FE] Add new component"
git push origin feature/FE-new-component

# Create PR on GitHub web interface
```

### SSH Best Practices:
- ✅ Use different SSH keys per device
- ✅ Keep private key secure (never share)
- ✅ Add keys only to your own GitHub account
- ✅ Regular key rotation (yearly)
- ❌ Don't use same key across multiple services

## 📞 Team Support

### Need Help?
- **Admin Contact**: 4hannnn
- **Repository**: https://github.com/4hannnn/web_desa_tanjung_rambutan
- **Daily Standups**: 9:00 AM for technical issues
- **Documentation**: Check `/docs` folder in repository

### Quick Commands Reference:
```bash
# Check SSH connection
ssh -T git@github.com

# View repository info
gh repo view 4hannnn/web_desa_tanjung_rambutan

# Check authentication status
gh auth status

# List SSH keys
ls ~/.ssh/id_rsa*
```

---

**SSH setup ensures secure and seamless collaboration! 🚀**

*Generated: October 28, 2025*