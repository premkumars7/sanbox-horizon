# Quick Start Guide

## 🚀 Getting Started in 5 Minutes

### 1. Install Dependencies
```bash
npm install
```

### 2. Start Development Server
```bash
npx -y @adobe/aem-cli up --html-folder drafts
```
Open: `http://localhost:3000/drafts/homepage.html`

### 3. View Demo Content
The demo homepage showcases:
- ✅ Hero section with Pearson gradient
- ✅ Cards grid (3 columns)
- ✅ Feature sections (columns)
- ✅ Dark CTA section
- ✅ Responsive design

## 📱 Test Responsive Design

### In Browser DevTools
1. Open DevTools (F12 or Cmd+Option+I)
2. Click device toolbar icon
3. Test breakpoints:
   - Mobile: 375px
   - Tablet: 768px
   - Desktop: 1200px

## 🎨 Pearson Brand Quick Reference

### Colors (CSS Variables)
```css
--background-brand: #0d004d    /* Dark blue backgrounds */
--accent-primary: #512eab       /* Purple links/buttons */
--action-color: #ffce00         /* Yellow CTAs */
--border-color: #c1bfff         /* Light purple borders */
```

### Typography
- **Font**: Plus Jakarta Sans
- **Headings**: Bold (700), fluid sizing
- **Body**: Normal (400), 1rem base

### Spacing
```css
--space-s: 16px    /* Small gaps */
--space-m: 24px    /* Medium gaps */
--space-l: 32px    /* Large gaps */
--space-xl: 48px   /* Extra large gaps */
```

## 📝 Create New Block

1. Create directory: `blocks/myblock/`
2. Add files:
   ```bash
   touch blocks/myblock/myblock.css
   touch blocks/myblock/myblock.js
   ```

3. Basic JavaScript template:
   ```javascript
   /**
    * Decorates the myblock block
    * @param {Element} block The block element
    */
   export default async function decorate(block) {
     // Your decoration logic here
   }
   ```

4. Basic CSS template:
   ```css
   .myblock {
     padding: var(--space-l);
     background: var(--background-light);
   }
   
   .myblock h2 {
     color: var(--text-color);
   }
   ```

## 🧪 Testing Checklist

### Before Committing
- [ ] Run `npm run lint`
- [ ] Test on mobile (< 600px)
- [ ] Test on tablet (600-899px)
- [ ] Test on desktop (≥ 900px)
- [ ] Test keyboard navigation (Tab key)
- [ ] Check browser console for errors

## 📚 Documentation

- [README.md](../README.md) - Project overview
- [Block Design](block-design.md) - Block specifications
- [Content Model](content-model.md) - Content authoring
- [Best Practices](best-practices.md) - Code standards
- [Demo Readiness](demo-readiness.md) - Launch checklist

## 🔧 Common Commands

```bash
# Start server
aem up --html-folder drafts

# Lint code
npm run lint

# Fix lint issues
npm run lint:fix

# Check package
npm run build
```

## 🐛 Troubleshooting

### Server won't start
```bash
# Kill any existing processes on port 3000
lsof -ti:3000 | xargs kill -9
# Restart server
aem up --html-folder drafts
```

### Images not loading
- Check image path is correct
- Ensure images are in `/drafts/` folder
- Use relative paths: `./images/photo.jpg`

### Styles not applying
- Check CSS selector specificity
- Ensure block class name matches
- Clear browser cache (Cmd+Shift+R)
- Check for console errors

### Block not rendering
- Verify block name in HTML matches folder name
- Check JavaScript export is `export default`
- Look for console errors
- Ensure block decoration logic is correct

## 💡 Quick Tips

### Style with Pearson Brand
```css
/* Use design tokens, not hard-coded values */
✅ color: var(--accent-primary);
❌ color: #512eab;

/* Mobile-first responsive */
✅ .block { padding: var(--space-m); }
   @media (width >= 900px) { 
     .block { padding: var(--space-xl); }
   }
❌ .block { padding: var(--space-xl); }
   @media (width < 900px) { 
     .block { padding: var(--space-m); }
   }
```

### Create Buttons
```html
<!-- In content -->
<a href="/action" class="button primary">Primary Action</a>
<a href="/info" class="button secondary">Learn More</a>
<a href="/signup" class="button action">Sign Up</a>
```

### Section Variants
```html
<!-- Light gray background -->
<div class="section light">...</div>

<!-- Dark Pearson background -->
<div class="section dark">...</div>

<!-- Centered text -->
<div class="section text-center">...</div>
```

## 🎯 Performance Tips

1. **Optimize Images**: Max 500KB, use WebP
2. **Lazy Load**: Images below fold auto lazy-load
3. **Minimize CSS**: Keep styles.css small
4. **Avoid Dependencies**: Use vanilla JavaScript
5. **Test PageSpeed**: Target score 95+

## 📞 Need Help?

1. Check documentation in `/docs/`
2. Review [AGENTS.md](../AGENTS.md) for development guide
3. Search [AEM Live docs](https://www.aem.live/)
4. Ask team in Slack/email

---

**Ready to build?** Start with `aem up --html-folder drafts` and open [http://localhost:3000/drafts/homepage.html](http://localhost:3000/drafts/homepage.html)! 🚀
