# da.live Authoring Guide - Homepage

This guide shows you how to create the customer-centric homepage in da.live that matches the design vision in `docs/layout/images/homepage.png`.

## 📍 da.live Editor
https://da.live/edit/premkumars7/sanbox-horizon/main

## 🏠 Creating the Homepage

### Step 1: Create New Document
1. Open da.live editor
2. Click **"New Document"**
3. Name it: **`index`** (this will be the homepage at `/`)
4. Click **Create**

### Step 2: Add Metadata
At the top of the document, add:
- **Title**: `Pearson - Where Learning Comes to Life`
- **Description**: `Explore learning for every stage of life with Pearson.`

### Step 3: Add Hero Block with Search

Create a table with **class name: `hero hero-with-search`**

| Column 1 |
|----------|
| **Where learning comes to life** |
| Explore learning for every stage of life with Pearson. |
| `<form class="hero-search"><input type="search" placeholder="What can I help you find?" aria-label="Search"><button type="submit" aria-label="Search"><span class="search-icon">🔍</span></button></form>` |

**Important:** The HTML for the search form needs to be exactly as shown above.

### Step 4: Add Customer-Centric Cards

Create a table with **class name: `cards cards-customer-centric`**

| Card 1 | Card 2 | Card 3 |
|--------|--------|--------|
| **Looking to make a purchase?** | **Looking to schedule an exam or test?** | **Looking to Enroll in Virtual School?** |
| [Visit our eStore](/estore) | [Book Now](/booking) | [Enroll Now](/enroll) |

**Styling Note:** Make sure each button link is styled with the `button primary` class. In da.live, you can format links as buttons.

## 📐 Alternative Block Syntax (if tables don't work)

If da.live doesn't support the complex table structure, use this simpler format:

### Hero Block
```
--- Hero (hero-with-search) ---

# Where learning comes to life

Explore learning for every stage of life with Pearson.

[HTML: Search form component]
```

### Cards Block
```
--- Cards (cards-customer-centric) ---

## Looking to make a purchase?
[Visit our eStore](/estore)

---

## Looking to schedule an exam or test?
[Book Now](/booking)

---

## Looking to Enroll in Virtual School?
[Enroll Now](/enroll)
```

## 🎨 Block Classes Reference

### Hero Block
- **Block name**: `hero`
- **Variant**: `hero-with-search`
- **Features**: 
  - Purple gradient background with light rays
  - Centered text
  - Search bar with white background
  - Responsive layout

### Cards Block
- **Block name**: `cards`
- **Variant**: `cards-customer-centric`
- **Features**:
  - 3-column grid
  - Purple gradient backgrounds
  - Yellow CTA buttons
  - Hover animations
  - Centered text

## 📝 Content Structure in da.live

Your final document structure should look like this:

```
Document: index

Metadata:
- Title: Pearson - Where Learning Comes to Life
- Description: Explore learning for every stage of life with Pearson.

Sections:
1. Hero Block (hero-with-search)
   - Heading
   - Subheading
   - Search form

2. Cards Block (cards-customer-centric)
   - Card 1: Purchase
   - Card 2: Booking
   - Card 3: Enrollment
```

## 🚀 Publishing Workflow

1. **Create** content in da.live
2. Click **Preview** → View at https://main--sanbox-horizon--premkumars7.aem.page/
3. Test and verify
4. Click **Publish** → Goes live at https://main--sanbox-horizon--premkumars7.aem.live/

## 💡 Tips

- Use da.live's **block library** to insert blocks
- Format headings with proper hierarchy (H1, H2, H3)
- Links automatically become buttons when styled in cards
- The search form may need to be added as raw HTML - check da.live's HTML insertion feature
- Preview frequently to see how blocks render

## 🔧 Troubleshooting

### Search bar not showing?
- Make sure the HTML form code is preserved
- Or simplify to a text input field and let JavaScript enhance it

### Cards not purple?
- Verify the block has the `cards-customer-centric` class
- Check that the CSS file is loaded (it should auto-load from the code)

### 404 Error?
- Make sure the document is named exactly `index`
- Verify you clicked **Preview** in da.live
- Wait 1-2 minutes for content sync

## 📚 Related Documentation

- [Block Design Specifications](./block-design.md)
- [Content Model Guide](./content-model.md)
- [Pearson Design System](../styles/styles.css)

---

**Questions?** Check the code examples in:
- `/blocks/hero/` - Hero block implementation
- `/blocks/cards/` - Cards block implementation
- `/index.html` - Static HTML reference
