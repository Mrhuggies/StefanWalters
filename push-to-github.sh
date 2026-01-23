#!/bin/bash

# GitHub Repository Creation & Push Script
# This will create the repo and push your code

echo "🚀 Stefan Walters Website - GitHub Setup"
echo ""
echo "To create the repo, you have two options:"
echo ""
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
echo "OPTION 1: Create via GitHub Website (Easiest)"
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
echo ""
echo "1. Go to: https://github.com/new"
echo "2. Repository name: StefanWalters"
echo "3. Description: Stefan Walters Psychotherapy Website"
echo "4. Choose: Private (recommended)"
echo "5. DO NOT initialize with README (we already have files)"
echo "6. Click: Create repository"
echo ""
echo "Then come back here and press ENTER to continue..."
read -p ""

echo ""
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
echo "Now pushing to GitHub..."
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
echo ""

# Get GitHub username
read -p "Enter your GitHub username: " github_username

# Set remote
git remote add origin "https://github.com/$github_username/StefanWalters.git"

# Rename branch to main
git branch -M main

# Push to GitHub
echo ""
echo "Pushing code to GitHub..."
echo ""
git push -u origin main

if [ $? -eq 0 ]; then
    echo ""
    echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
    echo "✅ SUCCESS! Code pushed to GitHub"
    echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
    echo ""
    echo "📦 Repository: https://github.com/$github_username/StefanWalters"
    echo ""
    echo "Next steps:"
    echo "1. Deploy to Vercel: https://vercel.com/new"
    echo "2. Import the 'StefanWalters' repository"
    echo "3. Add environment variable: WORDPRESS_API_URL"
    echo ""
else
    echo ""
    echo "❌ Push failed. Check the error above."
    echo ""
    echo "Common issues:"
    echo "- Wrong GitHub username"
    echo "- Repository doesn't exist yet"
    echo "- Need to authenticate (enter password/token)"
fi
