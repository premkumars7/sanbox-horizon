# Block Design Documentation

## Overview
This document describes the structure and purpose of each block implemented in the EDS homepage project with Pearson branding.

## Block List

### 1. Hero Block
**Purpose**: Create an impactful, full-width hero section with Pearson brand gradient background

**Content Structure**:
```
- Row 1: Heading (h1)
- Row 2: Description paragraph
- Row 3: CTA buttons (one or more links)
- Row 4: Optional hero image
```

**Features**:
- Pearson brand gradient background (#0d004d → #512eab → #c1bfff)
- White text for readability on dark background
- Primary CTA with yellow Pearson action color (#ffce00)
- Secondary CTA with transparent background
- Responsive layout (stacked on mobile, side-by-side on desktop)
- Image with rounded corners and shadow

**Example**:
```html
<div class="hero">
  <div><h1>Where Learning Comes to Life</h1></div>
  <div><p>Description text...</p></div>
  <div><p><a href="#">Primary CTA</a> <a href="#">Secondary CTA</a></p></div>
  <div><picture><img src="..." alt="..."></picture></div>
</div>
```

---

### 2. Cards Block
**Purpose**: Display multiple content cards in a responsive grid layout

**Content Structure**:
```
Each card is a row with:
- Cell 1: Image
- Cell 2: Title (h3), description (p), and link
```

**Features**:
- Pearson border color (#c1bfff) with hover effect
- 16:9 aspect ratio images
- Card elevation on hover with purple accent
- Arrow animation on link hover
- Responsive grid (1 column mobile, 3 columns desktop)
- Rounded corners (1.5rem)

**Example**:
```html
<div class="cards">
  <div>
    <div><picture><img src="..." alt="..."></picture></div>
    <div>
      <h3>Card Title</h3>
      <p>Card description</p>
      <p><a href="#">Learn more</a></p>
    </div>
  </div>
  <!-- More cards... -->
</div>
```

---

### 3. Columns Block
**Purpose**: Create side-by-side content layouts with text and images

**Content Structure**:
```
Single row with multiple cells (typically 2):
- Cell 1: Text content (headings, paragraphs, links)
- Cell 2: Image
```

**Features**:
- Flexible column layouts (2 or 3 columns)
- Images automatically detected and styled
- Responsive (stacked on mobile, side-by-side on desktop)
- Image-first order on mobile, configurable on desktop
- Supports CTA buttons with Pearson styling
- Rounded images

**Example**:
```html
<div class="columns">
  <div>
    <div>
      <h2>Column Title</h2>
      <p>Column description</p>
      <p><a href="#" class="button primary">Call to Action</a></p>
    </div>
    <div><picture><img src="..." alt="..."></picture></div>
  </div>
</div>
```

---

### 4. Header Block
**Purpose**: Provide consistent navigation across all pages

**Features**:
- Fixed position with Pearson dark blue background (#0d004d)
- White text for contrast
- Responsive hamburger menu on mobile
- Desktop horizontal navigation
- Pearson brand styling with shadow

---

### 5. Footer Block
**Purpose**: Provide site-wide footer with links and information

**Features**:
- Pearson dark blue background (#0d004d)
- White text
- Link sections with hover effects (yellow accent)
- Responsive layout
- Copyright and legal information

---

## Design Principles

### Pearson Brand Colors
- **Primary Purple**: #512eab (links, primary buttons, accents)
- **Dark Blue**: #0d004d (backgrounds, headers, footers)
- **Action Yellow**: #ffce00 (call-to-action elements)
- **Light Purple**: #c1bfff (borders, decorative elements)
- **Accent Teal**: #56e2e1 (optional accent color)

### Typography
- **Font Family**: 'Plus Jakarta Sans' (from Google Fonts)
- **Heading Sizes**: Fluid typography using clamp() for responsive scaling
- **Font Weights**: 
  - Normal: 400
  - Medium: 500
  - Semibold: 600
  - Bold: 700

### Spacing System
- Based on 4px unit system
- xs: 8px, s: 16px, m: 24px, l: 32px, xl: 48px, xxl: 64px
- Desktop: Increased spacing for better breathing room

### Border Radius
- sm: 0.25rem, md: 0.5rem, lg: 1rem, xl: 1.5rem

### Animations
- All transitions: 0.3s ease
- Hover effects: translateY(-2px to -4px)
- Scale effects on images: 1.05

---

## Block Usage Guidelines

### Generic vs Specific
All blocks are designed to be **generic and reusable**:
- ✅ Can be used on any page
- ✅ Content-driven (not page-specific)
- ✅ Flexible configuration through content structure
- ❌ No hard-coded page-specific logic

### Content Authoring
Authors control block behavior through:
1. **Content structure**: Number of rows/cells determines layout
2. **CSS classes**: Section classes (light, dark, text-center) control appearance
3. **Link styling**: Button classes (primary, secondary, action) control CTA appearance

### Accessibility
- Semantic HTML structure
- Proper heading hierarchy
- Alt text for all images
- Sufficient color contrast ratios
- Keyboard navigation support
