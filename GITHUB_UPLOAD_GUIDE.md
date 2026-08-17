# How to Upload Cathrin's Portfolio to GitHub

Here are two easy ways to upload this portfolio to GitHub (via Drag & Drop OR Git Terminal Commands).

---

## Method 1: Drag and Drop via GitHub Web (Easy, No Commands)

1. Open your project folder `d:\Cathy PF`.
2. Go to [GitHub.com](https://github.com) and log in.
3. Click the **"+"** button at the top right -> **New repository**.
4. Give your repository a name (e.g. `cathrin-portfolio`), set it to **Public**, and click **Create repository**.
5. On the new repository page, click **"uploading an existing file"**.
6. **Select all files** inside `d:\Cathy PF` (except `node_modules` folder) and **drag & drop** them into the browser window.
7. Click the green **"Commit changes"** button at the bottom.

---

## Method 2: Using Terminal Commands (Fast & Recommended)

Open VS Code Terminal or PowerShell inside `d:\Cathy PF` and run:

```bash
# 1. Initialize Git
git init

# 2. Add all project files
git add .

# 3. Commit your files
git commit -m "Initial commit - Cathrin R Modern High-Tech Portfolio"

# 4. Set branch to main
git branch -M main

# 5. Link your GitHub repository (replace URL with your friend's GitHub repo link)
git remote add origin https://github.com/USERNAME/REPOSITORY_NAME.git

# 6. Push code to GitHub
git push -u origin main
```

---

## How to Host it Free on GitHub Pages / Vercel / Netlify

- **Vercel (Easiest 1-Click Deployment)**:
  1. Go to [Vercel.com](https://vercel.com) and sign up with GitHub.
  2. Click **"Add New Project"** -> Select your `cathrin-portfolio` repository.
  3. Click **"Deploy"**! Vercel will give you a live shareable URL (e.g. `https://cathrin-portfolio.vercel.app`).
