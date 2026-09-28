# AI/ML Engineer Personal Portfolio Website

A modern, highly accessible, responsive, and performant single-page personal portfolio website designed specifically for **AI/ML Engineers with 5+ years of professional experience**. 

Built with **React, TypeScript, Vite, and Lucide Icons**, optimized for deployment on **GitHub Pages**.

---

## 🚀 Key Features

* **AI/ML Centric Design**: Specialized sections for LLMs, Generative AI, MLOps, Deep Learning, and Computer Vision.
* **Centralized Configuration**: All personal content, experiences, skills, and projects are configured in a single file (`src/data/portfolioData.ts`).
* **Theme System**: Dark & Light mode support with automatic OS detection (`prefers-color-scheme`), `localStorage` persistence, and flash prevention.
* **WCAG 2.2 AA Accessibility**: High-contrast color palette, visible focus indicators, screen reader landmarks, keyboard navigation support, and reduced-motion modes (`prefers-reduced-motion`).
* **Project Case Study UX**: Expandable, accessible modal dialogs (`role="dialog"`, `aria-modal="true"`, focus trapping) showcasing system architecture, technical challenges, and measurable results.
* **Formspree Contact Form**: Native form integration with Formspree, explicit form labels, client validation, status messaging, and zero heavy dependencies.
* **Resume/CV Download**: Direct PDF link fallback support.
* **SEO & JSON-LD**: OpenGraph tags, Twitter cards, canonical tags, `robots.txt`, `sitemap.xml`, and `Person` JSON-LD structured data schema.
* **GitHub Pages CI/CD**: Automated build and deployment workflow via GitHub Actions (`.github/workflows/deploy.yml`).

---

## 🛠️ Technology Stack

* **Framework**: React 18, Vite 5
* **Language**: TypeScript 5
* **Icons**: Lucide React (`lucide-react`)
* **Styling**: Modern CSS3 (CSS Custom Properties, Flexbox, Grid, Clamp)
* **Deployment**: GitHub Pages & GitHub Actions

---

## 💻 Local Development

### Prerequisites

Ensure you have **Node.js (v18 or higher)** and `npm` installed.

### 1. Clone & Install

```bash
git clone https://github.com/[YOUR_USERNAME]/[YOUR_REPO_NAME].git
cd [YOUR_REPO_NAME]
npm install
```

### 2. Start Development Server

```bash
npm run dev
```

Open your browser at `http://localhost:5173`.

### 3. Production Build & Local Preview

```bash
npm run build
npm run preview
```

---

## ✏️ Personalization & Content Setup

All personal information on the website is centralized in **`src/data/portfolioData.ts`**. You do **not** need to touch layout or component code to personalize your portfolio.

### 1. Basic Information & Social Links

Edit `src/data/portfolioData.ts`:

```typescript
export const portfolioData: PersonalInfo = {
  name: "Jane Doe", // Replace [YOUR NAME]
  title: "Senior AI/ML Engineer",
  subtitles: [
    "Machine Learning Engineer",
    "AI Systems Architect",
    "Generative AI & MLOps Specialist"
  ],
  email: "jane.doe@example.com",
  location: "San Francisco, CA",
  github: "https://github.com/janedoe",
  linkedin: "https://linkedin.com/in/janedoe",
  website: "https://janedoe.ai",
  formspreeId: "xqyvzkp1", // Replace [FORMSPREE_FORM_ID]
  resumePath: "./assets/docs/resume.pdf",
  profileImagePath: "./assets/images/profile-placeholder.jpg",
  ...
};
```

### 2. Skills & Technologies

Organize your skillsets by editing the `skills` array in `portfolioData.ts`:

* Machine Learning & AI
* Generative AI & LLMs
* Programming & Languages
* Data Engineering & Storage
* MLOps, Cloud & DevOps

### 3. Experience & Achievements

Add or edit your work history under `experiences`. Each entry supports:
* Job title, company name, location, date range
* Core responsibilities
* Quantifiable key achievements (e.g. latency reduction, cost savings)
* Technology tags

### 4. Projects Showcase & Case Studies

Add or update your projects under `projects`. Each project supports:
* Category (`Generative AI`, `Machine Learning`, `Computer Vision`, `MLOps`, `NLP`)
* GitHub & Live Demo links
* Short description, Problem statement, Solution summary, Key measurable results
* Detailed Case Study breakdown (Architecture steps, Challenges, Outcomes)

---

## 📸 Profile Photo Setup

1. Place your professional portrait photo in the `public/assets/images/` directory.
2. Name it `profile.jpg` (or update `profileImagePath` in `src/data/portfolioData.ts`):

```text
public/assets/images/profile.jpg
```

3. Update `portfolioData.ts`:

```typescript
profileImagePath: "./assets/images/profile.jpg",
```

*Note: If no custom image is supplied, the site gracefully falls back to the included `profile-placeholder.jpg`.*

---

## 📄 Resume / CV PDF Setup

1. Export your resume as a PDF file named `resume.pdf`.
2. Place it in the `public/assets/docs/` directory:

```text
public/assets/docs/resume.pdf
```

3. The "Download CV" button and contact section link will automatically link to this PDF file.

*Note: If no custom PDF is added, the included `resume.pdf` placeholder will be served.*

---

## 📬 Formspree Contact Form Setup

1. Sign up for a free account at [Formspree](https://formspree.io).
2. Create a new form and copy your 8-character Form ID (e.g., `xqyvzkp1`).
3. Open `src/data/portfolioData.ts` and replace `[FORMSPREE_FORM_ID]` with your Form ID:

```typescript
formspreeId: "xqyvzkp1",
```

4. Messages submitted through the contact form will now be delivered directly to your email inbox!

---

## 🌐 GitHub Pages Deployment Guide

This project includes an automated GitHub Actions deployment workflow located at `.github/workflows/deploy.yml`.

### Step-by-Step GitHub Setup:

1. **Push your code to GitHub**:
   ```bash
   git add .
   git commit -m "Initialize AI/ML Engineer portfolio"
   git branch -M main
   git remote add origin https://github.com/[YOUR_USERNAME]/[YOUR_REPO_NAME].git
   git push -u origin main
   ```

2. **Configure Repository Settings on GitHub**:
   * Go to your repository on GitHub.
   * Click **Settings** -> **Pages** (under Code and automation).
   * Under **Build and deployment**:
     * **Source**: Select **GitHub Actions**.

3. **Verify Deployment**:
   * Go to the **Actions** tab in your repository.
   * You will see the `Deploy Portfolio to GitHub Pages` workflow running.
   * Once completed, your site will be published at:
     `https://[YOUR_USERNAME].github.io/[YOUR_REPO_NAME]/`

---

## 🌐 Custom Domain Configuration (Optional)

If you own a custom domain (e.g., `janedoe.ai`):

1. Add a file named `CNAME` in the `public/` directory containing your domain name:
   ```text
   janedoe.ai
   ```
2. In your DNS provider (e.g. Cloudflare, Namecheap, GoDaddy), create an `A` record pointing `@` to GitHub Pages IPs:
   * `185.199.108.153`
   * `185.199.109.153`
   * `185.199.110.153`
   * `185.199.111.153`
3. In GitHub Repository **Settings** -> **Pages**, enter your Custom Domain and check **Enforce HTTPS**.

---

## 🧪 Testing & Quality Assurance

To verify code quality and build integrity:

```bash
# Type check and build bundle
npm run build

# Preview build locally
npm run preview
```

---

## 📄 License

MIT License. Free to use and customize for your professional personal portfolio.
