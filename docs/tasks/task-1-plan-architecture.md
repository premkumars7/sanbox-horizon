# Task 1: Plan (Architecture)

## Objective
Break down the homepage into logical sections and map them to EDS blocks.

## Requirements
- Break the homepage into logical sections
- Map each section to EDS blocks
- Suggest a minimal set of reusable blocks (max 6–8)
- Identify which sections are static vs API-driven
- Identify features that should be mocked for PoC

## Constraints
- Use ONLY HTML, CSS, and vanilla JavaScript (no frameworks)
- Follow EDS block-based architecture
- Keep the solution simple, fast, and reusable

## Reference Materials
- Existing homepage: https://www.pearson.com/en-gb.html
- New design/mockup: check layout/images/homepage.png
- Existing AEM codebase available for reference

## Deliverables
- [x] Section-to-block mapping document
- [x] List of reusable blocks (max 6-8)
- [x] Identification of static vs API-driven sections
- [x] List of features to mock for PoC

## Status
✅ **Completed** - 2026-02-23

## Deliverable Files
- [Architecture Document](../architecture.md) - Complete section-to-block mapping and architecture plan

## Summary of Findings

### Recommended Blocks (6 total)
1. **header** - Global navigation and branding
2. **hero** - Large attention-grabbing sections (with video variant)
3. **cards** - Flexible grid layouts (with carousel, featured variants)
4. **columns** - Multi-column text and image layouts
5. **embed** - External content embedding (YouTube, etc.)
6. **footer** - Global site footer

### Static vs Dynamic
- **Static for PoC**: All content will be document-driven (Google Docs/Markdown)
- **API Integration**: Deferred to post-PoC phase (optional)

### Features to Mock
- Authentication/Sign-in
- Country selector
- Personalization
- Search
- Advanced analytics
- Auto-play carousel

## Notes
Architecture document includes detailed section breakdown, visual layout diagram, technical considerations, and next steps. Ready to proceed to Task 2 (Project Structure).
