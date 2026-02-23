# Update Navigation in da.live

## Structure Required: 3 SECTIONS (NOT a table!)

Your `/nav` document in da.live needs **exactly 3 SECTIONS**:
- Section 1 = Brand (logo)
- Section 2 = Navigation with dropdown menus
- Section 3 = Tools (buttons and icons)

**IMPORTANT:** Do NOT use a table! Tables create only 1 child, but we need 3 children.

---

## The Section Structure

### Section 1 (Brand)
```
Pearson (link to /)
```

### Section 2 (Navigation - with nested lists for dropdowns)
```
By Customer (no link)
- K-12 Schools (/schools)
- Higher Education (/higher-ed)
- Workforce & Professional (/work)

Education Products (no link)
- Virtual Schools (/virtual-schools)
- College & Career Readiness (/college-career)
- Curriculum & Instruction (/curriculum)
- Assessment Solutions (/assessment)

Work Products (no link)
- Professional Certifications (/certifications)
- Skills Training (/skills-training)
- Workforce Development (/workforce)
```

### Section 3 (Tools)
```
Contact Sales (bold + link to /contact)
Get Support (bold + link to /support)
Sign In (bold + link to /signin)
🛒
🌍
```

---

## How to Create in da.live

1. **Open da.live editor**: https://da.live/edit/premkumars7/sanbox-horizon/main/nav

2. **Delete everything** (start fresh)

3. **Create Section 1** (Brand):
   - Type heading: `## Pearson`
   - Highlight "Pearson" → Link icon → Enter: `/`

4. **Press Enter twice** to create Section 2

5. **Create Section 2** (Navigation):
   - Type heading: `## By Customer` (no link)
   - Press Enter
   - Add bullet list: `- K-12 Schools` → Link to `/schools`
   - Add: `- Higher Education` → Link to `/higher-ed`
   - Add: `- Workforce & Professional` → Link to `/work`
   - Press Enter twice
   - Type heading: `### Education Products` (no link)
   - Add bullet lists for Education Products
   - Press Enter twice
   - Type heading: `### Work Products` (no link)
   - Add bullet lists for Work Products

6. **Press Enter twice** to create Section 3

7. **Create Section 3** (Tools):
   - Type heading: `## Contact Sales`
   - Make "Contact Sales" **bold** → Link to `/contact`
   - Press Enter
   - Add bullet: `- Get Support` → Make **bold** → Link to `/support`
   - Add bullet: `- Sign In` → Make **bold** → Link to `/signin`
   - Add bullet: `- 🛒`
   - Add bullet: `- 🌍`

---

## Key Points

✅ **3 SECTIONS** - Use heading levels (##) to create sections, NOT tables
✅ **Nested lists** (with `-` bullets) create dropdown menus automatically
✅ **Bold text** creates yellow buttons
✅ **Emojis** for icons

---

## Expected Result

Once saved and synced, your navigation will have:
- ✅ Pearson logo (left)
- ✅ "By Customer" menu that opens on hover (shows K-12, Higher Ed, Workforce)
- ✅ "Education Products" menu with dropdowns
- ✅ "Work Products" menu with dropdowns
- ✅ Three yellow buttons (Contact Sales, Get Support, Sign In)
- ✅ Cart and Geo icons (right side)

The CSS is already styled with Pearson.com design tokens - the dropdowns will appear as white popup boxes with proper spacing and hover effects!

---

## Testing

After saving in da.live:
1. Visit: `http://localhost:3000/` (if dev server running)
2. Or visit: `https://main--sanbox-horizon--premkumars7.aem.page/`
3. Hover over "By Customer", "Education Products", or "Work Products" to see dropdowns
4. Verify all buttons and icons appear correctly

---

## Notes

- The header.js already supports dropdown functionality
- No code changes needed - just update the content structure
- Dropdowns work automatically when you have nested lists (ul > li > ul)
- Icons (🛒 🌍) can be replaced with actual icon files later if needed
