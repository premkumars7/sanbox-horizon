Act as a senior Adobe Edge Delivery Services (EDS) architect and frontend developer.

I am building a homepage Proof of Concept (PoC) using Adobe EDS (Helix). The goal is to move from traditional AEM (HTL, Sling Models, Java) to a modern EDS approach.

IMPORTANT CONSTRAINTS:
- Use ONLY HTML, CSS, and vanilla JavaScript (no frameworks).
- Follow EDS block-based architecture.
- Content is document-driven (Google Docs or Markdown).
- No Java, HTL, Sling Models, or OSGi.
- Keep the solution simple, fast, and reusable.
- This is a PoC, but code should be production-friendly (reusable, clean, maintainable).

CONTEXT:
- Existing homepage: https://www.pearson.com/en-gb.html
- New design/mockup: check layout/images/homepage.png
- Existing AEM codebase is available for reference (content, APIs, logic).
- We may use APIs for dynamic content.

OPTIONAL APIs: (not for MVP)
- Token API: [PASTE TOKEN API]
- Content API: [PASTE CONTENT API]

GOALS:
1. Build a working homepage in EDS.
2. Create reusable blocks that can be used across pages.
3. Demonstrate authoring via document (not AEM UI).
4. Keep implementation fast and simple for demo.
5. Ensure code can be reused for production.

TASKS:

STEP 1 — PLAN (Architecture)
- Break the homepage into logical sections.
- Map each section to EDS blocks.
- Suggest a minimal set of reusable blocks (max 6–8).
- Identify which sections are static vs API-driven.
- Identify features that should be mocked for PoC.

STEP 2 — PROJECT STRUCTURE
Generate a clean EDS project structure including:
- /blocks
- /styles
- /scripts
- config files (fstab.yaml, etc.)

STEP 3 — BLOCK DESIGN
For each block:
- Define its purpose
- Define content structure (how it appears in document/markdown)
- Keep blocks generic (not page-specific)
- Ensure reusability

STEP 4 — CODE GENERATION
Generate code for each block:
- HTML structure
- CSS (scoped, responsive)
- JS (if needed, minimal and clean)
- Accessibility considerations

Blocks to include:
- hero
- cards
- columns (text + image)
- text
- footer
- header (optional)

STEP 5 — CONTENT MODEL
Generate a sample homepage in markdown format showing:
- How blocks are used
- How content is structured
- Keep it simple and realistic

STEP 6 — API INTEGRATION (if needed)
- Show how to fetch token
- Call API
- Render data in a block
- Handle loading and error states
- Keep logic modular (e.g., scripts/api.js)

STEP 7 — STYLING
- Suggest global styles (colors, typography, spacing)
- Make layout responsive
- Keep CSS clean and reusable

STEP 8 — BEST PRACTICES
- Ensure blocks are reusable across pages
- Avoid hardcoding content
- Avoid inline styles
- Keep code modular
- Follow EDS conventions

STEP 9 — DEMO READINESS
- Highlight what is sufficient for PoC
- Suggest what can be mocked
- Suggest demo flow (edit → preview → publish)

OUTPUT FORMAT:
- Section-to-block mapping
- Folder structure
- Block definitions
- Code (HTML, CSS, JS)
- Sample homepage markdown
- Notes and assumptions

IMPORTANT:
- Prioritize simplicity and speed.
- Do not overengineer.
- Make code clean enough to reuse in production.