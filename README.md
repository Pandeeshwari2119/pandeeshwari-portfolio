# 🌌 Pandeeshwari M — Modern Lite-Dark React.js Portfolio

A responsive, high-performance developer portfolio built with **React.js, Tailwind CSS, Lucide Icons, and Interactive Canvas Particle Animations**.

Designed specifically with a **Lite-Dark Obsidian & Luminescent Slate aesthetic**, glassmorphism cards, glowing borders, dynamic theme mood switcher, and an **ultra-easy editing system**.

---

## 🚀 Quick Start Guide

### 1. Requirements
Make sure you have [Node.js](https://nodejs.org/) installed (version 18 or higher recommended).

### 2. Run Locally in 3 Steps
Open your terminal in this project directory (`pandeeshwari-portfolio`):

```bash
# 1. Install all dependencies
npm install

# 2. Start the local development server
npm run dev

# 3. Open the link shown in your terminal (usually http://localhost:3000 or http://localhost:5173)
```

---

## ✏️ How to Edit Your Information in Seconds

You **do not need to touch complex React code** to update your information! 

Everything is driven by **one single file**:
📂 **`src/data/portfolioData.js`**

Open `src/data/portfolioData.js` in your code editor (like VS Code) and you can easily edit:

| Section | What You Can Edit in `portfolioData.js` |
| :--- | :--- |
| **Personal Info** | Name, role titles, email, LinkedIn URL, GitHub URL, bio, stats (CGPA, etc.) |
| **Work Experience** | Internship titles, company names, dates, descriptions, key bullet points, tech stack tags |
| **Projects** | Project titles, categories, descriptions, feature bullets, GitHub links, live demo links |
| **Patents & Research**| Patent titles, publication years, Indian Patent Journal details, abstracts, key innovations |
| **Technical Skills** | Programming languages, Web dev tools, Data/AI skills, and proficiency percentages |
| **Education** | College name, degree, CGPA, school percentages, highlights |
| **Certifications** | Microsoft Power BI, NPTEL, Board Infinity, Typewriting credentials |
| **Theme Moods** | Color presets (Cyan, Violet, Emerald, Amber) |

---

## 🎨 Unique Features & Animations

1. **Lite-Dark Theme & Glassmorphism**:
   - Translucent frosted glass panels (`backdrop-blur-md`) with subtle micro-borders.
   - Dynamic **Accent Mood Switcher** (Cyan Glow, Electric Purple, Emerald Matrix, Warm Amber).
2. **Interactive Background Animation**:
   - High-performance, lightweight HTML5 Canvas particle constellation with mouse repulsion and connecting nodes.
3. **Resume Showcase Sections**:
   - **Hero**: Typing animation, quick metric cards, social connections.
   - **About & Foundation**: Career vision and academic journey.
   - **Patents & Research**: Dedicated cards highlighting your 2 Indian Patent Journal publications and data broker journal paper.
   - **Internships**: Interactive tab-based timeline for Qbatzclay, Viruzverse Solutions, and Future Interns.
   - **Projects**: Category filter pills (Web, AI/ML, Data Science) with deep-dive modal popups.
   - **Skills Matrix**: Interactive proficiency progress bars and soft skill cards.
   - **Education & Certifications**: Verified credentials display.
   - **Contact**: Direct interactive contact form + 1-click email copy to clipboard.

---

## 📂 Project Structure

```text
pandeeshwari-portfolio/
├── package.json                   # Dependencies and scripts
├── vite.config.js                 # Vite bundler configuration
├── tailwind.config.js             # Theme tokens, custom glow colors & keyframes
├── postcss.config.js              # PostCSS plugins
├── index.html                     # HTML entry point with fonts & metadata
├── README.md                      # This documentation
├── standalone-preview/
│   └── index.html                 # Double-clickable instant browser preview file
└── src/
    ├── main.jsx                   # React application entry point
    ├── App.jsx                    # Core layout, navigation, and modal state
    ├── index.css                  # Custom glows, glassmorphism, scrollbars, animations
    ├── data/
    │   └── portfolioData.js       # 🌟 Centralized data file (EDIT EVERYTHING HERE)
    └── components/
        ├── BackgroundAnimation.jsx# Interactive particle & constellation canvas
        ├── Navbar.jsx             # Glassmorphism header with active scrollspy & mobile menu
        ├── Hero.jsx               # Dynamic typing title, quick stats, CTAs, social links
        ├── About.jsx              # Summary, quick facts, education timeline & highlights
        ├── Experience.jsx         # Interactive internships timeline with tech tags & achievements
        ├── Projects.jsx           # Project showcase with category filters and modal detail views
        ├── PatentsPublications.jsx# Dedicated cards for Patents & Research Papers with abstract drawers
        ├── Skills.jsx             # Categorized skill pills with progress bars & level badges
        ├── EducationCertifications.jsx # Education credentials & verified badges
        ├── Contact.jsx            # Interactive contact form with 1-click email copy & social links
        ├── Footer.jsx             # Back to top button, copyright, social bar
        └── DetailModal.jsx        # Reusable modal for project/patent deep-dives
```

---

## 🌐 Deploying Your Portfolio (Free)

### Deploy to Vercel
1. Push your repository to GitHub.
2. Go to [vercel.com](https://vercel.com) and click **"New Project"**.
3. Import your GitHub repository.
4. Click **Deploy**. Vercel will automatically build and publish your site with HTTPS!

### Deploy to Netlify
1. Drag and drop the `dist/` folder (generated after running `npm run build`) onto [netlify.com/drop](https://app.netlify.com/drop).
2. Your portfolio is instantly live on the web!

---

## 🌟 Instant Standalone Preview (No Node.js Needed)
If you want to view the portfolio immediately on any computer without installing Node.js or npm, simply open the file located at:
`standalone-preview/index.html`
by double-clicking it in your file explorer!
