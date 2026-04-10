# Fertech — Professional Computer Repair

Website for Fertech, Chicago's trusted computer repair technician with 20+ years of experience.

## 🚀 Deploying to GitHub Pages

### Option A — Automatic (GitHub Actions)
1. Push this repo to `https://github.com/Chicago-Pilsen/fertech`
2. Go to **Settings → Pages** → set Source to **"GitHub Actions"**
3. Every push to `main` will auto-deploy!

### Option B — Manual deploy
```bash
npm install
npm run deploy
```

## 🛠 Local Development
```bash
npm install
npm start
```

## ✏️ Customizing Your Info
Before deploying, update these in `src/App.js`:
- **Phone number** — search for `(312) 555-0100` and replace with your real number
- **Email** — search for `info@fertech.com` and replace with your real email
- **Hours** — find `Mon–Sat: 9AM – 7PM` and update
- **Testimonials** — add real reviews from your customers in the `TESTIMONIALS` array

## 📁 Project Structure
```
fertech/
├── src/
│   ├── App.js        ← All components & content
│   └── App.css       ← All styles
├── public/
│   └── index.html
└── .github/workflows/deploy.yml  ← Auto-deploy
```
