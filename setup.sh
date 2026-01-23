#!/bin/bash

# Stefan Walters Website - Quick Setup Script
# Run this after cloning the repository

echo "🚀 Setting up Stefan Walters Website..."
echo ""

# Check if Node.js is installed
if ! command -v node &> /dev/null; then
    echo "❌ Node.js is not installed. Please install Node.js first:"
    echo "   https://nodejs.org/"
    exit 1
fi

echo "✅ Node.js detected: $(node --version)"
echo ""

# Check if npm is installed
if ! command -v npm &> /dev/null; then
    echo "❌ npm is not installed. Please install npm first."
    exit 1
fi

echo "✅ npm detected: $(npm --version)"
echo ""

# Install dependencies
echo "📦 Installing dependencies..."
npm install

if [ $? -eq 0 ]; then
    echo "✅ Dependencies installed successfully!"
else
    echo "❌ Failed to install dependencies"
    exit 1
fi

echo ""

# Create .env.local if it doesn't exist
if [ ! -f ".env.local" ]; then
    echo "📝 Creating .env.local file..."
    cp .env.example .env.local
    echo "✅ Created .env.local from .env.example"
    echo ""
    echo "⚠️  IMPORTANT: Edit .env.local and add your WordPress URL:"
    echo "   WORDPRESS_API_URL=https://your-wordpress-site.com/wp-json/wp/v2"
else
    echo "ℹ️  .env.local already exists"
fi

echo ""
echo "✨ Setup complete! Next steps:"
echo ""
echo "1. Edit .env.local and add your WordPress API URL"
echo "2. Run: npm run dev"
echo "3. Visit: http://localhost:3000"
echo ""
echo "📚 For more information, see README.md"
echo ""
