# manel.app

A modern, minimalistic personal landing page and interactive terminal portfolio built with **Vite**, **React 19**, **TypeScript**, and **SCSS**. Features an interactive draggable/resizable retro-modern terminal window, simulated command session, and a centralized color management system with CSS custom properties.

## Live Demo

View the live site at [https://manel.is-a.dev](https://manel.is-a.dev) (custom domain via GitHub Pages).

## Tech Stack

- **Vite**: Lightning-fast build tool with instant HMR and optimized production builds
- **React 19**: Modern component architecture with hooks and concurrent features
- **TypeScript**: Strict type safety across components, hooks, and test suites
- **SCSS**: Modular stylesheets with variables, functions, and BEM architecture
- **CSS Custom Properties**: Runtime-configurable theme variables mapped from SCSS in `:root`
- **React Router**: Client-side SPA routing
- **Vitest & React Testing Library**: Unit and component testing with jsdom
- **ESLint & Prettier**: Automated linting and formatting
- **Stylelint**: SCSS/CSS linting enforcing standard conventions and class patterns

## Getting Started

### Prerequisites

- Node.js 22+ and npm

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
# Start development server with instant HMR
npm run dev

# Run TypeScript compilation and Vite production build
npm run build

# Run unit tests with Vitest
npm test

# Run tests in watch mode
npm run test:watch

# Preview production build locally
npm run preview

# Lint and format all files (Prettier, ESLint, Stylelint)
npm run lint

# Lint and auto-fix SCSS files
npm run lint:styles

# Build and deploy to GitHub Pages
npm run deploy
```

## Architecture & Features

### Interactive Terminal Window

The core experience is an interactive terminal inspired by classic Unix/macOS terminals:

- **Window Management**:
  - **Draggable**: Drag the terminal anywhere on the screen by its title bar. Clamped to viewport bounds.
  - **Resizable**: Resize the window dynamically using the bottom-right grip handle.
  - **Traffic Lights**: Close, minimize, and maximize/fullscreen controls with dedicated state transitions.
  - **Double-Click Title Bar**: Quickly toggle between maximized and restored viewports.
  - **Keyboard Shortcuts**: Press `Escape` to quickly exit maximized or minimized modes.
  - **Easter Egg**: Dragging the window reveals a hidden surprise in the background HTML.
  - **Relaunch / Restore Notices**: Clean minimalist actions to reopen or restore closed and minimized sessions.

- **Simulated Terminal Session**:
  - Automated typewriter animation for shell commands (`cat coffee.txt`).
  - Terminal spinner frames during initialization and connection.
  - Terminal links (`[ LinkedIn ]`, `[ GitHub ]`, `[ daily.dev ]`) with keyboard accessibility and hover states.
  - Session replay on close and relaunch.

### Key Components

- **`Terminal`** (`src/components/Terminal/`): Main terminal window component composed of:
  - `TerminalBar`: Draggable toolbar and window title
  - `TerminalTrafficLights`: Close, minimize, and maximize buttons
  - `TerminalNotice`: Minimized and closed session notices
  - `TerminalResizeGrip`: Interactive bottom-right resize handle
  - `useTerminalWindow`: Custom hook handling pointer capture, window bounds, dragging, and resizing
- **`ProfileCard`** (`src/components/ProfileCard/`): Bio card featuring tag identifier (`[ whoami ]`) and intro text
- **`TerminalPrompt`** (`src/components/TerminalPrompt/`): Styled command prompt (`manel@dev:~$`)
- **`TerminalLinks`** (`src/components/TerminalLinks/`): Navigation row of interactive terminal links
- **`useTerminalSession`** (`src/hooks/useTerminalSession.ts`): Orchestrates typing animation timers, spinner states, and command sequence flow

### Styling System

- **SCSS Variables** (`src/styles/variables.scss`): Central source of truth for color palette, spacing, typography, and opacity variants.
- **CSS Custom Properties** (`src/index.scss`): Variables mapped into `:root` for runtime styling.
- **BEM Naming**: Consistent PascalCase BEM structure (`.Terminal`, `.Terminal__bar`, `.Terminal--maximized`).

## Code Quality & Testing

- **Full Test Suite**: Tested with Vitest and `@testing-library/react` across custom hooks, window events, animations, and responsive interactions.
- **Zero Lint Errors**: Automated code standard enforcement across TypeScript and SCSS.
- **Strict TypeScript**: Type-safe component props, hooks options, and event signatures.

## Deployment

The site is statically deployed to GitHub Pages with the custom domain `manel.is-a.dev`:

```bash
npm run deploy
```
