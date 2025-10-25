# Portfolio - Software Engineer

A professional portfolio website built with React and Vite, featuring a modern design with icon-based navigation, professional bio, and project showcase.

## Features

- **Floating Icon-Based Navigation** - Elegant navigation bar with icons only (Home and Artifacts)
- **Main Page** - Professional bio and value proposition showcasing key strengths
- **Artifacts Page** - Project showcase with technology tags and descriptions
- **Responsive Design** - Works seamlessly on desktop and mobile devices
- **Modern Styling** - Glass-morphism effects, smooth animations, and dark/light mode support

## Getting Started

### Prerequisites
- Node.js (v18 or higher)
- npm or yarn

### Installation

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## Customization

### Update Your Information

1. **Personal Information** (`src/pages/Home.jsx`):
   - Replace `"Your Name"` with your actual name
   - Update the bio description
   - Modify the value proposition cards as needed

2. **Projects/Artifacts** (`src/pages/Artifacts.jsx`):
   - Update the `artifacts` array with your actual projects
   - Add real project URLs to replace the `#` placeholders
   - Modify technologies, descriptions, and titles

3. **Page Title** (`index.html`):
   - Update the `<title>` tag to include your name

## Tech Stack

- React 19
- React Router DOM
- React Icons
- Vite
- CSS3 with modern features

---

## React + Vite Template Information

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) (or [oxc](https://oxc.rs) when used in [rolldown-vite](https://vite.dev/guide/rolldown)) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

