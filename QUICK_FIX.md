# Quick Fix for Build Error

## The Problem
The error `Module not found: Can't resolve 'lucide-react'` happens because the `lucide-react` package hasn't been installed yet.

## The Solution

Open your terminal and run these commands:

```bash
# Navigate to the project directory
cd /Users/thomashughes/Desktop/Stefan-Walters/stefan-walters-website

# Install all dependencies (including lucide-react)
npm install

# Start the development server
npm run dev
```

## What This Does

1. `npm install` will read the `package.json` file and install:
   - Next.js 15.2.0 (latest version)
   - React 19
   - Lucide React (for the icons in Navbar/Footer)
   - All other dependencies

2. `npm run dev` will start the development server at `http://localhost:3000`

## Expected Output

You should see:
```
✓ Ready in 2.5s
○ Compiling / ...
✓ Compiled / in 3.2s
```

Then visit `http://localhost:3000` in your browser!

## If You Still Get Errors

### Error: "npm: command not found"
- Node.js isn't installed
- Install from: https://nodejs.org/
- Download the LTS version

### Error: Permission denied
Try:
```bash
sudo npm install
```

### Error: Different module not found
Run:
```bash
npm install --force
```

## Alternative: Use Yarn

If you prefer Yarn:
```bash
yarn install
yarn dev
```

---

After running `npm install`, the project will have everything it needs and should compile successfully!
