# React Challenges Monorepo

A comprehensive collection of React challenges organized by topic.

## Structure

```
react-gg-monorepo/
├── challenges/              # All challenge apps (91 total)
├── scripts/
│   └── dev-menu.js         # Interactive dev menu
├── pnpm-workspace.yaml     # pnpm workspace config
├── tsconfig.json           # Shared TypeScript config
└── package.json            # Root package.json
```

## Getting Started

### 1. Install pnpm (if not already installed)
```bash
npm install -g pnpm
```

### 2. Install all dependencies
```bash
cd react-gg-monorepo
pnpm install
```

This will install dependencies for all 91 apps efficiently!

## Running Apps

### Interactive Menu (Recommended)
```bash
pnpm dev
```

### Run Specific App
```bash
cd challenges/02-describing-ui/01-jsx/01-badge-variables
pnpm dev
```

### Run All Apps (parallel)
```bash
pnpm dev:all
```

### Build All Apps
```bash
pnpm build:all
```

## Sections

- **02-describing-ui**: JSX & Props (11 challenges)
- **03-bringing-react-to-life**: Events & useState (9 challenges)
- **04-escaping-react**: Effects, Refs & Context (14 challenges)
- **05-optimizing-react**: useReducer & Performance (10 challenges)
- **07-rebuilding-usehooks**: Custom Hooks (41 implementations)
- **08-concurrent-rendering**: Concurrent Features (6 challenges)

**Total: 91 challenge apps**

## Commands Cheat Sheet

```bash
pnpm install              # Install dependencies for all workspaces
pnpm dev                  # Interactive menu
pnpm -r build            # Build all apps
pnpm -r --parallel dev   # Run all apps in parallel
pnpm -F <package-name> dev  # Run specific package
```

## Why pnpm?

- 🚀 Faster installs (3x faster than npm)
- 💾 Saves disk space (shared dependencies)
- 🔒 Strict dependency resolution
- 📦 Perfect for monorepos
# react-gg-monorepo
