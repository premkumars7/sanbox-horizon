# How to Import AI-Generated Content into da.live

## Files Created
- `content-index.tsv` - Homepage content (hero + cards)
- `content-nav.tsv` - Navigation structure

## Import Steps

### 1. Open Content Files in Excel/Numbers
```bash
# macOS - will open in Numbers
open content-index.tsv
open content-nav.tsv
```

### 2. Import to da.live

#### For Homepage (content-index.tsv):
1. Open https://da.live/edit/premkumars7/sanbox-horizon/main
2. Click "New" → "Document" → Name it **exactly** `index`
3. Open the document in da.live
4. Open `content-index.tsv` in Excel/Numbers
5. Select ALL cells in Excel (Cmd+A)
6. Copy (Cmd+C)
7. In da.live, click in the document area
8. Paste (Cmd+V)
9. **IMPORTANT**: Select first row "Hero (with search)" → Click "Merge cells" button
10. **IMPORTANT**: Select row "Cards (customer-centric)" → Click "Merge cells" button
11. **IMPORTANT**: In cards section, make button links BOLD:
    - Select "Visit our eStore" text → Cmd+B (bold)
    - Select "Book Now" text → Cmd+B (bold)
    - Select "Enroll Now" text → Cmd+B (bold)
12. Click "Preview" button
13. Open preview URL: https://main--sanbox-horizon--premkumars7.aem.page/

#### For Navigation (content-nav.tsv):
1. In da.live, click "New" → "Document" → Name it **exactly** `nav`
2. Open the document in da.live
3. Open `content-nav.tsv` in Excel/Numbers
4. Select ALL cells (Cmd+A)
5. Copy (Cmd+C)
6. In da.live, paste (Cmd+V)
7. **IMPORTANT**: Make "Contact Sales", "Get Support", "Sign In" BOLD:
    - Select each text → Cmd+B
8. Click "Preview" button
9. Refresh your homepage preview

## Expected Structure

### Index Document
```
[Hero (with search)]  ← MERGED FIRST ROW
Transform Learning...
Description text
[Empty row]
[Cards (customer-centric)]  ← MERGED ROW
Card 1 heading | **Bold link** ← Makes it a button
Card 1 description | URL
Card 2 heading | **Bold link**
Card 2 description | URL
...
```

### Nav Document
```
Column 1: Brand    | Column 2: Nav Links  | Column 3: Action Buttons
Pearson + link    | Home + link          | **Contact Sales** + link (bold)
                  | Products + link      | **Get Support** + link (bold)
                  | Solutions + link     | **Sign In** + link (bold)
```

## Verification
1. Preview URL: https://main--sanbox-horizon--premkumars7.aem.page/
2. Check for:
   - ✅ Purple gradient hero with search bar
   - ✅ Three purple cards with yellow buttons
   - ✅ Header with logo and navigation
   - ✅ Yellow action buttons in header

## Troubleshooting

**Blocks not rendering?**
- Check merged first row for block names
- Verify bold formatting on button links

**Search bar missing?**
- Ensure first row says exactly "Hero (with search)" and is merged

**Cards look wrong?**
- Make sure button links are bold (**text**)
- Each card = one row with multiple columns

**Navigation missing?**
- File must be named exactly `nav` (no extension)
- Bold the action buttons in column 3
