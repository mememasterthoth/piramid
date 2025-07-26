# PiRaMID Landing Page

## Overview

This is a single-page, responsive product landing website for "PiRaMID", a futuristic networking device. The site is built using modern HTML5, CSS3, and vanilla JavaScript with a focus on a sleek, high-tech aesthetic. The landing page follows a standard marketing website structure with hero section, features, gallery, specifications, and vision sections.

**Current Status**: Production-ready with Node.js backend, PostgreSQL database integration, and deployment configuration complete. Server properly configured for deployment on port 5000 with health check endpoint and proper Express setup.

## User Preferences

Preferred communication style: Simple, everyday language.
Design Company: Thoth Tech Titans

## System Architecture

This project has evolved from a static frontend website to a full-stack application with database integration:

### Frontend
- **HTML/CSS/JavaScript**: Single-page responsive website
- **Styling**: Custom CSS with CSS variables for theming
- **Fonts**: Google Fonts (Montserrat)
- **Icons**: Font Awesome 6.0.0
- **Responsiveness**: CSS Grid and Flexbox with media queries
- **Animations**: CSS transitions and transforms
- **Forms**: Interactive contact and newsletter signup forms

### Backend
- **Server**: Node.js with Express.js
- **Database**: PostgreSQL with Drizzle ORM
- **API Endpoints**: RESTful APIs for form submissions
- **Middleware**: CORS, body-parser for request handling

### Database Schema
- **Users**: Email, name, company, newsletter preferences
- **Contact Inquiries**: Subject, message, inquiry type, status tracking
- **Product Interest**: Interest level, features, purchase timeframe, budget

## Key Components

### 1. HTML Structure
- Single `index.html` file containing all page content
- Semantic HTML5 elements for better accessibility
- Meta tags for responsive design and SEO

### 2. CSS Architecture
- CSS custom properties (variables) for consistent theming
- Mobile-first responsive design approach
- CSS Grid and Flexbox for layout
- Smooth scrolling and transitions for user experience
- Backdrop filters for modern glassmorphism effects

### 3. Navigation System
- Fixed navigation bar with semi-transparent background
- Smooth scrolling to page sections
- Responsive hamburger menu for mobile devices

### 4. Content Sections
- Hero section with background image and call-to-action
- Features grid showcasing device capabilities
- Gallery section for product images
- Technical specifications
- Vision/mission statement section

### 5. Color Scheme
- Dark theme with high contrast
- Primary colors: Dark background (#1a1a1a), light text (#f0f0f0)
- Accent color: Cyan (#00ffff) for highlights and CTAs

## Data Flow

Since this is a static website, there is no complex data flow:

1. **User Request**: Browser requests the HTML file
2. **Asset Loading**: CSS, fonts, and images load from external CDNs and local files
3. **JavaScript Execution**: Basic DOM manipulation for interactive elements
4. **User Interaction**: Click events trigger smooth scrolling navigation

## External Dependencies

### CDN Resources
- **Google Fonts**: Montserrat font family (weights: 300, 400, 600, 700, 900)
- **Font Awesome**: Version 6.0.0 for icons

### Asset Requirements
- Background images for hero section (apartment_image.jpg)
- Product images for gallery section
- Favicon and other branding assets

## Deployment Strategy

This static website can be deployed on any web server or hosting platform:

### Recommended Platforms
- **Static Hosting**: Netlify, Vercel, GitHub Pages
- **CDN**: Cloudflare Pages, AWS S3 + CloudFront
- **Traditional Hosting**: Any web server with HTML/CSS/JS support

### Deployment Requirements
- No server-side processing required
- Only static file serving needed
- HTTPS recommended for modern features (backdrop-filter)
- Image optimization recommended for performance

### Performance Considerations
- Minimal external dependencies (only fonts and icons from CDN)
- CSS and JavaScript are inline for faster loading
- Images should be optimized for web (WebP format recommended)
- Consider implementing lazy loading for gallery images

The website is designed to be lightweight, fast-loading, and fully self-contained with minimal external dependencies, making it easy to deploy and maintain across various hosting platforms.

## Recent Changes

### July 25, 2025 - Comprehensive Website Enhancements
- **Performance Optimizations**:
  - ✓ Implemented lazy loading for all images
  - ✓ Added progress bar showing scroll position
  - ✓ Optimized asset loading with proper CDN usage
  - ✓ Added smooth reveal animations with Intersection Observer

- **User Experience Improvements**:
  - ✓ Dark/Light theme toggle with localStorage persistence
  - ✓ Multi-language support structure (EN, ES, FR, DE, JA, ZH)
  - ✓ Floating action button for quick access
  - ✓ Interactive chat widget with simulated responses
  - ✓ Enhanced forms with newsletter preferences
  - ✓ Particle.js animated background

- **Conversion Features**:
  - ✓ Countdown timer for limited-time offers
  - ✓ Exit intent popup with email capture
  - ✓ Price calculator showing potential savings
  - ✓ Newsletter signup with preference options

- **Content Additions**:
  - ✓ FAQ section with accordion functionality
  - ✓ Testimonials from beta testers
  - ✓ Comparison table vs competitors
  - ✓ Blog section with latest articles
  - ✓ Interactive timeline visualization

- **Advanced Functionality**:
  - ✓ AR preview button for product visualization
  - ✓ Schema.org structured data for SEO
  - ✓ Enhanced meta tags for social sharing
  - ✓ Responsive design improvements

### July 25, 2025 - Deployment Configuration
- **Fixed**: JavaScript observer variable conflicts with safeguards
- **Status**: replit.toml properly configured; .replit file needs manual fix
- **Server**: Running on port 5000 via workflow
- **Database**: PostgreSQL with Drizzle ORM ready

### July 25, 2025 - Language and Technology Updates
- **Added Russian Language Support**:
  - ✓ Added Russian (РУ) option to language dropdown
  - ✓ Implemented Russian translations for key interface elements
  - ✓ Hero tagline: "Ваша сеть. Ваш интернет. Ваша конфиденциальность. Возвращена."
  
- **Updated Network Technology References**:
  - ✓ Changed all "4G/LTE" mentions to "4G/5G" throughout the website
  - ✓ Updated in features section, tech specs, and benefits listings
  - ✓ Better reflects current and future network capabilities

### July 25, 2025 - 3D Model Section Removed
- **Removed 3D Visualization**:
  - ✓ Removed interactive 3D model section and Three.js dependencies
  - ✓ Removed "3D Model" navigation link
  - ✓ Cleaned up all related JavaScript code
  - ✓ Simplified website structure for better performance
  
- **Current Status**:
  - ✓ Website maintains all other features and functionality
  - ✓ Immersive tooltip system remains fully functional
  - ✓ All navigation links updated accordingly

### July 25, 2025 - Story Section Added
- **Added Story Section**:
  - ✓ Created compelling fictional narrative about Dr. Nevin Nevinovich
  - ✓ Added "Story" navigation link between Memes and Tech Specs
  - ✓ Integrated 6 chapter story with images
  - ✓ Implemented scroll animations for chapters
  
- **Story Features**:
  - ✓ Genesis narrative of PiRaMID creation
  - ✓ Dystopian MEGA-NET CORP backdrop
  - ✓ Dr. Nevinovich's journey from concept to revolution
  - ✓ Thoth Tech Titans branding integration
  - ✓ Alternating image/text layout for visual interest
  - ✓ Smooth reveal animations on scroll

### July 25, 2025 - Playful Rick Roll Easter Egg System
- **Simplified Easter Eggs**:
  - ✓ Removed all Rick Roll triggers except Konami code
  - ✓ FAB button now opens chat widget instead of Rick Roll
  - ✓ Cleaner, more professional user experience

### July 26, 2025 - Whimsical Loading Transitions Implementation
- **Page Loading Enhancements**:
  - ✓ Animated 3D pyramid page loader with rotating faces
  - ✓ Glitch text effect showing loading progress messages
  - ✓ Loading dots animation with bouncing effect
  
- **Image Loading**:
  - ✓ Skeleton loaders with wave animation for gallery images
  - ✓ Skeleton loaders for story section images
  - ✓ Smooth opacity transitions on image load
  
- **Animation Effects**:
  - ✓ Bouncy button animations on all CTAs and submit buttons
  - ✓ Float animation on feature icons and section titles
  - ✓ Typewriter effect with blinking cursor on hero tagline
  - ✓ Glitch text effects on chapter titles
  - ✓ Stagger animations for feature grid items
  - ✓ Whimsical hover effects with rotation on cards
  
- **UI Enhancements**:
  - ✓ Enhanced chat widget with slide-in animation
  - ✓ FAB button with floating animation
  - ✓ Cubic bezier transitions for bouncy effects

### Manual Fix Still Required
The .replit file contains a malformed deployment command on line 33:
```
# BROKEN:
run = ["sh", "-c", "[\"node\", \"start.js\"]"]

# SHOULD BE:
run = ["node", "start.js"]
```