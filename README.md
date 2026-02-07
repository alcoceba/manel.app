# manel.app

A minimalistic, high-performance personal portfolio and landing page built with **Vite**, **React**, **TypeScript**, and **SCSS**. Features a centralized color management system with CSS custom properties for easy theming.

## Live Demo

View the live site at https://manel.is-a.dev (custom domain via GitHub Pages).

## Tech Stack

- **Vite**: Lightning-fast build tool with instant HMR and optimized production builds
- **React 19**: Component-based UI with functional components and hooks
- **TypeScript**: Full type safety for better code quality and IDE support
- **SCSS**: Advanced CSS with variables, mixins, and nesting for maintainable styles
- **CSS Custom Properties**: Runtime-configurable theme variables mapped from SCSS
- **React Router**: Client-side routing for multi-page SPA experience
- **ESLint**: JavaScript/TypeScript linting
- **Prettier**: Code formatting
- **Stylelint**: SCSS/CSS linting and formatting

## Getting Started

### Prerequisites

- Node.js 16+ and npm

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/alcoceba/manel.app.git
   cd manel.app
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```
   Open [http://localhost:5173](http://localhost:5173) in your browser.

## Available Commands

```bash
# Development server with hot-module reloading
npm run dev

# Build for production
npm run build

# Preview production build locally
npm run preview

# Lint and format all code (JavaScript/TypeScript and SCSS)
npm run lint

# Lint and format SCSS files only
npm run lint:styles

# Deploy to GitHub Pages
npm run deploy
```

## Project Features

### Pages

- **Home** - Main portfolio with social links, tech skills, and project highlights
- **Career** - Professional timeline, key achievements, and education
- **Next.js Explorer** - Browser extension project showcase with links to web stores

### Components

Components are located in `src/components/` and include reusable UI elements like Badge, Card, Headline, Icon, Link, Breadcrumbs, and Tooltip. Each component has its own folder with TypeScript (.tsx) and SCSS (.scss) files.

### Styling System

**SCSS Variables** (`src/styles/variables.scss`):
- Theme colors (primary, secondary, grays)
- Brand colors for tech stack (React, TypeScript, Node.js, etc.)
- Spacing, typography, and layout constants
- Opacity variants for transparency effects

**CSS Custom Properties** (`src/index.scss`):
- All SCSS variables exported as CSS variables in `:root`
- Enables runtime theme customization
- Component colors use `var(--color-name)` pattern
- Centralized color management for easy maintenance

## Code Quality

- **TypeScript**: Strict mode enabled for type safety
- **ESLint**: Enforces consistent code patterns
- **Prettier**: Automatic code formatting
- **Stylelint**: CSS/SCSS linting with custom rules
- **PascalCase BEM**: Component classes follow `ComponentName`, `ComponentName__element`, `ComponentName--modifier`

## Deployment

The site is automatically deployed to GitHub Pages on each push to `main`. Uses a custom domain (CNAME file) pointing to `manel.is-a.dev`.

```bash
# Manual deployment
npm run deploy
```
