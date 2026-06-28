# Academic Portfolio — GitHub Pages

A clean, academic portfolio website ready to deploy with GitHub Pages. No build tools, no frameworks — just HTML, CSS, and JavaScript.

---

## 🚀 Deploy in 3 Steps

1. **Create a GitHub repository** named `yourusername.github.io` (replace `yourusername` with your actual GitHub username).

2. **Push this folder** to that repository:
   ```bash
   git init
   git add .
   git commit -m "Initial site"
   git remote add origin https://github.com/yourusername/yourusername.github.io.git
   git push -u origin main
   ```

3. **Enable GitHub Pages** — go to your repository → Settings → Pages → Source: `main` branch, root folder. Your site will be live at `https://yourusername.github.io` within a few minutes.

---

## 📁 File Structure

```
/
├── index.html                  ← Home page
├── README.md
├── assets/
│   ├── css/
│   │   └── style.css           ← All styles (edit colors/fonts here)
│   ├── js/
│   │   └── main.js             ← Nav, scroll reveal, GitHub API fetch
│   ├── images/
│   │   ├── profile-photo.jpg   ← Your profile photo (upload here)
│   │   ├── fieldwork-01.jpg    ← Fieldwork images (upload here)
│   │   ├── fieldwork-02.jpg
│   │   └── fieldwork-03.jpg
│   └── docs/
│       ├── cv.pdf              ← Your CV (upload here)
│       ├── book-intro.pdf      ← Optional: book intro chapter
│       ├── article-2024.pdf    ← Optional: article PDFs
│       ├── chapter-2021.pdf
│       ├── syllabus-dept101-f24.pdf   ← Syllabi (upload here)
│       ├── syllabus-dept250-s25.pdf
│       └── syllabus-dept510-f24.pdf
└── pages/
    ├── teaching.html
    ├── fieldwork.html
    ├── publications.html
    ├── cv.html
    └── repositories.html
```

---

## ✏️ Customization Checklist

### Personal info (update in every HTML file)
- [ ] `Dr. [Your Name]` → your full name
- [ ] `YN` (initials in sidebar) → your initials
- [ ] `[Your Department]`, `[Your University]` → your department and institution
- [ ] `your.email@university.edu` → your email address
- [ ] Social/profile links: GitHub URL, ORCID, Google Scholar

### Home page (`index.html`)
- [ ] Upload `assets/images/profile-photo.jpg`
- [ ] Update `hero-title`, `hero-affiliation`, `hero-bio`
- [ ] Fill in 3 Research Interest cards
- [ ] Update the 3 Recent Highlights cards
- [ ] Update Affiliations section

### Teaching (`pages/teaching.html`)
- [ ] Update your teaching philosophy (subtitle)
- [ ] Add your actual courses (code, title, level, description, semester)
- [ ] Upload syllabus PDFs to `assets/docs/` and update `href` links

### Fieldwork (`pages/fieldwork.html`)
- [ ] Upload fieldwork photos (`assets/images/fieldwork-0X.jpg`)
- [ ] Update project titles, periods, locations, and descriptions
- [ ] Edit keyword tags

### Publications (`pages/publications.html`)
- [ ] Replace all placeholder publication entries with your actual publications
- [ ] Update DOI links and PDF links
- [ ] Upload PDF files to `assets/docs/`

### CV (`pages/cv.html`)
- [ ] Upload your CV PDF to `assets/docs/cv.pdf`
- [ ] Fill in all CV sections with your actual record

### Repositories (`pages/repositories.html`)
- [ ] Set `data-username="yourusername"` to your GitHub username on the `.repo-grid` div  
  (this enables live auto-fetching of your repos from the GitHub API)
- [ ] Or fill in the static card placeholders manually

---

## 🎨 Changing the Design

All design tokens live at the top of `assets/css/style.css`:

```css
:root {
  --navy:       #0F1B2D;   /* sidebar, header backgrounds */
  --navy-mid:   #1E3A5F;   /* hover states */
  --gold:       #C9A84C;   /* accent color throughout */
  --mist:       #F0EDE6;   /* page background */
  --ink:        #1A1A1A;   /* body text */
}
```

Fonts are loaded from Google Fonts:
- **Playfair Display** — headings and names
- **Inter** — navigation and UI
- **EB Garamond** — body prose and abstracts

---

## 📄 License

Free to use and adapt for personal academic websites. No attribution required.
