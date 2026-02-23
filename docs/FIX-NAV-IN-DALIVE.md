# Fix /nav in da.live - Step-by-Step Guide

## Problem
The `/nav` document in da.live contains paragraphs instead of a 3-column table, causing the header to render empty.

## Solution
Re-author `/nav` in da.live with the correct table structure that header.js expects.

## Steps

### 1. Open /nav in da.live Editor
Visit: https://da.live/edit#/premkumars7/sanbox-horizon/nav

### 2. Delete All Current Content
- Select all content (Cmd+A)
- Delete it completely

### 3. Create a 3-Column Table
Click the "Table" button in the toolbar (or Insert → Table)
- **Columns**: 3
- **Rows**: 4 (we'll adjust if needed)

### 4. Fill in the Table Content

**Column 1 (Brand)**
- Row 1: `Pearson` (make it a link to `/`)
- Row 2-4: Leave empty

**Column 2 (Navigation Sections)**
- Row 1: `Home` (link to `/`)
- Row 2: `Products` (link to `/products`)
- Row 3: `Solutions` (link to `/solutions`)
- Row 4: `Support` (link to `/support`)

**Column 3 (Tools/Actions)**
- Row 1: `Contact Sales` (link to `/contact`, make it **bold**)
- Row 2: `Get Support` (link to `/support`, make it **bold**)
- Row 3: `Sign In` (link to `/signin`, make it **bold**)
- Row 4: Leave empty

### 5. Expected Table Structure
Your table should look like this in da.live:

| Column 1 | Column 2 | Column 3 |
|----------|----------|----------|
| Pearson (link) | Home (link) | **Contact Sales** (link) |
| | Products (link) | **Get Support** (link) |
| | Solutions (link) | **Sign In** (link) |
| | Support (link) | |

### 6. Format the Links
For each link:
1. Select the text
2. Click the link button (🔗)
3. Enter the URL path (e.g., `/products`)

### 7. Make Column 3 Links Bold
1. Select "Contact Sales"
2. Click **B** (Bold button)
3. Repeat for "Get Support" and "Sign In"

### 8. Save and Preview
- da.live auto-saves
- Wait a few seconds for sync
- Click "Preview" button in da.live
- Or visit: https://main--sanbox-horizon--premkumars7.aem.page/

### 9. Verify Header Renders
The header should now show:
- **Left**: Pearson logo/link
- **Center**: Home, Products, Solutions, Support links
- **Right**: Bold buttons for Contact Sales, Get Support, Sign In

## How header.js Processes This Table

The `header.js` (from AEM boilerplate) processes /nav tables as follows:

```javascript
// Column assignments
const classes = ['brand', 'sections', 'tools'];

// Column 1 (.brand) → Left side of header
// Column 2 (.sections) → Center navigation
// Column 3 (.tools) → Right side buttons
```

**Bold links automatically become buttons** with special styling.

## Troubleshooting

### Header still empty?
1. Check da.live editor - ensure it's a **TABLE**, not paragraphs
2. Clear browser cache: Cmd+Shift+R (hard reload)
3. Wait 30 seconds for da.live sync
4. Check /nav.plain.html: https://main--sanbox-horizon--premkumars7.aem.page/nav.plain.html
   - Should show `<table>` tags, not `<p>` tags

### Table not showing in da.live editor?
1. Make sure you selected "Table" from Insert menu
2. Don't paste from external sources - build table manually in da.live
3. If stuck, delete everything and start fresh

### Links not working?
1. Use **relative paths** starting with `/` (e.g., `/products`)
2. Don't use full URLs like `https://...`
3. Make sure link text is inside table cells

## Alternative: Copy from Git

If the visual editor is problematic, you can:

1. Copy the markdown table from `/Users/VSolaPr/Documents/Work/Repos/aem/sanbox-horizon/nav.md`
2. In da.live, switch to "Source" view (if available)
3. Paste the markdown directly
4. Switch back to visual editor
5. Verify table renders correctly

**Warning**: da.live may not have a "Source" view. If not, you must use the visual table editor.

## Expected Result

Once fixed, your homepage should display:
- ✅ Pearson header with navigation
- ✅ Hero section with search bar
- ✅ 3 customer-centric cards with yellow buttons
- ✅ Complete Pearson branding

## Next Steps After Header Works

Once `/nav` is rendering correctly:
1. Verify complete homepage matches `docs/layout/images/homepage.png`
2. Run PageSpeed Insights
3. Create PR to main branch
4. Plan footer content
5. Consider Configuration Service migration (separate task)
