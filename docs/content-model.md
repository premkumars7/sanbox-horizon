# Content Model Documentation

## Overview
This document defines the content model for the EDS homepage with Pearson branding. It describes how content authors should structure their content to work with the implemented blocks.

## Page Structure

### Sections
Pages are composed of sections. Each section can have:
- Default content (text, headings, images, links)
- One or more blocks
- CSS classes for styling variants

### Section Variants
Apply CSS classes to sections for different styling:

```html
<!-- Default white background -->
<div class="section">...</div>

<!-- Light gray background -->
<div class="section light">...</div>

<!-- Dark Pearson blue background -->
<div class="section dark">...</div>

<!-- Centered text -->
<div class="section text-center">...</div>

<!-- Combine classes -->
<div class="section dark text-center">...</div>
```

---

## Block Content Models

### Hero Block
**When to use**: Landing pages, campaign pages, feature announcements

**Content Structure**:
| Row | Content | Required | Notes |
|-----|---------|----------|-------|
| 1 | Heading (H1) | Yes | Main hero headline |
| 2 | Description | No | Supporting paragraph text |
| 3 | CTAs | No | One or more links (first becomes primary button) |
| 4 | Image | No | Hero illustration or photo |

**Authoring Example** (in Word/Google Docs):
```
|--------------|
| Hero         |
|--------------|
| Where Learning Comes to Life |
|--------------|
| The right learning solutions make a big difference at every age... |
|--------------|
| https://example.com/get-started | https://example.com/learn-more |
|--------------|
| [hero-image.jpg] |
|--------------|
```

**HTML Output**:
```html
<div class="hero">
  <div><h1>Where Learning Comes to Life</h1></div>
  <div><p>The right learning solutions...</p></div>
  <div><p><a href="...">Get Started</a> <a href="...">Learn More</a></p></div>
  <div><picture><img src="..." alt="..."></picture></div>
</div>
```

---

### Cards Block
**When to use**: Feature highlights, service offerings, product listings, blog previews

**Content Structure**:
Each card is one row with two cells:
| Cell | Content | Required | Notes |
|------|---------|----------|-------|
| 1 | Image | Yes | Card thumbnail (16:9 recommended) |
| 2 | Title + Description + Link | Yes | H3 heading, paragraph text, and link |

**Authoring Example**:
```
|--------------|--------------|
| Cards        |              |
|--------------|--------------|
| [school.jpg] | For School   |
|              | Inspire a lifelong love of learning... |
|              | https://example.com/schools |
|--------------|--------------|
| [college.jpg]| For College  |
|              | Deliver practical, hands-on learning... |
|              | https://example.com/college |
|--------------|--------------|
| [uni.jpg]    | For University |
|              | Get interactive content... |
|              | https://example.com/university |
|--------------|--------------|
```

**Best Practices**:
- Use 3 cards for optimal desktop layout
- Images should be 16:9 aspect ratio (e.g., 1600x900px)
- Keep titles short (2-5 words)
- Keep descriptions concise (1-2 sentences)
- Link text should be action-oriented

---

### Columns Block
**When to use**: Feature descriptions, about sections, content with accompanying images

**Content Structure**:
One row with 2-3 cells:
| Cell | Content | Required | Notes |
|------|---------|----------|-------|
| 1 | Text or Image | Yes | Either content or image |
| 2 | Text or Image | Yes | Complement of cell 1 |
| 3 | Text or Image | No | Optional third column |

**Authoring Example (2 columns)**:
```
|------------------------------|------------------------------|
| Columns                      |                              |
|------------------------------|------------------------------|
| Take Teaching & Learning     | [learning-platform.jpg]      |
| to the Next Level            |                              |
| Get bite sized videos and    |                              |
| 24/7 AI help...              |                              |
| https://example.com/platform |                              |
|------------------------------|------------------------------|
```

**Authoring Example (3 columns)**:
```
|--------------|--------------|--------------|
| Columns      |              |              |
|--------------|--------------|--------------|
| Column 1     | Column 2     | Column 3     |
| Content...   | Content...   | Content...   |
|--------------|--------------|--------------|
```

**Best Practices**:
- Use 2 columns for text + image layouts
- Put image first for image-left layout, text first for image-right
- Images should be high quality (at least 1200px wide)
- Include clear CTAs with button styling

---

## Link and Button Styling

### Default Links
Regular links inherit Pearson purple color (#512eab) with hover effects.

### Button Links
Add `.button` class plus variant class:

**Primary Button** (Pearson purple background):
```html
<a href="..." class="button primary">Get Started</a>
```

**Secondary Button** (outlined):
```html
<a href="..." class="button secondary">Learn More</a>
```

**Action Button** (yellow background):
```html
<a href="..." class="button action">Sign Up Now</a>
```

**In Document Authoring**:
Just provide the link URL - the block JavaScript will automatically style the first link as primary and subsequent links as secondary.

---

## Image Guidelines

### File Formats
- Use WebP for modern browsers (auto-converted by AEM)
- Fallback JPG/PNG for compatibility
- SVG for logos and icons

### Image Sizes
| Usage | Recommended Size | Aspect Ratio |
|-------|------------------|--------------|
| Hero images | 1600x1000px | 16:10 |
| Card thumbnails | 1600x900px | 16:9 |
| Column images | 1200x800px | 3:2 |
| Full-width backgrounds | 2400x1350px | 16:9 |

### Optimization
- Keep file sizes under 500KB
- Use appropriate compression
- Include descriptive alt text for accessibility

---

## Typography Guidelines

### Heading Hierarchy
Always maintain proper heading hierarchy:
- **H1**: One per page, used in hero sections
- **H2**: Major section headings
- **H3**: Card titles, subsection headings
- **H4-H6**: Nested content structure

### Text Formatting
- **Bold**: Use for emphasis (sparingly)
- **Italic**: Use for citations or subtle emphasis
- **Links**: Use descriptive link text ("Learn about Pearson+" not "Click here")

---

## Responsive Behavior

### Mobile (< 600px)
- Single column layouts
- Stacked content
- Full-width images
- Larger touch targets

### Tablet (600px - 899px)
- 2-column cards grid
- Mixed layouts
- Optimized spacing

### Desktop (≥ 900px)
- 3-column cards grid
- Side-by-side columns
- Maximum content width: 1200px
- Enhanced spacing

---

## SEO Best Practices

### Meta Information
Include in document properties:
- **Title**: 50-60 characters
- **Description**: 150-160 characters
- **Keywords**: Relevant terms

### Content Structure
- Use H1 for main page title
- Include relevant keywords naturally
- Write descriptive alt text
- Use semantic HTML

### Performance
- Lazy load images below the fold
- Optimize image file sizes
- Minimize custom CSS/JS

---

## Accessibility Checklist

- ✅ Proper heading hierarchy (H1 → H2 → H3)
- ✅ Alt text for all images
- ✅ Sufficient color contrast (WCAG AA)
- ✅ Keyboard navigable
- ✅ Focus indicators visible
- ✅ Descriptive link text
- ✅ Screen reader friendly

---

## Content Authoring Workflow

1. **Plan Content Structure**
   - Decide which blocks to use
   - Gather all content and images
   - Prepare links and CTAs

2. **Create Document**
   - Use Word or Google Docs
   - Follow block structure with tables
   - Add images and links

3. **Preview**
   - Preview in AEM
   - Test on mobile and desktop
   - Check all links work

4. **Publish**
   - Review final content
   - Publish to production
   - Verify live site

---

## Common Patterns

### Homepage Pattern
```
1. Hero (with heading, description, 2 CTAs, image)
2. Cards (3 cards with images and descriptions)
3. Columns (text + image feature section)
4. Columns (reversed image + text)
5. Dark section (centered CTA)
```

### Feature Page Pattern
```
1. Hero (heading + description)
2. Columns (multiple feature descriptions)
3. Cards (related resources)
4. Light section (final CTA)
```

### Landing Page Pattern
```
1. Hero (strong headline + single CTA)
2. Columns (value propositions)
3. Cards (social proof or testimonials)
4. Dark section (conversion CTA)
```
