# Navigation Setup Guide

## Creating the Header Navigation in da.live

The header block loads its content from a separate document called `/nav`.

### Step 1: Create nav Document in da.live

1. Go to da.live editor: https://da.live/edit/premkumars7/sanbox-horizon/main
2. Click "New Document"
3. Name it: `nav` (exactly this name, no extension)
4. Click Create

### Step 2: Add Navigation Content

The nav structure has **3 columns** (sections):

```
| Brand (Column 1) | Navigation (Column 2) | Tools (Column 3) |
```

Create a table with **1 row, 3 columns**:

#### Column 1: Brand/Logo
- **Pearson** (make it a link to `/`)
- OR add Pearson logo image and link it to `/`

#### Column 2: Main Navigation
Create a list:
- Home (link to `/`)
- Products (link to `/products`)
- Solutions (link to `/solutions`)
- Support (link to `/support`)

For dropdown menus, create nested lists:
```
- Products
  - Higher Education
  - K-12
  - Professional
```

#### Column 3: Utility Links
- **Contact Sales** (make it bold + link to `/contact`)
- **Get Support** (make it bold + link to `/support`)
- Sign In (plain link to `/signin`)

### Example Structure in da.live

Create this table (DO NOT put "Column 1/2/3" in the actual content):

| Column 1 | Column 2 | Column 3 |
|----------|----------|----------|
| [Pearson](#/) | - [Home](#/)<br>- [Products](#/products)<br>- [Solutions](#/solutions)<br>- [Support](#/support) | - **[Contact Sales](#/contact)**<br>- **[Get Support](#/support)**<br>- [Sign In](#/signin) |

### Visual Result

**Desktop:**
```
┌─────────────────────────────────────────────────────────────┐
│ Pearson   Home  Products  Solutions  Support   [Contact] [Support] Sign In │
└─────────────────────────────────────────────────────────────┘
```

**Mobile:**
```
┌─────────────────────┐
│ ☰  Pearson          │
└─────────────────────┘
(Hamburger menu expands to show all links)
```

## Logo Setup

### Option 1: Text Logo (Simple)
Just type "Pearson" and link it to `/`

### Option 2: Image Logo
1. Upload Pearson logo to da.live (as an image)
2. Insert image in Column 1
3. Select image and add link to `/`

## Styling

The header CSS is already configured with Pearson branding:
- Dark blue background: `#0d004d`
- White text
- Yellow accent for buttons
- Responsive mobile menu

No code changes needed - just create the `/nav` document!

## Testing

1. Create `/nav` in da.live
2. Click Preview on both `index` and `nav` documents
3. Reload homepage: https://main--sanbox-horizon--premkumars7.aem.page/
4. Header should appear with logo and navigation

## Troubleshooting

### Header not showing?
- Make sure document is named exactly `nav` (no `/nav`, just `nav`)
- Click Preview button in da.live after saving
- Wait 5-10 seconds for content sync
- Hard refresh the page (Ctrl/Cmd + Shift + R)

### Logo not appearing?
- Make sure image is uploaded and inserted
- Check that image is linked to `/`
- Verify image loads in da.live preview

### Navigation links not working?
- Make sure links are actual hyperlinks (use Edit Link button)
- Links should start with `/` for internal pages
- Bold text (`**text**`) for buttons in Column 3
