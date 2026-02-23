# Pearson EDS Homepage

Adobe Edge Delivery Services (EDS) homepage implementation with Pearson brand identity. This project showcases modern web development practices with excellent performance, accessibility, and maintainability.

## 🎨 Features

- **Pearson Brand Identity**: Official Pearson colors, typography, and design patterns
- **High Performance**: Target PageSpeed score of 100
- **Fully Accessible**: WCAG 2.1 AA compliant
- **Responsive Design**: Mobile-first approach with fluid typography
- **Modern Stack**: Vanilla JavaScript ES6+, CSS3, HTML5
- **Content-Driven**: Easy authoring with Word/Google Docs

## 🚀 Quick Start

### Installation

```sh
npm install
```

### Local Development

```sh
# Start development server with draft content
npx -y @adobe/aem-cli up --html-folder drafts

# Or if you have AEM CLI installed globally
aem up --html-folder drafts

# Server starts at http://localhost:3000
```

### Linting

```sh
npm run lint        # Check for issues
npm run lint:fix    # Auto-fix issues
```

## 🌍 Environments

- **Local**: `http://localhost:3000`
- **Preview**: `https://main--sanbox-horizon--premkumars7.aem.page/`
- **Live**: `https://main--sanbox-horizon--premkumars7.aem.live/`

## 📚 Documentation

### Project Documentation
- [Block Design](docs/block-design.md) - Block specifications and features
- [Content Model](docs/content-model.md) - Content authoring guide
- [Best Practices](docs/best-practices.md) - Development standards
- [Demo Readiness](docs/demo-readiness.md) - Launch checklist
- [AGENTS.md](AGENTS.md) - AI agent development guide

### Adobe EDS Documentation
1. [Developer Tutorial](https://www.aem.live/developer/tutorial)
2. [The Anatomy of a Project](https://www.aem.live/developer/anatomy-of-a-project)
3. [Web Performance](https://www.aem.live/developer/keeping-it-100)
4. [Markup, Sections, Blocks](https://www.aem.live/developer/markup-sections-blocks)

## 🎨 Pearson Brand

### Colors
- **Primary Purple**: `#512eab`
- **Dark Blue**: `#0d004d`
- **Action Yellow**: `#ffce00`
- **Light Purple**: `#c1bfff`
- **Accent Teal**: `#56e2e1`

### Typography
- **Font**: Plus Jakarta Sans (Google Fonts)
- **Weights**: 300 (Light), 400 (Normal), 500 (Medium), 600 (Semibold), 700 (Bold)

### Design Tokens
All Pearson design tokens are implemented in `styles/styles.css` using CSS custom properties.

## 🧱 Blocks

### Hero
Full-width hero section with Pearson gradient background, heading, description, CTAs, and optional image.

### Cards
Responsive grid of content cards (3 columns on desktop) with images, titles, descriptions, and links.

### Columns
Flexible side-by-side content layouts with text and images. Supports 2-3 columns.

### Header
Fixed navigation bar with Pearson branding and responsive hamburger menu.

### Footer
Site-wide footer with Pearson branding, links, and copyright information.

## 📱 Responsive Breakpoints

- **Mobile**: < 600px
- **Tablet**: 600px - 899px
- **Desktop**: ≥ 900px
- **Large Desktop**: ≥ 1200px

## ✅ Browser Support

- Chrome: Latest 2 versions
- Firefox: Latest 2 versions
- Safari: Latest 2 versions
- Edge: Latest 2 versions

## 🎯 Performance Targets

- **PageSpeed Score**: ≥ 95
- **Largest Contentful Paint**: < 2.5s
- **First Input Delay**: < 100ms
- **Cumulative Layout Shift**: < 0.1

## 🧪 Testing

### Manual Testing
1. Test on multiple browsers (Chrome, Firefox, Safari, Edge)
2. Test on various devices (mobile, tablet, desktop)
3. Test keyboard navigation
4. Test with screen reader
5. Verify color contrast

### Performance Testing
```sh
# Run PageSpeed Insights
# Visit: https://pagespeed.web.dev/
# Test your local or deployed URL
```

## 📁 Project Structure

```
├── blocks/          # Reusable content blocks
│   ├── hero/       # Hero block
│   ├── cards/      # Cards grid block
│   ├── columns/    # Columns layout block
│   ├── header/     # Header navigation
│   └── footer/     # Footer
├── styles/          # Global styles
│   ├── styles.css          # Critical CSS
│   ├── lazy-styles.css     # Non-critical CSS
│   └── fonts.css           # Font definitions
├── scripts/         # JavaScript
│   ├── aem.js              # Core AEM library (don't modify)
│   ├── scripts.js          # Main entry point
│   └── delayed.js          # Delayed loading
├── drafts/          # Demo content (HTML files)
├── docs/            # Documentation
└── icons/           # SVG icons
```

## 🛠️ Development

### Adding a New Block

1. Create block directory: `blocks/myblock/`
2. Add CSS file: `blocks/myblock/myblock.css`
3. Add JS file: `blocks/myblock/myblock.js`
4. Export default decorate function:

```javascript
/**
 * Decorates the myblock block
 * @param {Element} block The block element
 */
export default async function decorate(block) {
  // Decoration logic
}
```

### Code Style

- Use ES6+ features
- Mobile-first CSS
- Semantic HTML
- Accessible by default
- Follow Pearson brand guidelines

## 🤝 Contributing

1. Create a feature branch
2. Make your changes
3. Run linting: `npm run lint`
4. Test thoroughly
5. Create a pull request
6. Include link to preview URL in PR description

## 📄 License

Proprietary - Pearson Education

## 🙏 Acknowledgments

- Built with [Adobe Edge Delivery Services](https://www.aem.live/)
- Pearson design tokens from [Pearson.com](https://www.pearson.com)
- Inspired by modern web best practices

---

**Version**: 1.0  
**Last Updated**: February 23, 2026  
**Status**: Ready for Demo ✅
