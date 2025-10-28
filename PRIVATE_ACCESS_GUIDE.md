# 🔐 Private Repository Access Guide

## 🎯 Overview
Repository ini bersifat **PRIVATE**. Team members perlu setup khusus untuk mengakses.

## 👥 Getting Repository Access

### Step 1: Request Access from Admin
1. **Admin** (4hannnn) invite team member via GitHub
2. Team member akan terima email invitation
3. Accept invitation dari email atau GitHub notification

### Step 2: Choose Access Method
Ada 2 cara untuk clone private repository:

## 🔑 Method 1: SSH Keys (RECOMMENDED)

### Why SSH Keys?
- ✅ **More Secure** - No password needed
- ✅ **Convenient** - One-time setup
- ✅ **Professional** - Industry standard
- ✅ **No Token Expiry** - Permanent access

### Setup SSH Keys:

#### 1. Generate SSH Key
```bash
# Check if SSH key already exists
ls -la ~/.ssh

# Generate new SSH key (if doesn't exist)
ssh-keygen -t rsa -b 4096 -C "your.email@example.com"

# Press Enter for default location
# Press Enter twice for no passphrase (optional)
```

#### 2. Add SSH Key to SSH Agent
```bash
# Start SSH agent
eval "$(ssh-agent -s)"

# Add SSH key to agent
ssh-add ~/.ssh/id_rsa
```

#### 3. Copy Public Key
```bash
# Windows
clip < ~/.ssh/id_rsa.pub

# Mac
pbcopy < ~/.ssh/id_rsa.pub

# Linux
cat ~/.ssh/id_rsa.pub
# Then copy the output
```

#### 4. Add to GitHub Account
```
1. Go to GitHub Settings: https://github.com/settings/keys
2. Click "New SSH key"
3. Title: "Development Machine" (atau nama device)
4. Paste public key content
5. Click "Add SSH key"
```

#### 5. Test SSH Connection
```bash
ssh -T git@github.com
# Should return: "Hi username! You've successfully authenticated..."
```

#### 6. Clone Repository (SSH)
```bash
git clone git@github.com:4hannnn/web_desa_tanjung_rambutan.git
cd web_desa_tanjung_rambutan
```

## 🎫 Method 2: Personal Access Token (Alternative)

### When to Use:
- SSH setup not possible
- Corporate firewall blocks SSH
- Temporary access needed

### Setup Personal Access Token:

#### 1. Generate Token
```
1. Go to GitHub Settings: https://github.com/settings/tokens
2. Click "Generate new token" → "Generate new token (classic)"
3. Set expiration (90 days recommended)
4. Select scopes:
   ✅ repo (full repository access)
   ✅ workflow (if using GitHub Actions)
5. Click "Generate token"
6. COPY TOKEN IMMEDIATELY (won't show again!)
```

#### 2. Clone Repository (HTTPS + Token)
```bash
git clone https://github.com/4hannnn/web_desa_tanjung_rambutan.git
# When prompted:
# Username: your_github_username
# Password: paste_your_token_here
```

#### 3. Store Credentials (Optional)
```bash
# Store credentials to avoid repeated login
git config --global credential.helper store

# Or use GitHub CLI
gh auth login
```

## 📋 Team Onboarding Checklist

### For Admin (4hannnn):
- [ ] Invite team members as collaborators
- [ ] Set appropriate permission levels
- [ ] Share this access guide with team
- [ ] Verify each member can clone successfully

### For Team Members:
- [ ] Accept GitHub repository invitation
- [ ] Choose access method (SSH recommended)
- [ ] Setup SSH keys or Personal Access Token
- [ ] Test clone repository
- [ ] Follow development setup guide
- [ ] Join team communication channels

## 🚨 Security Best Practices

### SSH Keys:
- ✅ **Use strong passphrase** (optional but recommended)
- ✅ **Different keys per device** 
- ✅ **Regular key rotation** (yearly)
- ❌ **Never share private keys**
- ❌ **Don't commit keys to repository**

### Personal Access Tokens:
- ✅ **Set reasonable expiration** (90 days max)
- ✅ **Minimal required permissions**
- ✅ **Regenerate before expiry**
- ❌ **Never share tokens**
- ❌ **Don't hardcode in scripts**

## 🔄 Daily Git Workflow

### With SSH (Recommended):
```bash
# Clone (one-time)
git clone git@github.com:4hannnn/web_desa_tanjung_rambutan.git

# Daily workflow
git pull origin develop
git checkout -b feature/FE-new-component
# ... make changes ...
git add .
git commit -m "[FE] Add new component"
git push origin feature/FE-new-component
```

### With HTTPS + Token:
```bash
# Clone (one-time)
git clone https://github.com/4hannnn/web_desa_tanjung_rambutan.git

# Same workflow as SSH, but may prompt for credentials
```

## 🐛 Troubleshooting

### SSH Issues:

#### "Permission denied (publickey)"
```bash
# Check SSH key is loaded
ssh-add -l

# Re-add key if needed
ssh-add ~/.ssh/id_rsa

# Test connection
ssh -T git@github.com
```

#### "Host key verification failed"
```bash
# Add GitHub to known hosts
ssh-keyscan -t rsa github.com >> ~/.ssh/known_hosts
```

### HTTPS Issues:

#### "Authentication failed"
- Verify username is correct
- Regenerate Personal Access Token
- Check token permissions include "repo"

#### "Repository not found"
- Verify you have access to repository
- Check repository name spelling
- Ensure invitation was accepted

## 📞 Getting Help

### Admin Contact:
- **GitHub**: @4hannnn
- **Repository**: https://github.com/4hannnn/web_desa_tanjung_rambutan

### Team Communication:
- Daily standups for access issues
- GitHub Issues for technical problems
- Team chat for quick questions

### Useful Commands:
```bash
# Check repository access
gh repo view 4hannnn/web_desa_tanjung_rambutan

# Check your GitHub authentication
gh auth status

# List your repositories
gh repo list

# Check remote URL
git remote -v
```

---

**Access setup is crucial for team collaboration! 🔐**

*Updated: October 28, 2025*