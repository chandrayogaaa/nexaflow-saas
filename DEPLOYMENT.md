# Deployment Instructions for 100t.xiaomimimo.com

## Project Information

**Repository:** https://github.com/chandrayogaaa/nexaflow-saas
**Tech Stack:** Next.js 14, TypeScript, Tailwind CSS
**Build Command:** `npm run build`
**Start Command:** `npm start`
**Port:** 3000 (default)

## Quick Deploy Steps

### 1. Clone Repository
```bash
git clone https://github.com/chandrayogaaa/nexaflow-saas.git
cd nexaflow-saas
```

### 2. Install Dependencies
```bash
npm install
```

### 3. Build Production
```bash
npm run build
```

### 4. Start Production Server
```bash
npm start
```

The app will run on `http://localhost:3000`

## Alternative: PM2 Deployment

For production with auto-restart:

```bash
# Install PM2 globally
npm install -g pm2

# Start with PM2
pm2 start npm --name "nexaflow-saas" -- start

# Save PM2 config
pm2 save

# Setup auto-start on reboot
pm2 startup
```

## Environment Variables

No environment variables required for basic deployment.

## Server Requirements

- Node.js 18+
- npm 9+
- 512MB RAM minimum
- 1GB disk space

## Nginx Reverse Proxy (Optional)

```nginx
server {
    listen 80;
    server_name 100t.xiaomimimo.com;

    location / {
        proxy_pass http://localhost:3000;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_cache_bypass $http_upgrade;
    }
}
```

## Verification

After deployment, verify:
- ✅ Homepage loads at root URL
- ✅ Navigation links work
- ✅ Responsive design on mobile
- ✅ All sections render correctly

## Support

For issues, check:
- Build logs: `npm run build`
- Runtime logs: `pm2 logs nexaflow-saas` (if using PM2)
- GitHub Issues: https://github.com/chandrayogaaa/nexaflow-saas/issues

---

**Deployed:** 2026-05-26
**Author:** Hary Sap (chandrayogaaa)
