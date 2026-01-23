#!/bin/bash

# Stefan Walters Website - Complete Cleanup & Rebuild Script
# This fixes webpack module errors by cleaning all caches

echo "🧹 Cleaning up build artifacts and caches..."
echo ""

# Stop any running Next.js processes
echo "Stopping any running processes..."
pkill -f "next dev" 2>/dev/null || true

# Remove build artifacts
echo "Removing .next directory..."
rm -rf .next

echo "Removing node_modules..."
rm -rf node_modules

echo "Removing package-lock.json..."
rm -f package-lock.json

echo "Removing yarn.lock (if exists)..."
rm -f yarn.lock

echo ""
echo "✅ Cleanup complete!"
echo ""
echo "📦 Installing fresh dependencies..."
npm install

if [ $? -eq 0 ]; then
    echo ""
    echo "✅ Dependencies installed successfully!"
    echo ""
    echo "🚀 Starting development server..."
    npm run dev
else
    echo ""
    echo "❌ Installation failed. Please check the errors above."
    exit 1
fi
