# 🚀 Team Setup Guide - Website Desa Tanjung Rambutan

## 📋 Prerequisites

### Software Required:
- **Node.js** (v18 atau lebih baru) - [Download here](https://nodejs.org/)
- **Git** - [Download here](https://git-scm.com/)
- **Code Editor** - VS Code recommended

### VS Code Extensions (Recommended):
- Tailwind CSS IntelliSense
- ES7+ React/Redux/React-Native snippets
- Auto Rename Tag
- Bracket Pair Colorizer
- GitLens

## 🔧 Initial Setup (One-time per developer)

### 1. Clone Repository
```bash
# Clone dari GitHub
git clone https://github.com/4hannnn/web_desa_tanjung_rambutan.git

# Masuk ke folder project
cd web_desa_tanjung_rambutan
```

### 2. Setup Frontend Environment
```bash
# Masuk ke folder frontend
cd frontend

# Install ALL dependencies (termasuk Tailwind CSS)
npm install

# Verify installation
npm list tailwindcss
# Should show: tailwindcss@3.4.18
```

### 3. Setup Backend (WordPress)
```bash
# Kembali ke root folder
cd ..

# Setup WordPress di folder wordpress-backend
cd wordpress-backend

# Follow WordPress installation guide
# (Setup database, wp-config.php, etc.)
```

### 4. Environment Configuration

#### Frontend (.env file):
```bash
# Di folder frontend, buat file .env
cd frontend
touch .env  # Linux/Mac
# atau buat manual di Windows

# Isi .env file:
VITE_API_URL=http://localhost/wordpress-backend/wp-json
VITE_APP_NAME="Desa Tanjung Rambutan"
```

#### Verify Setup:
```bash
# Test frontend development server
npm run dev

# Should open http://localhost:5173
# Tailwind CSS should work automatically
```

## ✅ Verification Checklist

### Frontend Setup Success:
- [ ] `npm install` completed without errors
- [ ] `npm run dev` starts development server
- [ ] http://localhost:5173 loads website
- [ ] Tailwind CSS classes work (navbar has colors)
- [ ] No console errors in browser

### What's Already Included:
- ✅ **Tailwind CSS** - Pre-configured and ready to use
- ✅ **React Router** - For navigation
- ✅ **Axios** - For API calls
- ✅ **PostCSS** - For CSS processing
- ✅ **Vite** - For fast development
- ✅ **ESLint** - For code quality

## 🔄 Daily Development Workflow

### Morning Setup:
```bash
# Pull latest changes
git checkout develop
git pull origin develop

# Start development server
cd frontend
npm run dev
```

### Create New Feature:
```bash
# Create feature branch
git checkout -b feature/FE-new-component

# Make changes, test locally
# Commit changes
git add .
git commit -m "[FE] Add new component"
git push origin feature/FE-new-component

# Create Pull Request on GitHub
```

## 🐛 Common Issues & Solutions

### Issue: `npm install` fails
**Solution:**
```bash
# Clear npm cache
npm cache clean --force

# Delete node_modules and package-lock.json
rm -rf node_modules package-lock.json

# Reinstall
npm install
```

### Issue: Tailwind classes not working
**Solution:**
1. Check if development server is running
2. Verify `tailwind.config.js` exists
3. Check `postcss.config.js` configuration
4. Restart development server

### Issue: Git permission denied
**Solution:**
```bash
# Configure Git credentials
git config --global user.name "Your Name"
git config --global user.email "your.email@example.com"

# Setup SSH key (recommended)
ssh-keygen -t rsa -b 4096 -C "your.email@example.com"
```

## 📞 Getting Help

### Team Communication:
- **Daily Standups**: 9:00 AM
- **GitHub Issues**: For bugs and feature requests
- **Team Chat**: Discord/Slack channel
- **Code Reviews**: GitHub Pull Requests

### Resources:
- **Project Documentation**: `/docs` folder
- **API Documentation**: WordPress backend docs
- **Design System**: Figma/Component library
- **Tailwind Docs**: https://tailwindcss.com/docs

## 🎯 Development Standards

### Code Style:
```javascript
// Component naming: PascalCase
const HeaderComponent = () => {
  return (
    <header className="bg-village-primary text-white">
      <h1 className="text-xl font-bold">Desa Tanjung Rambutan</h1>
    </header>
  );
};

// File naming: kebab-case
header-component.jsx
news-list.jsx
```

### Git Commit Messages:
```
[FE] Add responsive navigation component
[BE] Implement news API endpoint
[FIX] Resolve mobile menu toggle issue
[DOCS] Update setup documentation
```

### Tailwind Best Practices:
```jsx
// Good: Use utility classes
<div className="bg-white rounded-lg shadow-md p-4 hover:shadow-lg transition-shadow">

// Good: Custom colors from config
<div className="bg-village-primary text-white">

// Avoid: Inline styles
<div style={{backgroundColor: 'green'}}>
```

---

**Welcome to the team! Happy coding! 🚀**

*Last updated: October 28, 2025*