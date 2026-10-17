# QR Digital Loyalty System — Portfolio & Product Showcase

> **"Every Visit Has Its Reward."**  
> An elegant, interactive SaaS product portfolio website for the QR Digital Loyalty System, developed by **Zenith Forge Hub (ZFH)**.

---

## 1. Project Overview

The **QR Digital Loyalty System** is a lightweight, mobile-first web application designed to replace paper stamp cards with a friction-free, QR-driven customer loyalty and reward experience. Customers scan an in-store counter QR code using their default mobile phone camera (zero app download required), identify with their phone number, and receive legitimate visit stamps verified by counter staff via a quick 4-digit venue PIN.

### Product Identity & Links
- **Product Name:** QR Digital Loyalty System (*QR Loyalty*)
- **Development Team:** Zenith Forge Hub (ZFH)
- **Product Repository:** [https://github.com/MS-Zainab/QR_Digital_System](https://github.com/MS-Zainab/QR_Digital_System)
- **ZFH Team Repository:** [https://github.com/MS-Zainab/ZFH](https://github.com/MS-Zainab/ZFH)
- **Developer GitHub:** [https://github.com/MS-Zainab](https://github.com/MS-Zainab)
- **Official Contact Email:** [zenithforgehub@gmail.com](mailto:zenithforgehub@gmail.com)

---

## 2. Visual Identity & Art Direction

### Theme: Soft Sage & Champagne
A warm, light-first palette engineered for an editorial, trustworthy, and welcoming boutique aesthetic:
- **Warm Ivory Background:** `#FAF8F3`
- **Soft Cream Panels:** `#F2EEE5`
- **Sage Green Accents:** `#91A894`
- **Deep Forest Green:** `#29483D` (Primary CTAs, high-contrast headers)
- **Muted Champagne Gold:** `#C6A875` (Milestone badges, delicate borders)
- **Soft Peach Accent:** `#E8C8B8`
- **Primary Charcoal Text:** `#29332E`
- **Secondary Charcoal Text:** `#747B73`
- **Soft Card Border:** `#E6E4DC`

### Typography
- **Primary Body & Interface:** `DM Sans` (Google Fonts)
- **Editorial Headlines & Emphasis:** `DM Serif Display` (Google Fonts)

---

## 3. Key Sections & Interactive Features

1. **Sticky Header & Mobile Drawer:**
   - Soft translucent background blur upon scrolling.
   - Quick jump anchors for Overview, Compare, How It Works, Live Demo, Features, Roles, Architecture, Case Study, and FAQ.
   - "Try Demo Card" and "Request a Demo" CTAs.
2. **Hero Section:**
   - Headline: *"Every Visit Has Its Reward."*
   - Layered product UI preview with interactive 10-stamp matrix.
   - Desktop dashboard overview panel tucked behind the card.
   - Floating verification badges and introductory 15-day trial tag.
3. **The Problem & The Promise (Compare):**
   - Side-by-side comparative analysis between traditional paper punchcards and QR digital loyalty.
   - Mobile-friendly segmented selector.
4. **How It Works (4-Step Flow):**
   - Step 1: Scan QR Code (`< 3s`, customer camera)
   - Step 2: Identify Customer (`< 5s`, name & phone lookup)
   - Step 3: Staff Verification (`< 4s`, 4-digit venue PIN)
   - Step 4: Earn & Celebrate (instant stamp & reward unlock)
   - Interactive step inspector and direct launcher for the Counter Sandbox.
5. **Interactive Loyalty Card Simulator:**
   - Multi-merchant presets: ZFH Demo Cafe (10 visits), Olive & Sage Trattoria (8 visits), Botanical Beauty (6 visits).
   - Preset buttons: 2 visits, midway, 1 visit away, reward milestone unlock.
   - Manual "+1 Stamp" and "Redeem Perk" controls.
   - Animated celebration confetti with champagne/sage particles on milestone completion.
6. **Bento Grid Feature Highlights:**
   - 6 varied visual cards: QR-powered entry with animated scan laser, digital stamp progression, staff PIN authorization, reward vouchers, isolated business workspaces, and granular 4-role access.
7. **Four Roles, One Coherent System:**
   - Interactive switcher for Customer, Staff, Business Owner, and ZFH Platform Administrator.
   - Realistic mock UI previews for each role.
   - Explicit "Verified" vs "Roadmap" capability indicators for absolute integrity.
8. **Multi-Tenant Architecture:**
   - Visual container diagram showing platform core, isolated Tenant A & Tenant B workspaces, and PostgreSQL query filtering.
   - Expandable technical explanation detailing tenant IDs, auth tokens, database query scoping, and staff PIN hashing.
9. **Industry Showcase (Target Verticals):**
   - Cafes & Coffee Shops, Restaurants & Bistros, Salons & Beauty, Local Bakeries & Shops.
   - Direct inquiry buttons that pre-select business type and scroll to the contact form.
10. **Technology Stack & Architecture Pipeline:**
    - Verified technologies: React 19, TypeScript, Vite, Tailwind CSS, Node.js/Express, Supabase/PostgreSQL, Vercel/Railway.
    - 4-tier request pipeline from client QR triggers to relational database scopes.
11. **Zenith Forge Hub Case Study:**
    - 4 project stages: Understand, Design, Build, Refine.
    - Direct verified GitHub links to the product and team repositories.
12. **Demo & Trial Final Call to Action:**
    - Forest-green finish with champagne accents and transparent 15-day trial onboarding notice.
13. **Contact & Demo Request Form:**
    - Responsive form with real-time client-side validation.
    - Direct inquiry type switcher (Live Demo, 15-Day Trial, Question, Collaborate).
    - Transparent mailto link generator and on-screen message confirmation with copyable address.
14. **FAQ Accordion:**
    - 8 essential architectural and business questions with keyboard-accessible accordion panels.
15. **Interactive 4-Step Counter Sandbox Modal:**
    - Visitors can simulate camera scan, enter customer details, type a 4-digit staff PIN on a numpad, and earn a stamp with confetti!

---

## 4. Local Development

### Prerequisites
- Node.js 18+ or 20+
- npm or pnpm

### Installation
```bash
# Install dependencies
npm install
```

### Run Local Development Server
```bash
npm run dev
```
Open `http://localhost:5173` in your browser.

### Build for Production
```bash
npm run build
```
The compiled, production-ready static assets will be output to the `dist/` folder.

### Preview Production Build Locally
```bash
npm run preview
```

---

## 5. Vercel Deployment Guide

This portfolio website is configured for zero-configuration, seamless deployment on **Vercel**:

### Step 1: Push Code to GitHub
Ensure the project is committed to your GitHub repository:
```bash
git add .
git commit -m "Deploy: ZFH QR Digital Loyalty System Portfolio Website"
git push origin main
```

### Step 2: Import Project in Vercel
1. Log in to [Vercel](https://vercel.com).
2. Click **Add New...** → **Project**.
3. Select your GitHub repository (`QR_Digital_System` or the dedicated portfolio repository).
4. If the portfolio code is in the repository root, keep the **Root Directory** as `./`. If placed in a subdirectory (e.g. `portfolio` or `web`), select that directory as the root.

### Step 3: Configure Build & Output Settings
Vercel will automatically detect the **Vite** preset:
- **Framework Preset:** `Vite`
- **Build Command:** `npm run build`
- **Output Directory:** `dist`
- **Install Command:** `npm install`

### Step 4: Environment Variables (Optional)
This marketing portfolio uses client-side demonstrations and does not require private backend secrets. If you configure a custom form processing webhook, you can add environment variables with the `VITE_` prefix:
- `VITE_CONTACT_ENDPOINT` (optional)

### Step 5: Deploy
Click **Deploy**. Vercel will build the project in ~30 seconds and generate your live production URL (e.g., `qr-loyalty-zfh.vercel.app`).

### Step 6: Custom Domain (Optional)
In your Vercel Project Dashboard, go to **Settings** → **Domains** and add your domain (e.g., `loyalty.zenithforgehub.com`). Configure the CNAME / A records as prompted.

---

## 6. Testing & Quality Checklist

- [x] **Production Build:** Passes cleanly with `npm run build` with zero errors.
- [x] **Typography & Styling:** Soft Sage & Champagne palette loaded via Tailwind CSS v4 and Google Fonts.
- [x] **Desktop & Mobile Responsiveness:** Mobile drawer menu, responsive bento grids, and touch-friendly buttons tested.
- [x] **Interactive Loyalty Card:** State switches, manual stamp additions, and milestone confetti working seamlessly.
- [x] **Counter Sandbox Modal:** 4-step scan-to-stamp flow with interactive PIN pad functional.
- [x] **Role Switcher:** Customer, Staff, Owner, and Admin views with verified vs planned flags.
- [x] **Contact Form:** Client-side validation, inquiry pre-selection, and mailto fallback.
- [x] **Reduced Motion Support:** Respects `prefers-reduced-motion: reduce`.
- [x] **Security & Integrity:** Zero private keys, API secrets, or customer PII exposed. All commercial claims transparently scoped.

---

## 7. Attribution & Credits

- **Product:** QR Digital Loyalty System
- **Created by:** Zenith Forge Hub (ZFH)
- **Repository:** [MS-Zainab/QR_Digital_System](https://github.com/MS-Zainab/QR_Digital_System)
- **Inquiries:** [zenithforgehub@gmail.com](mailto:zenithforgehub@gmail.com)
