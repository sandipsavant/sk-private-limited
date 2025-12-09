# Savant Kulkatni Digital Marketing Agency

## Overview

This is a full-stack web application for Savant Kulkatni Private Limited, a digital marketing agency. The application serves as a marketing website showcasing services (social media marketing, SEO, web design, PPC campaigns), company information, portfolio, blog, careers, and contact functionality. The design follows a glassmorphism-enhanced modern agency aesthetic with support for multiple languages (English, Hindi, Marathi) and light/dark themes.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript
- **Build Tool**: Vite with hot module replacement
- **Routing**: Wouter (lightweight React router)
- **State Management**: TanStack React Query for server state
- **Styling**: Tailwind CSS with CSS variables for theming
- **Component Library**: shadcn/ui (Radix UI primitives with custom styling)
- **Design System**: Glassmorphism theme with backdrop blur effects, custom color palette using HSL variables

### Backend Architecture
- **Runtime**: Node.js with Express
- **Language**: TypeScript (ESM modules)
- **API Pattern**: REST endpoints prefixed with `/api`
- **Development**: Vite dev server proxied through Express
- **Production**: Static file serving from built assets

### Data Storage
- **ORM**: Drizzle ORM with PostgreSQL dialect
- **Schema Location**: `shared/schema.ts` (shared between client and server)
- **Migrations**: Managed via `drizzle-kit push`
- **Current Storage**: In-memory storage implementation (`MemStorage` class) with interface for database migration
- **Database**: PostgreSQL (requires `DATABASE_URL` environment variable)

### Key Design Patterns
- **Monorepo Structure**: Client code in `client/`, server in `server/`, shared types in `shared/`
- **Path Aliases**: `@/` for client source, `@shared/` for shared code, `@assets/` for attached assets
- **Theme System**: CSS variables with light/dark mode support via ThemeProvider
- **Internationalization**: Custom LanguageProvider with translations for English, Hindi, and Marathi
- **Component Composition**: Layout wrapper pattern with Navigation and Footer components

### Page Structure
- Home, About, Services (4 sub-pages), Pricing, Portfolio, Blog, Careers, Contact
- 404 Not Found fallback
- All pages wrapped in common Layout component

## External Dependencies

### UI Components (Radix UI)
- Full shadcn/ui component library including dialogs, dropdowns, forms, navigation menus, toasts, and more

### Third-Party Services
- **Database**: PostgreSQL via `pg` driver with `connect-pg-simple` for sessions
- **Form Handling**: React Hook Form with Zod validation (`@hookform/resolvers`, `zod`)
- **Date Utilities**: date-fns
- **Carousel**: Embla Carousel React

### Development Tools
- **TypeScript**: Strict mode enabled
- **Replit Plugins**: Runtime error overlay, cartographer, dev banner (development only)
- **Build**: esbuild for server bundling, Vite for client

### Fonts
- Poppins (primary), DM Sans, Inter, Geist Mono, Fira Code, Architects Daughter (loaded via Google Fonts)