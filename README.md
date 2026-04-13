# My Portfolio Project

## Features
- **Responsive Design:** Optimized for both mobile and desktop users.
- **Interactive Elements:** Includes animations and interactive UI components.
- **GitHub Pages:** Automatically deployed via GitHub Actions.
- **Customization:** Simple to modify for personal branding.

## File Structure
```
project/
│
├── index.html      # Main HTML file
├── style.css       # Main site styles
├── styles.css      # Extra styles (cards + CSS variables)
├── script.js       # JavaScript functionality
├── webdev.html     # Web development page
├── css.html        # CSS deep dive page
├── contacts.html   # Contact page
└── *.png           # Images used on the site

portfolio-app/      # Modern React + TypeScript app (source)
└── dist/           # Production build output (generated)
```

## Getting Started Guide
1. Clone the repository:
   ```bash
   git clone https://github.com/silasmukabwa254-ux/silasmukabwa254-portfolio.git
   cd silasmukabwa254-portfolio
   ```
2. Install dependencies for the modern app:
   ```bash
   cd portfolio-app
   npm install
   ```
3. Run locally:
   ```bash
   npm run dev
   ```

## Customization Instructions
- To customize the styles, modify `style.css` (and `styles.css` for the card styles/variables).
- To change the content, edit the `index.html` file directly.
- Feel free to add more images and reference them in your HTML/CSS.

## GitHub Pages Setup
The site deploys automatically on pushes to `main`.

- In GitHub, go to **Settings → Pages** and set **Source** to **GitHub Actions**.

Enjoy your portfolio!