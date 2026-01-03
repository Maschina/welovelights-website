# We Love Lights Website

Official marketing website for **We Love Lights** - a native macOS app for controlling Philips Hue and Phoscon deCONZ lights and devices.

## Overview

This is a modern, animated landing page built with Next.js, showcasing the features and capabilities of the We Love Lights macOS application. The website includes product information, support resources, and app store integration.

## Tech Stack

- **Framework**: [Next.js 16](https://nextjs.org) (App Router)
- **React**
- **TypeScript**: 5.x
- **Styling**: [Tailwind CSS 4](https://tailwindcss.com)
- **Animations**: [Motion](https://motion.dev) (formerly Framer Motion)
- **UI Components**: Custom components with [Radix UI](https://www.radix-ui.com) primitives
- **Icons**: Lucide React, Phosphor Icons, Hugeicons, Tabler Icons

## Project Structure

```
welovelights-website/
├── app/
│   ├── (support)/          # Support pages route group
│   │   ├── changelog/      # App changelog
│   │   ├── faq/            # Frequently asked questions
│   │   └── privacy/        # Privacy policy
│   ├── globals.css         # Global styles and theme
│   ├── layout.tsx          # Root layout
│   └── page.tsx            # Homepage
├── components/
│   ├── ui/                 # Reusable UI components (shadcn-based)
│   ├── motion-primitives/  # Custom animation components
│   ├── features.tsx        # Feature showcase section
│   ├── footer.tsx          # Site footer
│   ├── hero.tsx            # Hero section
│   └── support-button.tsx  # Floating support button
├── assets/                 # Images and SVG assets
├── public/                 # Static files
└── lib/
    └── utils.ts            # Utility functions

```

## Key Features

### Pages
- **Homepage**: Hero section with animated background and feature highlights
- **Changelog**: Version history with JSON data endpoint
- **FAQ**: Frequently asked questions
- **Privacy Policy**: GDPR-compliant privacy information with "In Short" summary

### Components
- Animated hero section with scroll effects
- Feature cards showcasing app capabilities
- Floating support button with morphing popover
- Custom UI components with Radix UI primitives
- Motion primitives for smooth animations

### Design Features
- Modern, dark-themed UI
- Smooth scroll animations
- Responsive design

## Getting Started

### Prerequisites
- Node.js 20 or later
- npm, yarn, pnpm, or bun

### Installation

```bash
# Install dependencies
npm install
```

### Development

```bash
# Run the development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the website.

The page auto-updates as you edit files. Main entry point is `app/page.tsx`.

### Build

```bash
# Create production build
npm run build

# Start production server
npm start
```

### Linting

```bash
# Run ESLint
npm run lint
```

## Configuration

- **Tailwind Config**: `tailwind.config.cjs` - Custom theme colors and animations
- **Next Config**: `next.config.ts` - SVG handling and build configuration
- **TypeScript**: `tsconfig.json` - TypeScript compiler options

## Support

For questions or support regarding the We Love Lights app:
- Email: hello@welovelights.app

## License

© 2019-2026 Robert Hahn. All rights reserved.
