# Homepage Architecture - Section to Block Mapping

## Executive Summary
This document provides the architectural plan for migrating the Pearson UK homepage from traditional AEM to Edge Delivery Services (EDS). The homepage has been broken down into logical sections and mapped to reusable EDS blocks following best practices.

---

## Homepage Sections Breakdown

Based on the design mockup (homepage.png) - "Customer Centric & AI Native Homepage", the homepage consists of the following sections:

### 1. **Header / Navigation**
- **Pearson logo** (left aligned)
- **Navigation dropdowns**: "By Customer", "Education Products", "Work Products"
- **Action buttons** (right aligned):
  - "Contact Sales" (yellow CTA button)
  - "Get Support" (white button)
  - "Sign In" (white button)
- **Utility icons**: Shopping cart, Globe/language selector

### 2. **Hero Section with Search**
- **Background**: Purple gradient with vertical light ray effects
- **Main headline**: "Where learning comes to life"
- **Subheading**: "Explore learning for every stage of life with Pearson."
- **AI-powered search bar**: Prominent white search input with placeholder "What can I help you find?" and search icon
- **Full-width, immersive design**

### 3. **Action Cards Section**
Three horizontally aligned purple gradient cards representing customer journey stages:

**Card 1 - Purchase**
- Heading: "Looking to make a purchase?"
- CTA: "Visit our eStore" (yellow button)

**Card 2 - Booking**
- Heading: "Looking to schedule an exam or test?"
- CTA: "Book Now" (yellow button)

**Card 3 - Enrollment**
- Heading: "Looking to Enroll in Virtual School?"
- CTA: "Enroll Now" (yellow button)

### Design Philosophy
This is a **customer-centric, AI-native** approach that focuses on:
- **Mission Completion**: Quick paths to key customer actions
- **Discovery**: AI-powered search for exploration
- **Stage-based Journey**: Clear progression from awareness to action

---

## Section-to-Block Mapping

| Section | Block Name | Reusable | Priority |
|---------|-----------|----------|----------|
| Header / Navigation | `header` | Yes | High |
| Hero with Search | `hero` (with search variant) | Yes | High |
| Action Cards | `cards` | Yes | High |
| Footer | `footer` | Yes | Medium |

---

## Recommended Reusable Blocks (6 blocks)

### 1. **header** (Priority: High)
- **Purpose**: Global site navigation and branding
- **Features**: Logo, navigation menu, sign-in button, country selector
- **Reusability**: Used on every page
- **Variants**: None for PoC4 blocks for PoC)

### 1. **header** (Priority: High)
- **Purpose**: Global site navigation, branding, and utility actions
- **Features**: 
  - Logo (left aligned)
  - Dropdown navigation menus (By Customer, Education Products, Work Products)
  - Action buttons (Contact Sales, Get Support, Sign In)
  - Utility icons (Shopping cart, language selector)
- **Reusability**: Used on every page
- **Variants**: `header-simple` (without dropdowns for sub-pages)

### 2. **hero** (Priority: High)
- **Purpose**: Large, immersive section with headline and primary action
- **Features**: 
  - Full-width background with gradient/image
  - Headline and subheading
  - Search input (AI-powered)
  - Responsive layout
- **Reusability**: Homepage, landing pages, campaign pages
- **Variants**: `hero-search` (with search bar), `hero-simple` (without search)

### 3. **cards** (Priority: High)
- **Purpose**: Grid of action-oriented cards with clear CTAs
- **Features**: 
  - 3-column layout (responsive: 1 col mobile, 2-3 cols desktop)
  - Gradient/colored backgrounds
  - Heading and CTA button
  - Equal height cards
- **Reusability**: Homepage, product pages, landing pages
- **Variants**: `cards-3-col`, `cards-2-col`, `cards-compact`

### 4. **footer** (Priority: Medium)
- **Purpose**: Global site footer with links and legal information
- **Features**: 
  - Multi-column link sections
  - Social media links
  - Legal links (Terms, Privacy, Accessibility)
  - Copyright notice
- **Reusability* (headline, subheading, search placeholder)
- ✅ Action Cards (card headings, CTA button text, links)
- ✅ Footer links and structure
- ✅ Header navigation menu items and links

### API-Driven Content (Dynamic)
These sections will benefit from API integration (Hybrid approach):

- 🔄 **Search functionality** (AI Chat integration)
  - Stage 1: Customer discovery via AI
  - Returns: Product recommendations, content suggestions
- 🔄 **Dynamic card content** (optional)
  - Could be personalized based on user profile/region
  - A/B testing of card variations
- 🔄 **Dropdown menus** (optional)
  - Product catalogs from content API
  - Customer-specific navigation

### Recommendation for PoC:
**Use static content for ALL sections** except the search functionality:
- **Search bar UI**: Static (displayed in hero)
- **Search functionality**: Can be mocked with static results or integrated with API later
- All other content: Document-driven via Markdown
- 🔄 Pearson+ promotion (could be dynamically updated)
- 🔄 "For Audience" carousel (could pull from content API)
- 🔄 Support section links (could be dynamic based on user region)

### RecommI-Powered Search**
- **PoC Approach**: Display search input, capture queries, show loading state or redirect to mock results page
- **Production**: Integrate with AI Chat API for discovery and recommendations

### 2. **Navigation Dropdowns**
- **PoC Approach**: Display dropdown menus with static links
- **Production**: Dynamic menu content from CMS/API, mega-menu with rich content

### 3. **Authentication / Sign In**
- **PoC Approach**: Display button, link to existing login page or show mock state
- **Production**: Integrate with Pearson identity service with SSO

### 4. **Shopping Cart**
- **PoC Approach**: Display icon, click shows mock cart or links to eStore
- **Production**: Real-time cart integration with eCommerce platform

### 5. **Country/Region Selector**
- **PoC Approach**: Display globe icon with static language/region options
- **Production**: Integrate with localization service, automatic detection, redirect logic

### 6. **Personalized Content**
- **PoC Approach**: Show default action cards for all users
- **Production**: Personalize cards based on customer type, profile, purchase history

### 7. **Analytics & Tracking**
- **PoC Approach**: Basic page view tracking only
- **Production**: Full analytics implementation (Adobe Analytics, search query tracking, conversion events)
### 6. **Search Functionality**
- **PoC Approach**: Not implemented or link to existing search
- **Production**: Full search implementation with EDS search API

### 7. **Carousel Auto-Play**
- **PoC Approach**: Manual navigation only
- **Production**: Auto-play with pause──────────────────────────┐
│  HEADER                                                        │  <- header block
│  [Pearson] [By Customer ▾] [Education Products ▾]             │
│            [Work Products ▾]                                   │
│                    [Contact Sales] [Get Support] [Sign In]    │
│                                              [🛒] [🌐]         │
├───────────────────────────────────────────────────────────────┤
│                                                                │
│                       HERO with SEARCH                         │  <- hero block
│                                                                │     (search variant)
│               Where learning comes to life                     │
│         Explore learning for every stage of life              │
│                      with Pearson.                            │
│                                                                │
│     ┌────────────────────────────────────────────────┐       │
│     │ What can I help you find?              [🔍]   │       │
│     └────────────────────────────────────────────────┘       │
│                                                                │
├───────────────────────────────────────────────────────────────┤
│                                                                │
│                      ACTION CARDS                              │  <- cards block
│                                                                │     (3-column)
│  ┌─────────────┐  ┌──────────────┐  ┌──────────────┐        │
│  │  Looking to │  │  Looking to  │  │  Looking to  │        │
│  │   make a    │  │  schedule an │  │  Enroll in   │        │
│  │  purchase?  │  │ exam or test?│  │Virtual School│        │
│  │             │  │              │  │              │        │
│  │[Visit eStore│  │  [Book Now]  │  │[Enroll Now]  │        │
│  └─────────────┘  └──────────────┘  └──────────────┘        │
│                                                                │
├───────────────────────────────────────────────────────────────┤
│                        FOOTER                                  │  <- footer block
│    [Links] [Support] [Legal] [Social Media]                  │
└───────────────────────────────────────────────────────────────┘
```

**Key Layout Features:**
- **Clean, focused design** - Only 3 main sections (4 blocks total)
- **Purple gradient background** on hero section with light effects
- **Prominent search bar** as primary interaction point
- **Eager phase**: Header and hero section only (above fold)
- **Lazy phase**: Cards section and footer
- **Delayed phase**: Analytics, search API initialization
- Minimal JavaScript - only load what's needed
- Use EDS automatic image optimization for background images
- Inline critical CSS for hero section

### Accessibility
- Semantic HTML throughout (nav, main, section, footer)
- Proper heading hierarchy (h1 in hero, h2 for cards)
- ARIA labels for interactive elements:
  - Search input: `aria-label="Search for learning resources"`
  - Navigation dropdowns: `aria-expanded`, `aria-haspopup`
  - Shopping cart: `aria-label="Shopping cart"`
  - Language selector: `aria-label="Select language or region"`
- Keyboard navigation support for all interactive elements
- Focus visible states on all buttons and links
- Skip to main content link

### Responsive Design
- **Mobile-first approach**
- **Breakpoints**: 600px (tablet), 900px (desktop), 1200px (wide)
- **Header**: 
  - Mobile: Hamburger menu, stacked buttons
  - Desktop: Full navigation with dropdowns
- **Hero**: 
  - Full-width on all devices
  - Search bar: 90% width mobile, max 600px desktop
- **Cards**: 
  - Mobile: 1 column, stacked
  - Tablet: 2 columns
  - Desktop: 3 columns, equal width

### Visual Design
- **Color Palette**:
  - Primary: Deep purple (#2D1B69 or similar)
  - Accent: Bright yellow (#FFE500 or similar) for CTAs
  - Text: White on dark backgrounds
  - Background: Purple gradient with light ray effects
- **Typography**:
  - Headings: Bold, modern sans-serif
  - BDesign Assets**: 
   - Purple gradient background images/CSS
   - Light ray effect assets or CSS implementation
   - Pearson logo and icons (shopping cart, globe)
6. **Simple First**: Start with basic functionality, add complexity later
7. **Customer Journey Focus**: This design prioritizes mission completion over content discovery
8. **AI-Native Approach**: Search functionality is central but can be mocked for PoC
- **Effects**:
  - Vertical light rays on hero background
  - Gradient overlays on cardsbased on current Pearson UK homepage |
| 2026-02-23 | 2.0 | **Major revision** - Updated to match actual design mockup (homepage.png). Simplified to customer-centric, AI-native approach with 4 blocks instead of 6. Focus on mission completion vs content exploration. 
  - Hover states on buttons and cards

### Browser Support
- Chrome (latest 2)
- Firefox (latest 2)
- Safari (latest 2)
- Edge (latest 2)
- Progressive enhancement for older browsershierarchy (h1 → h2 → h3)
- ARIA labels for interactive elements
- Skip to main content link
- Keyboard navigation support

### Responsive Design
- Mobile-first approach
- Breakpoints: 600px (tablet), 900px (desktop), 1200px (wide)
- Cards: 1 column mobile, 2 tablet, 3-4 desktop
- Columns: Stack on mobile, side-by-side on tablet/desktop

### Browser Support
- Chrome (latest 2)
- Firefox (latest 2)
- Safari (latest 2)
- Edge (latest 2)

---

## Next Steps

1. ✅ Complete Task 1 (Architecture) - DONE
2. → Proceed to Task 2 (Project Structure)
3. → Proceed to Task 3 (Block Design)
4. → Begin implementation in Task 4

---

## Assumptions & Constraints

1. **Content Format**: All content will be authored in Google Docs or Markdown
2. **No Frameworks**: Pure vanilla JavaScript, no React/Vue/Angular
3. **No Build Tools**: No transpilation, bundling runs natively in browser
4. **EDS Backend**: Content served through `*.aem.live` infrastructure
5. **Existing Assets**: Images and videos available or can be sourced
6. **Simple First**: Start with basic functionality, add complexity later

---

## Revision History

| Date | Version | Changes |
|------|---------|---------|
| 2026-02-23 | 1.0 | Initial architecture document |
