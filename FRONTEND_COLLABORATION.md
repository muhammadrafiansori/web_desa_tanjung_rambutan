# 🎨 Panduan Frontend Developer
## Website Desa Tanjung Rambutan

---

## 🎯 **Your Role: Frontend Development & Integration**

Teman Anda handle WordPress backend, Anda fokus di React frontend dan integration.

---

## 🚀 **Setup Development**

### **1. Start Frontend Development**
```bash
cd frontend
npm run dev
```
**Frontend URL**: http://localhost:5173

### **2. Update API URL saat Kolaborasi**
Edit file `frontend/.env.local`:
```bash
# Ganti dengan IP address teman Anda
VITE_WP_API_URL=http://192.168.1.85:8000/wp-json
```

Restart development server setelah edit .env:
```bash
# Ctrl+C untuk stop, kemudian
npm run dev
```

---

## 🔌 **Integration Checklist**

### **Saat Teman Kirim IP Address:**

1. **Update .env.local**
   ```bash
   VITE_WP_API_URL=http://[TEMAN-IP]:8000/wp-json
   ```

2. **Test API Connection**
   - Buka browser console (F12)
   - Check Network tab untuk API calls
   - Verify no CORS errors

3. **Verify Content Loading**
   - Homepage news section displays WordPress content
   - Images load correctly
   - No fallback data showing

---

## 🛠️ **Development Tasks**

### **API Integration Ready ✅**
- `api.getPosts()` - WordPress posts
- `api.getPengumuman()` - Announcements  
- `api.getDesaStats()` - Village statistics
- Error handling & fallback data

### **UI/UX Improvements 🔄**
- [ ] News card responsive layout
- [ ] Image lazy loading optimization
- [ ] Loading states enhancement
- [ ] Mobile navigation improvements
- [ ] Typography consistency

### **Content Adaptations 🔄**
Based on teman's content:
- [ ] News excerpt length adjustment
- [ ] Image aspect ratio handling
- [ ] Date format localization
- [ ] Category/tag display

---

## 🔍 **Testing Workflow**

### **When Backend is Ready:**

1. **API Health Check**
   ```javascript
   // Test di browser console
   fetch('http://[TEMAN-IP]:8000/wp-json/wp/v2/posts')
     .then(r => r.json())
     .then(console.log)
   ```

2. **Content Verification**
   - News articles appear on homepage
   - Featured images load properly
   - Excerpts display correctly
   - Dates format properly

3. **Responsive Testing**
   - Mobile layout (375px)
   - Tablet layout (768px)
   - Desktop layout (1024px+)

---

## 🚨 **Troubleshooting**

### **API Connection Issues**
```javascript
// Check current API URL
console.log(import.meta.env.VITE_WP_API_URL);

// Test with curl
curl http://[TEMAN-IP]:8000/wp-json/wp/v2/posts
```

### **CORS Errors**
- Plugin "Desa API Enhancements" handles CORS
- Ask teman to restart PHP server
- Verify plugin is active

### **No Content Showing**
- Check if teman has published posts (not drafts)
- Verify API returns data in browser
- Check browser console for errors

---

## 📱 **Communication dengan Backend Dev**

### **Request dari Teman:**
- "Kirim IP address dan port backend"
- "Confirm plugin Desa API Enhancements active"  
- "Create 3-5 sample posts with featured images"
- "Test API endpoint: http://[IP]:8000/wp-json/wp/v2/posts"

### **Update yang Anda Berikan:**
- "Frontend ready for testing"
- "API connection successful"
- "Content displaying correctly"
- "Need adjustment on [specific feature]"

---

## 🔄 **Daily Workflow**

### **Morning:**
```bash
cd frontend
npm run dev
# Check if backend is running
# Update .env.local if needed
```

### **During Development:**
- Monitor backend changes in real-time
- Adjust UI based on content
- Test responsive layouts
- Optimize performance

### **Evening Git Workflow:**
```bash
git add frontend/
git commit -m "feat: improve news layout and API integration"
git push origin main
```

---

## 📊 **Performance Checklist**

- [ ] Images optimized and lazy loaded
- [ ] API calls debounced/cached
- [ ] Loading states smooth
- [ ] Error boundaries implemented
- [ ] SEO meta tags updated
- [ ] Accessibility standards met

---

## 🎉 **Success Metrics**

- ✅ Real WordPress content displays on frontend
- ✅ No fallback data showing
- ✅ Images load from WordPress media library
- ✅ Responsive design works perfectly
- ✅ Fast loading times (<3 seconds)
- ✅ No console errors

---

**🚀 Ready untuk kolaborasi async dengan Backend Developer!**