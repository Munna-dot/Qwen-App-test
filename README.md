# TechPro Landing Page

A modern, responsive landing page built with React, TypeScript, Vite, and Tailwind CSS. This project showcases a premium audio product with features, testimonials, pricing plans, and a clean UI design.

## Features

- 🎨 Modern, responsive design with Tailwind CSS
- ⚡ Fast development with Vite
- 🔷 Built with TypeScript for type safety
- ⚛️ React 19 with hooks for state management
- 📱 Mobile-friendly navigation
- 🎧 Product showcase with features section
- 💬 Customer testimonials
- 💰 Pricing plans with highlighted options
- 📧 Newsletter signup form

## Tech Stack

- **React** ^19.2.5 - UI library
- **TypeScript** ^6.0.2 - Type safety
- **Vite** ^8.0.8 - Build tool and dev server
- **Tailwind CSS** ^3.4.19 - Utility-first CSS framework
- **PostCSS** ^8.5.9 - CSS processing
- **Autoprefixer** ^10.4.27 - CSS vendor prefixes

## Getting Started

### Prerequisites

- Node.js (v18 or higher recommended)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd techpro-landing-page
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and navigate to `http://localhost:5173`

## Available Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server with hot reload |
| `npm run build` | Build for production (compiles TypeScript and bundles assets) |
| `npm run lint` | Run ESLint to check code quality |
| `npm run preview` | Preview production build locally |

## Project Structure

```
techpro-landing-page/
├── src/
│   ├── App.tsx          # Main application component
│   ├── main.tsx         # Application entry point
│   └── vite-env.d.ts    # Vite type declarations
├── index.html           # HTML template
├── package.json         # Project dependencies and scripts
├── tsconfig.json        # TypeScript configuration
├── tsconfig.node.json   # TypeScript config for Node environment
├── vite.config.ts       # Vite configuration
├── tailwind.config.js   # Tailwind CSS configuration
├── postcss.config.js    # PostCSS configuration
└── README.md            # This file
```

## Customization

### Styling
The project uses Tailwind CSS for styling. You can customize the theme by modifying the `tailwind.config.js` file.

### Content
Edit the `src/App.tsx` file to modify:
- Feature list
- Testimonials
- Pricing plans
- Brand colors and text

## Building for Production

To create a production build:

```bash
npm run build
```

The optimized files will be in the `dist/` directory, ready to be deployed.

## Deployment

This project can be deployed to any static hosting service:

- **Vercel**: Connect your Git repository for automatic deployments
- **Netlify**: Drag and drop the `dist/` folder or connect Git
- **GitHub Pages**: Use GitHub Actions or deploy manually
- **Any static host**: Upload contents of `dist/` folder

## License

MIT

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.
