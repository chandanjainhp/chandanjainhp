# 🚀 Deployment Guide for GitHub Pages

## Step-by-Step Instructions

### 1. Create a GitHub Repository

1. Go to [GitHub](https://github.com) and sign in
2. Click the **+** icon in the top right → **New repository**
3. Name it `chandanjainhp` (or your preferred name)
4. Choose **Public** (required for free GitHub Pages)
5. Do NOT initialize with README (you already have one)
6. Click **Create repository**

### 2. Push Your Code to GitHub

Open PowerShell in your project folder and run:

```powershell
# Check git status
git status

# Add all files
git add .

# Commit your changes
git commit -m "Initial commit - Portfolio website"

# Add your GitHub repository as remote (replace YOUR-USERNAME)
git remote add origin https://github.com/YOUR-USERNAME/chandanjainhp.git

# Push to GitHub
git push -u origin main
```

**Note:** If the default branch is `master` instead of `main`, use:
```powershell
git branch -M main
git push -u origin main
```

### 3. Enable GitHub Pages

1. Go to your repository on GitHub
2. Click **Settings** (top menu)
3. Click **Pages** (left sidebar)
4. Under **Source**:
   - Select branch: **main**
   - Select folder: **/ (root)**
5. Click **Save**

### 4. Access Your Live Site

Your site will be available at:
```
https://YOUR-USERNAME.github.io/chandanjainhp/
```

**Note:** It may take 2-5 minutes for the site to go live initially.

## 📋 Pre-Deployment Checklist

- [ ] All HTML files are in the root directory
- [ ] `index.html` exists (landing page)
- [ ] All asset paths are relative (not `../assets/`)
- [ ] Images and CSS are in the repository
- [ ] No sensitive data (API keys, passwords) in code
- [ ] `.gitignore` file is configured
- [ ] README.md is updated with correct info

## 🔧 Fix Common Issues

### Issue: Assets not loading (404 errors)

Your HTML files reference `../assets/css/bootstrap.min.css` which won't work if files are in root.

**Solution:** Create an `assets` folder structure:
```
chandanjainhp/
  ├── assets/
  │   ├── css/
  │   │   ├── bootstrap.min.css
  │   │   └── footer.css
  │   ├── js/
  │   └── images/
  ├── HOME.html
  ├── WORK.html
  ├── BLOG.html
  ├── Chandan.html
  └── index.html
```

Then update paths in HTML from `../assets/` to `./assets/`

### Issue: Page shows as plain text

Make sure your repository is **Public** and GitHub Pages is enabled in Settings.

### Issue: Changes not showing

After pushing updates:
1. Wait 1-2 minutes
2. Hard refresh your browser (Ctrl + Shift + R)
3. Check GitHub Actions tab for build status

## 🔄 Update Your Live Site

After making changes:

```powershell
git add .
git commit -m "Update: describe your changes"
git push
```

Changes will appear on your live site within 1-2 minutes.

## 🎨 Custom Domain (Optional)

1. Buy a domain from a registrar
2. Add a `CNAME` file to your repository with your domain
3. Configure DNS settings with your registrar
4. Add custom domain in GitHub Pages settings

## 📊 Monitor Your Site

- **GitHub Actions**: Check build/deploy status
- **Settings → Pages**: View deployment status
- **Insights → Traffic**: See visitor statistics

---

Need help? Check [GitHub Pages Documentation](https://docs.github.com/pages)
