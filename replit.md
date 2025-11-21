# BABATV24 - Streaming Platform

## Overview

BABATV24 is a modern streaming platform offering TV content access with a premium neon/cyberpunk aesthetic. The application provides a viral-focused fan page experience with monetization through one-time entry fees (€0.99 for 30 days) and referral-based gamification. Built with a focus on rapid user acquisition and conversion optimization.

**Core Business Model:**
- Entry tier: €0.99 one-time payment for 30-day access
- Referral system with rewards (3 referrals = free entry, 10 referrals = 50% off PRO)
- Upsell path to PRO subscription (€12.99/month) with premium features
- Social sharing and viral growth mechanics

**Key Features:**
- Progressive Web App (PWA) with offline capabilities
- HLS video streaming with adaptive bitrate
- Replit authentication with magic links and OAuth (Google, Apple, Facebook)
- Stripe payment integration
- Referral tracking with UTM parameters
- Admin panel for content and analytics management

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture

**Framework:** React 18 with TypeScript, built using Vite
- **Routing:** wouter for lightweight client-side routing
- **State Management:** TanStack Query (React Query) for server state
- **UI Framework:** shadcn/ui components built on Radix UI primitives
- **Styling:** Tailwind CSS with custom black-gold-neon theme
- **Animations:** Framer Motion for complex animations, CSS animations for performance-critical elements

**Design System:**
- Black background (#000000) with gold accents and neon rainbow gradients
- Glassmorphism effects using backdrop-blur and semi-transparent overlays
- TV monitor aesthetic with thick borders and glow effects
- Responsive design with mobile-first approach
- Custom fonts: Inter and Outfit for body text, Arial Black for display

**Key UI Components:**
- NeonIntro: Animated logo introduction with staggered letter animations
- TVMonitor: 16:9 video player with HLS support, LIVE badge, and controls
- AdTicker: Horizontal scrolling marquee for advertisements
- ShareBar: Social sharing with custom OG image generation
- SocialProofNotifications: Popup notifications showing recent user activity
- CountdownTimer: Urgency-driven countdown for promotions

### Backend Architecture

**Runtime:** Node.js with Express.js
- **Language:** TypeScript with ES modules
- **Database ORM:** Drizzle ORM for type-safe database operations
- **Database:** PostgreSQL via Neon serverless with WebSocket connections
- **Session Storage:** PostgreSQL-backed sessions using connect-pg-simple

**Authentication Strategy:**
- Replit OIDC (OpenID Connect) integration for primary auth
- Passport.js strategy for OAuth flow
- Session-based authentication with 7-day cookie expiry
- Role-based access control (USER, EDITOR, ADMIN)

**API Structure:**
- RESTful endpoints under `/api/*`
- Authentication middleware protecting routes
- Role-based middleware for admin features
- UTM tracking middleware for marketing attribution

**Key Business Logic:**
- User onboarding: Generates 7-digit numeric ID and unique referral code (base36)
- Referral tracking: First-touch and last-touch UTM attribution
- Entitlement management: Time-based access control with expiration dates
- Payment processing: Stripe Checkout integration with webhook verification
- OG image generation: Dynamic social sharing images using @napi-rs/canvas

### Data Storage Solutions

**Database Schema (PostgreSQL via Drizzle):**

**Core Tables:**
- `users`: User profiles with email, role, numeric ID, referral code, and UTM tracking
- `sessions`: Express session storage for authentication
- `entitlements`: Time-based access grants with expiration tracking
- `transactions`: Payment records with Stripe integration
- `referrals`: Tracks who referred whom for gamification

**Content Tables:**
- `adSlots`: 25 rotating advertisement slots for ticker
- `testimonials`: User reviews displayed in carousel
- `clips`: Video content for playlists
- `globalCounter`: Total registered users counter

**Relationships:**
- Users have one optional entitlement (one-to-one)
- Users can have many referrals they created (one-to-many)
- Transactions link to users via userId (many-to-one)

### Authentication and Authorization

**Replit Auth Integration:**
- OIDC discovery endpoint configuration
- Token refresh mechanism for long-lived sessions
- Claims-based user identification
- Automatic user upsert on first login

**Access Control Levels:**
- **PUBLIC:** Landing page, referral links
- **AUTHENTICATED:** User dashboard, profile, referral stats
- **EDITOR:** Content management (ads, testimonials, clips)
- **ADMIN:** Full dashboard with analytics and transaction history

**Protected Features:**
- Stream watching requires active entitlement (checked via middleware)
- Admin panel accessible only to EDITOR and ADMIN roles
- Checkout flow requires authentication

### External Dependencies

**Payment Processing:**
- **Stripe:** Payment gateway for card payments
  - Checkout Session API for payment flow
  - Webhooks for payment confirmation (endpoint: `/api/payments/webhook`)
  - Raw body parsing required for webhook signature verification
  - Success/cancel URLs for redirect handling

**Video Streaming:**
- **HLS.js:** HTTP Live Streaming client-side playback
  - Adaptive bitrate streaming
  - Low latency mode enabled
  - Fallback to native video for Safari
  - Stream URLs served from `/api/stream/url` endpoint

**Infrastructure:**
- **Neon Database:** Serverless PostgreSQL with WebSocket support
  - Connection pooling via @neondatabase/serverless
  - Drizzle ORM integration
  - Environment variable: `DATABASE_URL`

**Authentication:**
- **Replit OIDC:** OAuth 2.0 / OpenID Connect provider
  - Environment variables: `REPL_ID`, `ISSUER_URL`, `SESSION_SECRET`
  - Callback URL: `/api/auth/callback`

**Image Processing:**
- **@napi-rs/canvas:** Server-side canvas for OG image generation
  - Dynamic social sharing images with user referral codes
  - Cached in `/tmp/og-cache` directory
  - Served via `/api/og/image/:refCode` endpoint

**PWA Features:**
- Service Worker registration for offline functionality
- Web App Manifest for installability
- Cache-first strategy for static assets

**Analytics & Tracking:**
- UTM parameter capture and storage
- First-touch and last-touch attribution models
- Referral conversion tracking
- Transaction analytics dashboard

**Third-Party APIs (Ready for Integration):**
- PayPal (one-time payments) - infrastructure ready
- Crypto payments (Coinbase Commerce) - infrastructure ready
- Social pixels (Meta, Google Analytics, TikTok) - environment flag controlled