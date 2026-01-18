# Eminent Mines Resources Limited (EMRL) - Corporate Website

## Overview

This is a corporate website for Eminent Mines Resources Limited (EMRL), a Nigerian mining and natural resources company. The site showcases their services including mining exploration, mineral trading, water engineering, mining consultancy, equipment rentals, a school of mines, and laboratory services. The website is designed to project professionalism, trust, and corporate strength suitable for government and investor audiences.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript
- **Routing**: Wouter (lightweight client-side routing)
- **Styling**: Tailwind CSS v4 with CSS variables for theming
- **UI Components**: shadcn/ui (Radix UI primitives with custom styling)
- **State Management**: TanStack React Query for server state
- **Forms**: React Hook Form with Zod validation
- **Build Tool**: Vite

### Backend Architecture
- **Runtime**: Node.js with Express
- **Language**: TypeScript (ESM modules)
- **API Pattern**: RESTful endpoints prefixed with `/api`
- **Server**: Single HTTP server serving both API and static files

### Data Storage
- **ORM**: Drizzle ORM with PostgreSQL dialect
- **Schema Location**: `shared/schema.ts` (shared between client and server)
- **Current Storage**: In-memory storage class (`MemStorage`) with interface for future database implementation
- **Database Config**: Drizzle Kit configured for PostgreSQL migrations

### Project Structure
```
├── client/           # React frontend
│   ├── src/
│   │   ├── components/   # UI components (layout, forms, ui primitives)
│   │   ├── pages/        # Route pages
│   │   ├── hooks/        # Custom React hooks
│   │   └── lib/          # Utilities and query client
├── server/           # Express backend
│   ├── index.ts      # Server entry point
│   ├── routes.ts     # API route definitions
│   ├── storage.ts    # Data storage interface
│   └── vite.ts       # Vite dev server integration
├── shared/           # Shared code between client/server
│   └── schema.ts     # Database schema and types
└── migrations/       # Drizzle database migrations
```

### Key Design Patterns
- **Path Aliases**: `@/` for client source, `@shared/` for shared code, `@assets/` for attached assets
- **Component Organization**: Layout components separate from UI primitives
- **Form Handling**: Centralized form components with Zod schema validation
- **Theming**: CSS custom properties for brand colors (Deep Gold, Dark Charcoal, Earth Brown)

## External Dependencies

### Core Services
- **Database**: PostgreSQL (via `DATABASE_URL` environment variable)
- **Session Store**: connect-pg-simple for PostgreSQL session storage

### Third-Party Libraries
- **UI Framework**: Radix UI primitives (dialogs, dropdowns, forms, etc.)
- **Icons**: Lucide React
- **Date Handling**: date-fns
- **Carousel**: Embla Carousel
- **Notifications**: Sonner (toast notifications)

### Fonts (External CDN)
- Google Fonts: Inter, Roboto (body), Montserrat, Poppins (headings)

### Developer
- *Devabdultechnologies*: Runtime error overlay, cartographer, dev banner
- **Build**: esbuild for server bundling, Vite for client