# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a Next.js 16 application using the App Router architecture, TypeScript, and Tailwind CSS 4. The project is bootstrapped with `create-next-app` and follows Next.js conventions.

## Development Commands

```bash
npm run dev    # Start development server at http://localhost:3000
npm run build  # Build for production
npm run start  # Start production server
npm run lint   # Run ESLint
```

## Architecture

### Next.js App Router Structure
- **App Directory**: `src/app/` - Uses the Next.js App Router (not Pages Router)
- **Routing**: File-based routing - each folder in `src/app/` represents a route segment
- **Root Layout**: `src/app/layout.tsx` - Root layout wraps all pages, includes font configuration (Geist Sans and Geist Mono)
- **Home Page**: `src/app/page.tsx` - Server component by default
- **Global Styles**: `src/app/globals.css` - Tailwind directives and global CSS

### TypeScript Configuration
- Import alias `@/*` maps to `src/*` for cleaner imports (configured in tsconfig.json)
- Strict mode enabled
- React JSX transform configured

### Styling
- **Tailwind CSS 4**: Uses the latest version with PostCSS integration
- **Dark Mode**: Uses class-based dark mode (check `dark:` prefixes in className)
- **Fonts**: Geist Sans and Geist Mono loaded via `next/font/google` with CSS variables

### Key Conventions
- **Server Components by default**: All components in `src/app/` are Server Components unless marked with `'use client'`
- **Metadata**: Export `metadata` object from pages for SEO (see `src/app/layout.tsx:15`)
- **Static Assets**: Place in `public/` directory, reference with `/filename.svg`

## Build Notes
- Development server runs on port 3000 by default
- The `.next/` directory contains build artifacts (git-ignored)
- ESLint config uses Next.js specific rules for both core web vitals and TypeScript

## Icon Usage
- Use always tailwind icons for icons, they are all optimized and optimized for the web.