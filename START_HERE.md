# ⚡ START HERE - Quick Start Guide

## 🚨 First Time Setup

If you just cloned or opened this project, follow these steps **in order**:

### Step 1: Open Terminal
- On Mac: Press `Cmd + Space`, type "Terminal", press Enter
- Navigate to project: 
  ```bash
  cd /Users/thomashughes/Desktop/Stefan-Walters/stefan-walters-website
  ```

### Step 2: Install Dependencies
```bash
npm install
```

**This is REQUIRED.** It installs all the packages needed including:
- Next.js
- React  
- Lucide React (for icons)
- Tailwind CSS
- TypeScript

⏱️ **Takes about 1-2 minutes**

### Step 3: Start Development Server
```bash
npm run dev
```

You should see:
```
✓ Ready in 2.5s
○ Local: http://localhost:3000
```

### Step 4: Open in Browser
Go to: **http://localhost:3000**

---

## 🎯 You Should See

- Beautiful homepage with Stefan's information
- Navigation bar with email and social icons
- All pages working (Services, Brainspotting, Blog, Contact)

---

## ❌ Common Errors & Fixes

### Error: "Module not found: Can't resolve 'lucide-react'"
**Fix:** You skipped Step 2! Run `npm install`

### Error: "npm: command not found"  
**Fix:** Node.js isn't installed. Download from https://nodejs.org/

### Error: "Port 3000 is already in use"
**Fix:** Something else is using port 3000. Either:
- Close the other app
- Or run: `npm run dev -- -p 3001` (uses port 3001 instead)

### Error: Build fails with TypeScript errors
**Fix:** 
```bash
rm -rf node_modules package-lock.json
npm install
npm run dev
```

---

## 📱 What To Do Next

1. ✅ Verify site loads correctly
2. ✅ Check all pages work
3. ✅ Read `PROJECT_SUMMARY.md` for full overview
4. ✅ Read `LAUNCH_CHECKLIST.md` for deployment steps
5. ✅ Update `.env.local` with WordPress URL when ready

---

## 🆘 Need Help?

- Check `QUICK_FIX.md` for detailed troubleshooting
- Check `README.md` for full documentation  
- Check Next.js docs: https://nextjs.org/docs

---

## 🔥 Quick Commands

```bash
# Install dependencies
npm install

# Start dev server
npm run dev

# Build for production
npm run build

# Run production build
npm start

# Check for errors
npm run lint
```

That's it! You're ready to go 🚀
