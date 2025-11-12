# SimpliDoc AI Portfolio - Setup Guide

## Quick Start

### Prerequisites
- Node.js 18+ installed
- npm, yarn, or bun package manager

### Installation

1. **Install dependencies:**
```bash
npm install
# or
yarn install
# or
bun install
```

2. **Move Assets folder to public directory:**
   - Copy the `Assets` folder to `public/Assets` so Next.js can serve the images
   - Or create a symlink: `ln -s ../Assets public/Assets` (Linux/Mac)
   - On Windows: `mklink /D public\Assets ..\Assets`

3. **Run development server:**
```bash
npm run dev
# or
yarn dev
# or
bun dev
```

4. **Open your browser:**
   - Navigate to `http://localhost:3000`

## Features

- ✅ Modern, clean design
- ✅ Dark/Light mode toggle
- ✅ Smooth animations with Framer Motion
- ✅ Responsive design (mobile, tablet, desktop)
- ✅ Interactive gallery with modal view
- ✅ Smooth scrolling navigation

## Project Structure

```
├── app/
│   ├── layout.tsx          # Root layout with theme provider
│   ├── page.tsx            # Main portfolio page
│   └── globals.css         # Global styles
├── components/
│   ├── navbar.tsx          # Navigation bar
│   ├── hero-section.tsx    # Hero section
│   ├── features-section.tsx # Features showcase
│   ├── tech-stack-section.tsx # Technology stack
│   ├── architecture-section.tsx # System architecture
│   ├── gallery-section.tsx # Screenshots gallery
│   ├── footer.tsx          # Footer component
│   ├── theme-provider.tsx  # Theme context provider
│   └── theme-toggle.tsx    # Dark/Light mode toggle
├── public/
│   └── Assets/             # Project screenshots (move here)
└── package.json
```

## Customization

### Colors
Edit `tailwind.config.ts` to customize color scheme and gradients.

### Content
Update component files in `components/` directory to modify content and sections.

### Images
Place all images in `public/Assets/` folder and reference them with `/Assets/filename.png`.

## Build for Production

```bash
npm run build
npm start
```

## Technologies Used

- **Next.js 14** - React framework
- **TypeScript** - Type safety
- **Tailwind CSS** - Styling
- **Framer Motion** - Animations
- **next-themes** - Dark mode support
- **Lucide React** - Icons

