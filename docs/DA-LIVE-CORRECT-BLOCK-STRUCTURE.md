# ✅ CORRECT Block Structure in da.live

## 🔑 Key Rule from Official Documentation

> **"Regardless of site, the structure of a block is always the same: it is a table with a merged first row that serves as the block name (header row)."**
> 
> Source: https://www.aem.live/docs/authoring

## ❌ What We Were Doing WRONG

We were creating tables with the block name as text in a cell, NOT as a merged header row.

**Wrong Structure:**
```
| hero-with-search          |  ← This is just text in a cell, NOT a block name!
| Where learning comes to life |
| Explore learning...       |
```

## ✅ CORRECT Structure

### Step-by-Step in da.live:

1. **Insert a Table**
   - Click "Block" button in da.live toolbar
   - Or insert table manually

2. **Create the Block Name (MERGED FIRST ROW)**
   - Select ALL cells in the first row
   - **Merge the cells** (right-click → "Merge cells" or use table formatting)
   - Type the block name: `Hero` or `Hero (with search)`
   - This merged row is the BLOCK NAME

3. **Add Content Rows Below**
   - Row 2: Where learning comes to life
   - Row 3: Explore learning for every stage of life with Pearson.

### Visual Structure:

```
┌─────────────────────────────────────┐
│ Hero (with search)                  │  ← MERGED FIRST ROW = Block Name
├─────────────────────────────────────┤
│ Where learning comes to life        │  ← Content Row 1
├─────────────────────────────────────┤
│ Explore learning for every stage... │  ← Content Row 2
└─────────────────────────────────────┘
```

## 📋 Hero Block - Correct da.live Setup

**Table Structure:**
- **Merged First Row:** `Hero (with search)`
- **Row 1 Content:** Where learning comes to life
- **Row 2 Content:** Explore learning for every stage of life with Pearson.

### How to Create:

1. Click "Block" button in da.live
2. Select "Hero" from block library (if available)
3. OR manually:
   - Insert table: 1 column, 3 rows
   - Select first row, merge all cells
   - Type in merged row: `Hero (with search)`
   - Add content in rows 2 and 3

## 📋 Cards Block - Correct da.live Setup

**Table Structure:**
- **Merged First Row:** `Cards (customer-centric)`
- **Row 1:** Card 1 heading | Card 2 heading | Card 3 heading
- **Row 2:** Card 1 button link | Card 2 button link | Card 3 button link

### Visual Structure:

```
┌───────────────────────────────────────────────────────────────┐
│ Cards (customer-centric)                                      │  ← MERGED
├──────────────────────┬──────────────────────┬─────────────────┤
│ Looking to make a    │ Looking to schedule  │ Looking to      │
│ purchase?            │ an exam or test?     │ Enroll in       │
│                      │                      │ Virtual School? │
├──────────────────────┼──────────────────────┼─────────────────┤
│ Visit our eStore     │ Book Now             │ Enroll Now      │
│ (formatted as button)│ (formatted as button)│ (formatted as   │
│                      │                      │ button)         │
└──────────────────────┴──────────────────────┴─────────────────┘
```

### How to Create:

1. Insert table: 3 columns, 3 rows
2. **Select ALL 3 cells in first row**
3. **Merge them** → Right-click → Merge cells
4. Type in merged row: `Cards (customer-centric)`
5. Add card headings in row 2
6. Add button links in row 3
7. Format links as buttons using da.live's formatting

## 🎯 Block Variants

Use parentheses for variants in the merged first row:

- `Hero (with search)` → becomes class `hero hero-with-search`
- `Cards (customer-centric)` → becomes class `cards cards-customer-centric`
- `Columns (highlight)` → becomes class `columns columns-highlight`

## 🚀 After Creating Blocks

1. **Save** the document
2. Click **Preview** button in da.live
3. Wait 5-10 seconds for content sync
4. Reload preview page: https://main--sanbox-horizon--premkumars7.aem.page/
5. Verify blocks are rendering with purple styling

## 🔧 Troubleshooting

### Block not showing up?
- ✅ Check: Is the first row MERGED?
- ✅ Check: Does the block name match your code? (hero, cards, etc.)
- ✅ Check: Did you click Preview in da.live after changes?

### Content showing as plain text?
- ❌ Problem: First row is NOT merged
- ✅ Solution: Select all cells in first row, merge them, add block name

### Wrong variant class?
- ✅ Use parentheses: `Hero (with search)` not `Hero-with-search`
- ✅ Case doesn't matter: `Hero` or `hero` both work

## 📚 Official Resources

- [AEM Authoring Documentation](https://www.aem.live/docs/authoring)
- [Block Collection](https://www.aem.live/developer/block-collection)
- [Sidekick Library](https://www.aem.live/docs/sidekick-library)

---

**Remember:** The MERGED FIRST ROW is the magic that tells AEM.live "this is a block!"
