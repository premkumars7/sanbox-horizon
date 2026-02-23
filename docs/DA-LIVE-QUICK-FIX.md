# Quick Fix Guide for da.live

## Current Problem
Your da.live content has the text "Block: hero-with-search" which is just showing as plain text. The block name needs to be set as a property of the table, not written as text.

## Step-by-Step Fix:

### 1. Edit the Index Document
Go to: https://da.live/edit#/premkumars7/sanbox-horizon/index

### 2. Delete These Lines:
- Delete the text: "Block: hero-with-search"
- Delete the first table that says "columns" (the empty one)
- Delete the second table that says "columns"

### 3. Create the Hero Block Correctly:

**Insert a new table:**
1. Click the **"Block"** button in the left toolbar
2. Or use the table icon
3. Set the block name to: **`hero-with-search`** (in the properties, not as text!)

**Add content to the table (2 rows, 1 column each):**

| Row 1 |
|-------|
| **Where learning comes to life** |

| Row 2 |
|-------|
| Explore learning for every stage of life with Pearson. |

### 4. Create the Cards Block:

**Insert another table:**
1. Click the **"Block"** button
2. Set the block name to: **`cards-customer-centric`**

**Add content (2 rows, 3 columns):**

Row 1:
| Column 1 | Column 2 | Column 3 |
|----------|----------|----------|
| **Looking to make a purchase?** | **Looking to schedule an exam or test?** | **Looking to Enroll in Virtual School?** |

Row 2:
| Column 1 | Column 2 | Column 3 |
|----------|----------|----------|
| [Visit our eStore](/estore) | [Book Now](/booking) | [Enroll Now](/enroll) |

### 5. Preview & Test

Click **"Preview"** button and check:
- https://main--sanbox-horizon--premkumars7.aem.page/

You should see:
✅ Purple gradient hero with vertical light rays  
✅ Search bar with "What can I help you find?"  
✅ Three purple cards with yellow buttons  

## Key Points:

🚫 **DON'T** write "Block: hero-with-search" as text  
✅ **DO** set it as the table's block property

🚫 **DON'T** use "columns" as block name  
✅ **DO** use "hero-with-search" and "cards-customer-centric"

🚫 **DON'T** write HTML code  
✅ **DO** let the JavaScript add the search bar automatically

## Video Tutorial Reference:
Check da.live documentation for how to set block properties on tables:
https://docs.da.live/

## Need Help?
The search bar is added automatically by `/blocks/hero/hero.js` when it detects the `hero-with-search` class. You just need to make sure the table has the right block name set!
