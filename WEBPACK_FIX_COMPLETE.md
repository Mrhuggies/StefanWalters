# 🚨 WEBPACK ERROR - COMPLETE FIX GUIDE

## The Problem
You're seeing: `Cannot read properties of undefined (reading 'call')`

This is a **webpack cache issue**. It happens when Next.js build artifacts get corrupted.

## ✅ THE SOLUTION (3 Steps)

### Step 1: Stop the Dev Server
Press `Ctrl + C` in your terminal to stop the running dev server.

### Step 2: Clean Everything
Run these commands **one by one**:

```bash
# Navigate to project
cd /Users/thomashughes/Desktop/Stefan-Walters/stefan-walters-website

# Remove build cache
rm -rf .next

# Remove node_modules  
rm -rf node_modules

# Remove lock file
rm -f package-lock.json
```

### Step 3: Fresh Install & Start
```bash
# Install fresh
npm install

# Start dev server
npm run dev
```

---

## 🎯 OR Use the Automated Script

I've created a script that does all of this automatically:

```bash
cd /Users/thomashughes/Desktop/Stefan-Walters/stefan-walters-website
./clean-rebuild.sh
```

This will:
1. Stop any running processes
2. Delete `.next`, `node_modules`, `package-lock.json`
3. Run `npm install`
4. Start `npm run dev`

---

## 🔍 What Each Step Does

- **`.next`** - Next.js build cache (gets corrupted sometimes)
- **`node_modules`** - All installed packages (fresh install ensures no conflicts)
- **`package-lock.json`** - Dependency tree lock file (rebuild ensures correct versions)

---

## ⚡ Expected Result

After cleanup and reinstall, you should see:

```
✓ Ready in 2.5s
○ Compiling / ...
✓ Compiled / in 3.2s
```

Then visit `http://localhost:3002` (or 3000) and the site will load correctly!

---

## 🆘 If It Still Doesn't Work

### Try a Different Port
```bash
npm run dev -- -p 3001
```

### Check for Syntax Errors
```bash
npm run build
```

This will show you if there are any syntax errors in your files.

### Nuclear Option (Last Resort)
```bash
cd ..
rm -rf stefan-walters-website
# Re-clone or re-download the project
```

---

## 📝 Why This Happens

Common causes:
- Installing packages while dev server was running
- Interrupted `npm install`
- Version conflicts between packages
- Corrupted webpack cache
- Port conflicts

**This is a common Next.js issue** - nothing is wrong with your code! Just need fresh build artifacts.

---

## ✨ After It Works

Once the dev server starts successfully:
1. Visit the site in your browser
2. Check that all pages load
3. Verify navigation works
4. Check console for any other errors

---

**TL;DR:** Delete `.next`, `node_modules`, and `package-lock.json`, then run `npm install && npm run dev`
