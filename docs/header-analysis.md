# Header Design Analysis - COMPLETE STRUCTURE

## Actual Pearson.com Navigation (from live site)

### **1. Top Utility Bar** (Audience Segmentation)
   - Background: Dark blue (#0d004d)
   - Height: ~40px
   - **Left Side:**
     - FOR SCHOOL (link + dropdown)
     - FOR COLLEGE (link + dropdown)
     - FOR WORK (link + dropdown)
     - EXPLORE PEARSON (link + dropdown)
   - **Right Side:**
     - Country/Locale selector (dropdown: "United States" ▾)
   - Font: 12px, uppercase, white text, bold (600)
   - These are MEGA MENU triggers with large dropdown panels
   
### **2. Main Navigation Bar**
   - Background: Dark blue (#0d004d)
   - Height: ~64px
   - Layout: Horizontal flex
   
   **Left Section:**
   - Pearson logo (white SVG image)
   
   **Right Section** (all right-aligned):
   - Search bar (expandable, white border, semi-transparent)
   - Cart icon with badge (0)
   - Support dropdown (expandable)
   - "Sign in" button (white background, dark text)

---

## Design Reference (homepage.png) vs Reality

The homepage.png appears to show a **simplified version** focused on:
- Pearson branding
- Key navigation links (Home, Products, Solutions, Support)
- Search functionality
- Contact Sales CTA

But the **actual Pearson.com** has:
- Audience segmentation bar (FOR SCHOOL, FOR COLLEGE, FOR WORK)
- Mega menu navigation system
- Full e-commerce features (Cart, Sign in)
- Support system integration

---

## Complete Navigation Items from Pearson.com

### FOR SCHOOL Menu (Mega Menu Dropdown)
- **Virtual Schools**
- **College & Career Readiness**
- **Browse by Subject:**
  - Arts
  - Business & Computer Science
  - Career & Technical Education (CTE)
  - English Language Arts
  - History & Social Studies
  - Math
  - Science
  - World Languages
  - AP, Honors, and Electives

### FOR COLLEGE Menu (Mega Menu Dropdown)
- **Students**
- **Educators**
- **Browse by Subject:**
  - Arts
  - Business & Economics
  - Careers & Trades
  - Computer Science & IT
  - Engineering
  - English
  - Health Professions
  - Helping Professions
  - Humanities & Social Sciences
  - Math & Statistics
  - Science

### FOR WORK Menu
- **Link to work solutions page**

### EXPLORE PEARSON Menu (Mega Menu Dropdown)
- About Pearson
- Investor Relations
- Locations
- Contact Us
- News
- Careers
- Sustainability
- Social Impact
- Diversity, Equity & Inclusion
- Pearson English Learning Journey
- Why Choose Pearson

### Support Dropdown (in main nav)
- School Support
- College Support
- Work Support

### Other Navigation Items
- **Cart** (icon with badge count)
- **Sign in** (button)
- **Search** (expandable bar)
- **Locale Selector** (country dropdown)

---

## Current Implementation Issues

### 1. **Missing Top Utility Bar**
   - ❌ No country/locale selector
   - ❌ No sign-in link at top
   - Current "Sign In" is in main nav as a yellow button (incorrect)

### 2. **Brand Section**
   - ✅ Pearson text exists
   - ❌ Should be white Pearson logo (not just text link)
   - ❌ Wrapped in `.default-content-wrapper` (extra div)

### 3. **Navigation Links Section**
   - ✅ Links exist (Home, Products, Solution, Support)
   - ❌ Wrapped in `.default-content-wrapper` (extra div)
   - ❌ Not styled as horizontal list
   - ❌ No proper spacing between links
   - ❌ Font size may be too large

### 4. **Tools/Actions Section**
   - ❌ Has 3 yellow buttons (Contact Sales, Get Support, Sign In)
   - ✅ Should only have "Contact Sales" button
   - ❌ Missing search icon
   - ❌ Missing cart icon
   - ❌ "Get Support" should move to utility bar or footer
   - ❌ "Sign In" should move to utility bar (top right, white text)
   - ❌ Wrapped in `.default-content-wrapper` (extra div)
   - ❌ Height is 168px (should be 64px like nav)

### 5. **Overall Layout**
   - ✅ Nav is horizontal on desktop
   - ✅ Dark blue background
   - ❌ Missing top utility bar
   - ❌ Icons missing (search, cart)
   - ❌ Button placement incorrect

---

## Required Changes

### Phase 1: Update /nav Content Structure in da.live
**New Structure:**
```
Section 1 (Brand):
- Pearson (link to /)

Section 2 (Navigation):
- Home (/)
- Products (/products)
- Solutions (/solutions)
- Support (/support)

Section 3 (Actions):
- 🔍 (search icon - could be text or will add in CSS)
- 🛒 (cart icon - could be text or will add in CSS)  
- **Contact Sales** (/contact) - bold for yellow button
```

### Phase 2: Add Top Utility Bar
**Options:**
A. Add to header.js to programmatically insert utility bar
B. Create separate utility bar fragment
C. Add to /nav as Section 0 (before brand)

**Recommended:** Add to header.js as it's consistent across all pages

### Phase 3: CSS Updates

**header.css changes needed:**

1. Add utility bar styles:
```css
.header-utility {
  background: #0d004d;
  height: 40px;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  padding: 0 32px;
  gap: 24px;
  font-size: 12px;
}

.header-utility a {
  color: white;
  text-decoration: none;
}
```

2. Remove `.default-content-wrapper` padding/styling for nav sections

3. Update `.nav-sections` to be horizontal list:
```css
.nav-sections {
  display: flex;
  gap: 32px;
  align-items: center;
}

.nav-sections a {
  color: white;
  text-decoration: none;
  font-size: 16px;
  font-weight: 400;
}
```

4. Update `.nav-tools` for icons + button:
```css
.nav-tools {
  display: flex;
  gap: 24px;
  align-items: center;
  height: auto;
}

.nav-tools .search-icon,
.nav-tools .cart-icon {
  color: white;
  font-size: 20px;
  cursor: pointer;
}

.nav-tools .button {
  /* existing button styles */
}
```

5. Update `.nav-brand` for logo:
```css
.nav-brand {
  display: flex;
  align-items: center;
}

.nav-brand a {
  color: white;
  font-size: 24px;
  font-weight: 700;
  text-decoration: none;
}
```

### Phase 4: JavaScript Updates (header.js)

1. Add utility bar creation before nav
2. Remove `.default-content-wrapper` divs from nav sections
3. Add search icon and cart icon to tools section
4. Keep only "Contact Sales" button in tools

---

## Additional Components Needed

### 1. **Utility Bar Component**
- Country/locale selector dropdown
- Sign In link
- Should be added to header.js

### 2. **Icon Elements**
- Search icon (magnifying glass)
- Cart icon
- Can use:
  - SVG icons from `/icons/` folder
  - Unicode characters (🔍 🛒)
  - Icon font

### 3. **Logo Asset**
- Pearson logo SVG or PNG (white version)
- Should be placed in `/icons/` or referenced from Pearson CDN

---

## Implementation Priority

1. **High Priority** (breaks design):
   - Fix nav-tools to have only 1 button + icons
   - Remove extra wrappers causing layout issues
   - Make nav-sections horizontal
   - Proper spacing/sizing

2. **Medium Priority** (missing features):
   - Add utility bar
   - Add search icon
   - Add cart icon
   - Move Sign In to utility bar

3. **Low Priority** (polish):
   - Add Pearson logo image
   - Locale selector functionality
   - Cart functionality
   - Search functionality

---

## Next Steps

1. Update /nav content in da.live (remove extra buttons, simplify)
2. Update header.css to fix layout issues
3. Update header.js to add utility bar and icons
4. Test on live site
5. Iterate on spacing/sizing to match design
