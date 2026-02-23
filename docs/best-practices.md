# Best Practices Guide

## Overview
This guide outlines best practices for developing and maintaining the EDS homepage with Pearson branding. Following these guidelines ensures code quality, performance, and maintainability.

---

## Code Quality

### JavaScript Best Practices

#### 1. Use Modern ES6+ Features
```javascript
// ✅ Good: Arrow functions, destructuring
export default async function decorate(block) {
  const rows = [...block.children];
  rows.forEach((row) => {
    // Process row
  });
}

// ❌ Avoid: Old-style functions
export default async function decorate(block) {
  var rows = Array.prototype.slice.call(block.children);
  for (var i = 0; i < rows.length; i++) {
    // Process row
  }
}
```

#### 2. Always Include File Extensions
```javascript
// ✅ Good
import { createOptimizedPicture } from '../../scripts/aem.js';

// ❌ Bad
import { createOptimizedPicture } from '../../scripts/aem';
```

#### 3. Use DOM APIs Effectively
```javascript
// ✅ Good: Direct DOM manipulation
const div = document.createElement('div');
div.className = 'wrapper';
div.textContent = 'Hello';

// ❌ Avoid: innerHTML for simple content
const div = document.createElement('div');
div.innerHTML = '<div class="wrapper">Hello</div>';
```

#### 4. Handle Missing Content Gracefully
```javascript
// ✅ Good: Check for optional content
const image = row.querySelector('picture');
if (image) {
  // Process image
}

// ❌ Bad: Assume content exists
const image = row.querySelector('picture');
image.setAttribute('loading', 'lazy'); // May fail
```

### CSS Best Practices

#### 1. Scope All Selectors to Block
```css
/* ✅ Good: Scoped to block */
.hero {
  padding: var(--space-xl);
}

.hero h1 {
  color: white;
}

/* ❌ Bad: Global selector */
h1 {
  color: white;
}
```

#### 2. Use CSS Custom Properties
```css
/* ✅ Good: Use design tokens */
.card {
  padding: var(--space-m);
  background: var(--background-color);
  color: var(--text-color);
}

/* ❌ Bad: Hard-coded values */
.card {
  padding: 24px;
  background: white;
  color: #060609;
}
```

#### 3. Mobile-First Responsive Design
```css
/* ✅ Good: Mobile first, then desktop */
.columns > div {
  flex-direction: column;
}

@media (width >= 900px) {
  .columns > div {
    flex-direction: row;
  }
}

/* ❌ Bad: Desktop first */
.columns > div {
  flex-direction: row;
}

@media (width < 900px) {
  .columns > div {
    flex-direction: column;
  }
}
```

#### 4. Use Modern CSS Features
```css
/* ✅ Good: Flexbox/Grid for layouts */
.cards {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: var(--space-l);
}

/* ❌ Avoid: Float-based layouts */
.cards .card {
  float: left;
  width: 33.33%;
}
```

---

## Performance Optimization

### 1. Image Optimization
```javascript
// ✅ Good: Use createOptimizedPicture
import { createOptimizedPicture } from '../../scripts/aem.js';

ul.querySelectorAll('picture > img').forEach((img) => {
  img.closest('picture').replaceWith(
    createOptimizedPicture(img.src, img.alt, false, [{ width: '750' }])
  );
});
```

### 2. Lazy Loading
- Images below the fold automatically lazy load
- Use `eager` parameter only for LCP images
- Keep hero images optimized (< 500KB)

### 3. Critical CSS
```css
/* styles.css - Keep minimal for LCP */
:root {
  /* Only essential variables */
}

body {
  /* Only essential body styles */
}

/* lazy-styles.css - Everything else */
.section {
  /* Non-critical styles */
}
```

### 4. Minimize Bundle Size
- No external dependencies unless absolutely necessary
- Use native DOM APIs instead of jQuery or similar
- Keep block JS files small and focused

---

## Accessibility

### 1. Semantic HTML
```html
<!-- ✅ Good: Semantic elements -->
<nav>
  <ul>
    <li><a href="...">Home</a></li>
  </ul>
</nav>

<!-- ❌ Bad: Div soup -->
<div class="nav">
  <div class="menu">
    <div class="item">
      <a href="...">Home</a>
    </div>
  </div>
</div>
```

### 2. Proper Heading Hierarchy
```html
<!-- ✅ Good: Proper hierarchy -->
<h1>Page Title</h1>
<h2>Section Title</h2>
<h3>Subsection</h3>

<!-- ❌ Bad: Skipping levels -->
<h1>Page Title</h1>
<h4>Section Title</h4>
```

### 3. Alt Text for Images
```javascript
// ✅ Good: Descriptive alt text
createOptimizedPicture(img.src, 'Students collaborating on a project', false);

// ❌ Bad: Generic or missing alt text
createOptimizedPicture(img.src, 'image', false);
```

### 4. Color Contrast
- Minimum 4.5:1 for normal text
- Minimum 3:1 for large text
- Pearson colors meet WCAG AA standards
- Test with contrast checkers

### 5. Keyboard Navigation
```css
/* ✅ Good: Visible focus indicators */
a:focus,
button:focus {
  outline: 2px solid var(--interactive-focus);
  outline-offset: 2px;
}

/* ❌ Bad: Removing focus */
a:focus {
  outline: none;
}
```

---

## Block Development

### 1. Keep Blocks Generic
```javascript
// ✅ Good: Generic, reusable
export default async function decorate(block) {
  const rows = [...block.children];
  // Process rows generically
}

// ❌ Bad: Page-specific logic
export default async function decorate(block) {
  if (window.location.pathname === '/homepage') {
    // Homepage-specific logic
  }
}
```

### 2. Export Default Function
```javascript
// ✅ Good: Default export
export default async function decorate(block) {
  // Decoration logic
}

// ❌ Bad: Named export
export async function decorateHero(block) {
  // Decoration logic
}
```

### 3. Handle Content Variations
```javascript
// ✅ Good: Flexible content handling
rows.forEach((row) => {
  const cells = [...row.children];
  if (cells.length > 0) {
    const content = cells[0];
    // Process content
  }
});

// ❌ Bad: Assumes exact structure
const heading = rows[0].children[0];
const description = rows[1].children[0];
```

### 4. Clean Up After Decoration
```javascript
// ✅ Good: Remove original structure
rows.forEach((row) => {
  // Extract content
  row.remove();
});

// ❌ Bad: Leave duplicate content
// Don't remove rows, resulting in duplicate content
```

---

## Testing

### 1. Test on Multiple Devices
- Mobile (iPhone, Android)
- Tablet (iPad)
- Desktop (various screen sizes)
- Test responsive breakpoints: 600px, 900px, 1200px

### 2. Test with Real Content
- Long headings
- Missing images
- No CTA buttons
- Multiple CTAs
- Various text lengths

### 3. Test Accessibility
- Use keyboard navigation only
- Test with screen reader (NVDA, JAWS, VoiceOver)
- Check color contrast
- Validate HTML

### 4. Performance Testing
```bash
# Run PageSpeed Insights
npm run test:lighthouse

# Target scores:
# - Performance: 100
# - Accessibility: 100
# - Best Practices: 100
# - SEO: 100
```

---

## Git Workflow

### 1. Commit Messages
```bash
# ✅ Good: Descriptive commit messages
git commit -m "feat: add Pearson branding to hero block"
git commit -m "fix: correct cards grid layout on mobile"
git commit -m "docs: update content model documentation"

# ❌ Bad: Vague messages
git commit -m "updates"
git commit -m "fix bug"
```

### 2. Branch Strategy
```bash
# Feature branches
git checkout -b feature/pearson-cards-block

# Bug fixes
git checkout -b fix/hero-mobile-layout

# Merge to main via PR
```

### 3. Code Review Checklist
- [ ] Follows coding standards
- [ ] Includes tests
- [ ] Updates documentation
- [ ] No console.log statements
- [ ] Passes linting
- [ ] PageSpeed score 100
- [ ] Accessible
- [ ] Responsive

---

## Documentation

### 1. Comment Complex Logic
```javascript
// ✅ Good: Explain why
// Reorder columns on mobile: image first, text second
// This improves perceived performance and UX
if (window.matchMedia('(max-width: 600px)').matches) {
  // Reordering logic
}

// ❌ Bad: State the obvious
// Set div class name to 'wrapper'
div.className = 'wrapper';
```

### 2. JSDoc for Functions
```javascript
/**
 * Decorates the hero block with Pearson brand styling
 * @param {Element} block The hero block element
 */
export default async function decorate(block) {
  // Implementation
}
```

### 3. Update README
- Document new blocks
- Update setup instructions
- Note dependencies
- Include examples

---

## Security

### 1. Sanitize User Input
```javascript
// ✅ Good: Use textContent for user input
element.textContent = userInput;

// ❌ Bad: innerHTML with user input
element.innerHTML = userInput; // XSS risk
```

### 2. Validate URLs
```javascript
// ✅ Good: Validate links
const link = row.querySelector('a');
if (link && link.href.startsWith('http')) {
  // Process valid link
}
```

### 3. No Inline Scripts
```html
<!-- ✅ Good: External scripts -->
<script src="/scripts/scripts.js"></script>

<!-- ❌ Bad: Inline scripts -->
<script>
  // Inline code
</script>
```

---

## Maintenance

### 1. Regular Updates
- Update dependencies monthly
- Review and update documentation
- Monitor performance scores
- Check for broken links

### 2. Code Refactoring
- Remove unused code
- Simplify complex logic
- Improve variable names
- Add missing comments

### 3. Performance Monitoring
- Weekly PageSpeed checks
- Monitor Core Web Vitals
- Track bundle sizes
- Review image optimization

---

## Pearson Brand Compliance

### 1. Color Usage
- Use only approved Pearson colors
- Don't modify brand colors
- Maintain proper contrast ratios

### 2. Typography
- Use Plus Jakarta Sans font family
- Follow type scale guidelines
- Maintain consistent line heights

### 3. Spacing
- Use defined spacing variables
- Don't create custom spacing values
- Maintain consistent padding/margins

### 4. Components
- Use approved button styles
- Follow card design patterns
- Maintain consistent border radius

---

## Common Pitfalls to Avoid

### 1. Don't Modify aem.js
```javascript
// ❌ Never modify core AEM library
// scripts/aem.js should never be edited
```

### 2. Don't Use !important
```css
/* ❌ Avoid !important */
.hero {
  color: white !important;
}

/* ✅ Use proper specificity */
.hero h1 {
  color: white;
}
```

### 3. Don't Hard-code Content
```javascript
// ❌ Bad: Hard-coded text
heading.textContent = 'Welcome to Pearson';

// ✅ Good: Use authored content
heading.textContent = row.textContent;
```

### 4. Don't Break Mobile Experience
```css
/* ❌ Bad: Fixed widths */
.container {
  width: 1200px;
}

/* ✅ Good: Flexible widths */
.container {
  max-width: 1200px;
  width: 100%;
}
```

---

## Resources

### Internal Documentation
- [AGENTS.md](../AGENTS.md) - AI agent instructions
- [Block Design](./block-design.md) - Block specifications
- [Content Model](./content-model.md) - Content authoring guide

### External Resources
- [AEM Live Documentation](https://www.aem.live/)
- [EDS Developer Tutorial](https://www.aem.live/developer/tutorial)
- [Pearson Design System](https://www.pearson.com)
- [WCAG Guidelines](https://www.w3.org/WAI/WCAG21/quickref/)

### Tools
- [PageSpeed Insights](https://pagespeed.web.dev/)
- [WebAIM Contrast Checker](https://webaim.org/resources/contrastchecker/)
- [Can I Use](https://caniuse.com/)
- [CSS Validator](https://jigsaw.w3.org/css-validator/)
