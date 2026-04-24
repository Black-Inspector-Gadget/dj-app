# Portfolio Web App Case Study

Welcome to the behind-the-scenes look at the creation of my personal portfolio web application.

## Overview
This project was built from the ground up to showcase my "dual-threat" engineering background. Rather than relying on out-of-the-box templates or heavy UI libraries, I engineered a bespoke Single Page Application (SPA) that emphasizes performance, modern design aesthetics, and maintainability.

## Architecture & Technology Stack
- **Framework**: React with Vite for lightning-fast Hot Module Replacement (HMR) and optimized production builds.
- **Styling**: Vanilla CSS utilizing custom CSS variables (tokens). This approach allowed for complete control over the design system, enabling complex micro-animations and glassmorphism without the bloat of external dependencies like Tailwind or Bootstrap.
- **Typography**: Integrated Google Fonts ('Inter' for body readability, 'Outfit' for striking headings).
- **Icons**: `lucide-react` for clean, scalable, and consistent SVG iconography.

## Design Decisions
- **Dark Mode First**: Implemented a deep, rich dark background (`#0a0a0a`) paired with a vibrant mustard/gold accent (`#edc23c`) to create a premium "Big Tech" feel that makes the content pop.
- **Glassmorphism**: Leveraged semi-transparent, blurred backgrounds (`backdrop-filter: blur(12px)`) for cards and the sticky navigation bar to create a sense of depth and modernity.
- **Dynamic Animations**: Built smooth reveal animations on scroll and interactive hover states for buttons and skill cards to ensure the interface feels responsive and alive.

## Implementation Workflow
1. **Foundation**: Established the core design system in `index.css`, defining all color palettes, typography, and utility classes (like `.glass` and `.btn`).
2. **Component Architecture**: Broke the UI down into modular React components (`Navbar`, `Hero`, `About`, `Skills`, `Projects`, `Contact`) for clean separation of concerns.
3. **Responsive Design**: Ensured all elements gracefully degrade on smaller screens, utilizing CSS Grid and Flexbox for fluid layouts.
4. **Performance**: Achieved minimal bundle sizes by relying on native CSS and Vite's highly optimized Rollup build process.

## Conclusion
This portfolio serves as a live demonstration of my ability to navigate ambiguity, design scalable systems, and execute complex technical solutions from start to finish.
