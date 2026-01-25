# manel.app - AI Agent Guide

## Repository Overview

**manel.app** is a modern, minimalistic personal landing page/website built with Vite, React, and TypeScript. The project is statically deployed to GitHub Pages at https://manel.is-a.dev (previously https://malcoceba.cat).

### Project Type
Static site generator with React components and Sass styling.

### Repository URL
https://github.com/alcoceba/manel.app

## Tech Stack

### Core Technologies
- **Vite** - Fast build tool and development server
- **React** - UI component library
- **React Router DOM** - Client-side routing
- **TypeScript** - Type-safe JavaScript
- **Sass** - CSS preprocessing

### Development Tools
- **ESLint** - Code linting with TypeScript support
- **Prettier** - Code formatting
- **Vite React SWC Plugin** - Fast JSX compilation
- **gh-pages** - GitHub Pages deployment

### Configuration Files
- `vite.config.ts` - Vite configuration with React plugin
- `tsconfig.json` - TypeScript compiler options
- `tsconfig.app.json` - App-specific TypeScript config
- `tsconfig.node.json` - Node scripts TypeScript config
- `eslint.config.js` - ESLint rules and configuration

## Project Structure

```
src/
├── components/             # Reusable React components
├── pages/                  # Page-level components
├── styles/                 # Global style utilities
├── templates/              # Layout templates
├── index.scss              # Global styles
└── main.tsx                # React entry point

public/                     # Static assets
```

## Main Commands

### Development
```bash
npm run dev
```
Starts the Vite development server with hot-module reloading. Server runs on http://localhost:5173 by default.

### Building
```bash
npm run build
```
Runs TypeScript compilation (`tsc -b`) followed by Vite production build. Output is generated in the `dist/` directory.

### Code Quality
```bash
npm run lint
```
Runs Prettier code formatting and ESLint linting on the entire codebase. Fixes formatting issues automatically.

### Preview Production Build
```bash
npm run preview
```
Serves the production build locally for testing before deployment.

### Deployment
```bash
npm run deploy
```
Deploys the built site to GitHub Pages. Automatically runs the build step via the predeploy script. Uses the CNAME file for custom domain configuration.

## Key Build Details

### Base Configuration
- **Base path**: `/` (root deployment)
- **Custom domain**: manel.is-a.dev (configured via CNAME file)

### Build Output
- Production build output: `dist/` directory
- Index file: `index.html`
- Supports automatic code splitting and optimization

### TypeScript Configuration
- **Target**: ES2020 (modern JavaScript)
- **Module System**: ESNext
- **JSX Transform**: React with @vitejs/plugin-react-swc
- **Strict Mode**: Enabled for type safety

## Key Files for Modification

### Pages
- [src/pages/Home/Home.tsx](src/pages/Home/Home.tsx) - Homepage content
- [src/pages/About/About.tsx](src/pages/About/About.tsx) - About page content

### Components
- [src/components/Headline/Headline.tsx](src/components/Headline/Headline.tsx) - Headline component
- [src/components/Icon/Icons.tsx](src/components/Icon/Icons.tsx) - Icon definitions and rendering

### Styles
- [src/styles/variables.scss](src/styles/variables.scss) - Color, spacing, typography variables
- [src/styles/functions.scss](src/styles/functions.scss) - Reusable Sass functions
- [src/styles/reset.scss](src/styles/reset.scss) - CSS reset and base styles

### Entry Point
- [src/main.tsx](src/main.tsx) - React app root
- [index.html](index.html) - HTML template

## Common Development Tasks

### Running the Development Server
```bash
npm run dev
```

### Building for Production
```bash
npm run build
npm run preview
```

### Linting and Formatting Code
```bash
npm run lint
```

### Deploying to GitHub Pages
```bash
npm run deploy
```

## Installation & Setup

```bash
# Clone the repository
git clone https://github.com/alcoceba/manel.app.git
cd manel.app

# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build
```

## Important Notes for AI Agents

- **Single Page Application**: Uses React Router for client-side routing
- **Static Deployment**: Deployed as static files to GitHub Pages
- **TypeScript Enabled**: All code uses TypeScript for type safety
- **Sass Modules**: Component styles use Sass in co-located files
- **Hot Module Replacement**: Development mode supports instant reload with `npm run dev`
- **Automatic Deployment**: GitHub Actions workflow can be configured for CD/CI
- **Code Standards**: ESLint and Prettier enforce consistent code formatting and quality

## Related Configuration Files

- **CNAME**: Contains custom domain name for GitHub Pages deployment
- **.eslintrc.js / eslint.config.js**: ESLint configuration
- **package.json**: Dependencies and npm scripts
- **vite.config.ts**: Build tool configuration
