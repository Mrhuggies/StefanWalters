# 🚀 Push to GitHub - Quick Instructions

## ✅ Git Setup Complete!

I've already initialized git and made your first commit:
- ✅ `git init` - Done
- ✅ `git add .` - Done (48 files added)
- ✅ `git commit` - Done (all code committed)

**Commit message:** "Initial commit: Stefan Walters website - Next.js 15, WordPress integration, full SEO"

---

## 📝 Next Steps (Takes 2 minutes)

### Step 1: Create GitHub Repository

**Go to:** https://github.com/new

**Fill in:**
- Repository name: `StefanWalters`
- Description: `Stefan Walters Psychotherapy Website - Next.js 15`
- **Private** (recommended) or Public
- ⚠️ **DO NOT** check "Add a README file" (we already have one)
- ⚠️ **DO NOT** check "Add .gitignore" (we already have one)

**Click:** "Create repository"

---

### Step 2: Push Code to GitHub

After creating the repo, GitHub shows you commands. **Ignore those** and use these instead:

**Open Terminal in the project folder and run:**

```bash
cd /Users/thomashughes/Desktop/Stefan-Walters/stefan-walters-website

# Add GitHub as remote (replace YOUR-USERNAME with your GitHub username)
git remote add origin https://github.com/YOUR-USERNAME/StefanWalters.git

# Push code to GitHub
git branch -M main
git push -u origin main
```

**You'll be asked to authenticate:**
- Username: Your GitHub username
- Password: Use a **Personal Access Token** (not your regular password)

**Don't have a token?**
1. Go to: https://github.com/settings/tokens
2. Click "Generate new token" → "Classic"
3. Give it a name: "Vercel Deploy"
4. Select scopes: **repo** (check the box)
5. Click "Generate token"
6. **Copy the token** (you won't see it again!)
7. Use this token as your password when pushing

---

### Step 3: Verify

After pushing, visit:
```
https://github.com/YOUR-USERNAME/StefanWalters
```

You should see all your files! ✅

---

## 🎯 Alternative: Use the Script

I created a helper script:

```bash
cd /Users/thomashughes/Desktop/Stefan-Walters/stefan-walters-website
./push-to-github.sh
```

It will guide you through the process step-by-step.

---

## 📊 What's Included in the Commit

**48 files committed:**
- ✅ All pages (Homepage, About, Services, Brainspotting, Blog, Contact)
- ✅ Components (Navbar, Footer)
- ✅ WordPress integration (`lib/wordpress.ts`)
- ✅ SEO utilities (`lib/seo.ts`)
- ✅ All configuration files
- ✅ 10 placeholder images (WebP format)
- ✅ Complete documentation

**NOT included (in .gitignore):**
- ❌ `node_modules/` (too large, reinstalled automatically)
- ❌ `.next/` (build files, regenerated)
- ❌ `.env.local` (sensitive, configured in Vercel)

---

## 🔐 Security Note

Your `.env.local` file is **NOT** pushed to GitHub (it's in .gitignore). 

**This is good!** Environment variables should be set in Vercel:
- Go to Vercel → Project → Settings → Environment Variables
- Add: `WORDPRESS_API_URL = https://stefanwalters.com/wp-json/wp/v2`

---

## ⚡ After Pushing

Once code is on GitHub:

1. **Deploy to Vercel:**
   - Go to: https://vercel.com/new
   - Import the `StefanWalters` repository
   - Add environment variable
   - Click Deploy
   - ✅ Live in 2 minutes!

2. **Future updates:**
   ```bash
   git add .
   git commit -m "Your change description"
   git push
   # Vercel auto-deploys!
   ```

---

## 🆘 Troubleshooting

### "Permission denied" when pushing

**Solution:** Use a Personal Access Token instead of password
- Generate at: https://github.com/settings/tokens
- Use as password when pushing

### "Repository not found"

**Solution:** Double-check:
1. Repository name is exactly `StefanWalters`
2. You replaced `YOUR-USERNAME` with your actual GitHub username
3. Repository exists on GitHub

### "Updates were rejected"

**Solution:** 
```bash
git pull origin main --rebase
git push origin main
```

---

## 📞 Need Help?

The code is ready to push! Just need to:
1. Create the repo on GitHub
2. Run the push commands
3. Done! ✅

**Repository URL will be:**
```
https://github.com/YOUR-USERNAME/StefanWalters
```
