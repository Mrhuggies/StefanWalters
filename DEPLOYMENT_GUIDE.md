# Complete Deployment Guide - GitHub → Vercel

## Overview

This guide shows you how to deploy the Stefan Walters website so that:
1. You push code to GitHub
2. Vercel automatically detects the push
3. Your live site updates within 2 minutes

**Time to complete:** 15-20 minutes
**Cost:** $0 (Free tier is plenty for this site)

---

## Phase 1: Push to GitHub (5 minutes)

### Step 1: Create GitHub Repository

1. Go to: https://github.com/new
2. Repository name: `stefan-walters-website` (or whatever you want)
3. Make it **Private** (recommended for client work)
4. **Don't** initialize with README (we already have files)
5. Click **Create repository**

### Step 2: Initialize Git & Push

Open Terminal in your project directory:

```bash
# Navigate to project
cd /Users/thomashughes/Desktop/Stefan-Walters/stefan-walters-website

# Initialize git (if not already done)
git init

# Add all files
git add .

# Make first commit
git commit -m "Initial commit - Stefan Walters website"

# Add GitHub as remote (replace YOUR-USERNAME and YOUR-REPO)
git remote add origin https://github.com/YOUR-USERNAME/stefan-walters-website.git

# Push to GitHub
git branch -M main
git push -u origin main
```

**Enter your GitHub credentials when prompted.**

✅ **Check:** Visit your GitHub repo - you should see all the files!

---

## Phase 2: Deploy to Vercel (5 minutes)

### Step 1: Sign Up for Vercel

1. Go to: https://vercel.com/signup
2. Click **"Continue with GitHub"**
3. Authorize Vercel to access your GitHub account
4. ✅ Done! You're signed in

### Step 2: Import Project

1. Click **"Add New..."** → **"Project"**
2. You'll see a list of your GitHub repositories
3. Find `stefan-walters-website`
4. Click **"Import"**

### Step 3: Configure Project

Vercel will auto-detect Next.js. You'll see:

**Framework Preset:** Next.js ✅ (auto-detected)
**Root Directory:** ./ ✅
**Build Command:** `npm run build` ✅ (auto-filled)
**Output Directory:** .next ✅ (auto-filled)

**Environment Variables (IMPORTANT!):**

Click **"Environment Variables"** and add:

```
Name: WORDPRESS_API_URL
Value: https://stefanwalters.com/wp-json/wp/v2
```

### Step 4: Deploy!

1. Click **"Deploy"**
2. Wait 2-3 minutes (Vercel is building your site)
3. ✅ You'll see: **"Congratulations! Your project has been deployed"**

You'll get a URL like: `https://stefan-walters-website.vercel.app`

---

## Phase 3: Connect Custom Domain (5-10 minutes)

### Step 1: Add Domain in Vercel

1. In your Vercel project, click **"Settings"**
2. Click **"Domains"**
3. Enter: `stefanwalters.com`
4. Click **"Add"**

### Step 2: Configure DNS

Vercel will show you DNS records to add. You need to add these at your domain registrar (where you bought the domain - GoDaddy, Namecheap, etc.)

**Option A - If using apex domain (stefanwalters.com):**

Add these records at your DNS provider:

```
Type: A
Name: @
Value: 76.76.21.21

Type: CNAME  
Name: www
Value: cname.vercel-dns.com
```

**Option B - If using subdomain (www.stefanwalters.com):**

```
Type: CNAME
Name: www
Value: cname.vercel-dns.com
```

### Step 3: Wait for DNS Propagation

- DNS changes take 5 minutes to 48 hours (usually under 1 hour)
- Vercel will automatically provision SSL certificate
- You'll see ✅ when it's ready

---

## Phase 4: Set Up Automatic Deployments

**This is already done!** 🎉

Vercel automatically watches your GitHub repo. Now:

1. **Make changes locally** (edit files)
2. **Commit changes:** `git add . && git commit -m "Updated contact page"`
3. **Push to GitHub:** `git push`
4. **Vercel auto-deploys** (2 minutes later, live site updates!)

---

## Your Workflow Going Forward

### Making Updates

```bash
# 1. Make your changes (edit files in VS Code, etc.)

# 2. See what changed
git status

# 3. Add changes
git add .

# 4. Commit with message
git commit -m "Updated services pricing"

# 5. Push to GitHub
git push

# 6. Vercel deploys automatically!
# Visit: https://vercel.com/YOUR-USERNAME/stefan-walters-website/deployments
# to see deployment progress
```

### Deployment Process

```
Local Changes
    ↓
git push
    ↓
GitHub receives update
    ↓
Vercel detects push (instant)
    ↓
Vercel builds site (1-2 min)
    ↓
New version live! (automatically)
```

You'll get email notifications for each deployment.

---

## Vercel Dashboard Overview

**Main sections:**
- **Deployments** - See all deploys, rollback if needed
- **Domains** - Manage custom domains
- **Settings** - Environment variables, etc.
- **Analytics** - See traffic (free tier included)

**Useful URLs:**
- Live site: `https://yourdomain.com`
- Vercel dashboard: `https://vercel.com/dashboard`
- Deployment logs: Shows build process, any errors

---

## Bonus: WordPress Webhooks (Optional)

Want blog posts to appear **instantly** instead of waiting 60 seconds?

### Install WP Webhooks in WordPress

1. WordPress admin → Plugins → Add New
2. Search "WP Webhooks"
3. Install & Activate

### Get Vercel Deploy Hook

1. Vercel dashboard → Your project → Settings → Git
2. **Deploy Hooks** → **Create Hook**
3. Name: "WordPress Publish"
4. Branch: main
5. Copy the webhook URL (looks like: `https://api.vercel.com/v1/integrations/deploy/...`)

### Configure WordPress Webhook

1. WordPress → Settings → WP Webhooks
2. **Add Webhook**
3. Trigger: `publish_post`
4. URL: [Paste Vercel deploy hook URL]
5. Save

**Now:** When you publish a WordPress post → Vercel rebuilds site → Post appears within 2 minutes!

---

## Monitoring & Maintenance

### Check Deployment Status

Visit: `https://vercel.com/YOUR-USERNAME/stefan-walters-website`

You'll see:
- ✅ Production (live site)
- 🕐 Building (if deploying)
- ❌ Failed (if errors - click for logs)

### View Build Logs

If deployment fails:
1. Click the failed deployment
2. Click **"Building"** to see logs
3. Look for error messages
4. Fix the error locally
5. Push again

### Rollback if Needed

Made a mistake?
1. Go to **Deployments**
2. Find previous working version
3. Click **"⋯"** → **"Promote to Production"**
4. Old version is now live (instant rollback!)

---

## Alternative: Deploy to Your Own Server

If you have a VPS/server and don't want Vercel:

### Requirements:
- Node.js installed on server
- Nginx or Apache
- SSH access
- Basic Linux knowledge

### Process:
1. SSH into server
2. Clone GitHub repo
3. Install dependencies: `npm install`
4. Build: `npm run build`
5. Start: `npm start` (or use PM2 for process management)
6. Configure Nginx reverse proxy
7. Set up SSL certificate (Let's Encrypt)

**But honestly:** Vercel is easier, faster, and free. Save your time!

---

## Costs

### Vercel (Recommended)

**Hobby Plan (FREE):**
- Unlimited deployments
- Unlimited bandwidth
- Automatic HTTPS
- Perfect for this site

**Pro Plan ($20/month):**
- Only needed if you get 100GB+ traffic/month
- More team members
- Priority support

### Your Own Server

**VPS Hosting ($5-20/month):**
- DigitalOcean, Linode, etc.
- More control
- More maintenance
- Need to manage security, updates, etc.

---

## Troubleshooting

### Build Fails on Vercel

**Error: "Module not found"**
```bash
# Make sure package.json is committed
git add package.json
git commit -m "Add package.json"
git push
```

**Error: "Build exceeded maximum duration"**
- Shouldn't happen with this site
- Contact Vercel support (they're very responsive)

### Domain Not Working

**Check DNS:**
```bash
# In terminal
dig stefanwalters.com

# Should show Vercel's IP: 76.76.21.21
```

**Still not working?**
- Wait longer (DNS can take up to 48 hours)
- Check DNS settings at your registrar
- Make sure you added the right records

### Environment Variables Not Working

1. Vercel dashboard → Settings → Environment Variables
2. Make sure `WORDPRESS_API_URL` is set
3. **Important:** After adding env vars, you must **redeploy**
4. Go to Deployments → Latest → **"⋯"** → **"Redeploy"**

---

## Quick Reference

### Essential Commands

```bash
# Check status
git status

# Add all changes
git add .

# Commit
git commit -m "Your message"

# Push (triggers deploy)
git push

# Pull latest from GitHub
git pull

# Check remote
git remote -v
```

### Important URLs

- **Vercel Dashboard:** https://vercel.com/dashboard
- **GitHub Repo:** https://github.com/YOUR-USERNAME/stefan-walters-website
- **Live Site:** https://stefanwalters.com (after domain setup)

### Files to Never Commit

Already in `.gitignore`:
- `node_modules/` (dependencies - huge, reinstalled automatically)
- `.next/` (build output - regenerated on deploy)
- `.env.local` (sensitive - only local)

**Environment variables go in Vercel dashboard**, not in code!

---

## Summary

✅ **Setup once:** GitHub repo + Vercel connection
✅ **Daily workflow:** Edit → Commit → Push → Auto-deploy!
✅ **Zero maintenance:** Vercel handles everything
✅ **Free hosting:** No monthly costs
✅ **Automatic HTTPS:** Secure by default
✅ **Instant rollbacks:** One click to undo

**Total time:** 20 minutes to set up, then 30 seconds per deploy going forward!

---

## Need Help?

**Vercel Support:**
- Documentation: https://vercel.com/docs
- Support: support@vercel.com
- They're incredibly responsive!

**GitHub Issues:**
- Git basics: https://docs.github.com/en/get-started

**Me:**
- I can help with any technical issues! 😊
