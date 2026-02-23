/**
 * Decorates the hero block with Pearson brand styling
 * Expected structure:
 * - Row 1: Background image (optional, becomes hero background)
 * - Row 2: Heading
 * - Row 3: Description (optional)
 * - Row 4: CTA buttons (optional)
 * @param {Element} block The hero block element
 */
export default async function decorate(block) {
  const rows = [...block.children];

  // Check if first row has an image or video for background
  let backgroundMedia = null;
  const firstRow = rows[0];
  if (firstRow) {
    const firstPicture = firstRow.querySelector('picture');
    const firstVideo = firstRow.querySelector('video');
    const firstLink = firstRow.querySelector('a');

    if (firstVideo) {
      // Video element exists
      backgroundMedia = firstVideo;
      rows.shift();
      firstRow.remove();
    } else if (firstPicture) {
      // Check if picture links to a video file
      if (firstLink && firstLink.href && firstLink.href.match(/\.(mp4|webm|mov)$/i)) {
        // Convert link to video element
        const video = document.createElement('video');
        video.setAttribute('autoplay', '');
        video.setAttribute('loop', '');
        video.setAttribute('muted', '');
        video.setAttribute('playsinline', '');
        video.setAttribute('poster', firstPicture.querySelector('img')?.src || '');

        const source = document.createElement('source');
        source.src = firstLink.href;
        source.type = `video/${firstLink.href.split('.').pop()}`;
        video.appendChild(source);

        backgroundMedia = video;
      } else {
        // Regular image
        backgroundMedia = firstPicture;
      }
      rows.shift();
      firstRow.remove();
    }
  }

  // Create content wrapper
  const contentWrapper = document.createElement('div');
  contentWrapper.className = 'hero-content';

  // Process each remaining row
  rows.forEach((row) => {
    const cells = [...row.children];

    if (cells.length > 0) {
      const content = cells[0];

      // Check if row contains buttons/links
      const links = content.querySelectorAll('a');
      if (links.length > 0) {
        const buttonContainer = document.createElement('div');
        buttonContainer.className = 'button-container';

        links.forEach((link, linkIndex) => {
          link.className = linkIndex === 0 ? 'button primary' : 'button secondary';
          buttonContainer.appendChild(link.cloneNode(true));
        });

        contentWrapper.appendChild(buttonContainer);
      } else {
        // Regular content (heading or paragraph)
        contentWrapper.appendChild(content.cloneNode(true));
      }
    }

    row.remove();
  });

  // Add search bar for hero-with-search or with-search variant
  // Supports both "Hero (with-search)" and "Hero (with search)" in da.live
  if (block.classList.contains('hero-with-search') || block.classList.contains('with-search')) {
    const searchForm = document.createElement('form');
    searchForm.className = 'hero-search';
    searchForm.setAttribute('role', 'search');
    searchForm.innerHTML = `
      <input type="search" 
             placeholder="What can I help you find?" 
             aria-label="Search" 
             name="q">
      <button type="submit" aria-label="Search">
        <span class="search-icon">🔍</span>
      </button>
    `;

    // Add form submit handler
    searchForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const searchTerm = searchForm.querySelector('input').value;
      if (searchTerm) {
        // Redirect to search results page
        window.location.href = `/search?q=${encodeURIComponent(searchTerm)}`;
      }
    });

    contentWrapper.appendChild(searchForm);
  }

  // Add background media (image or video) if exists
  if (backgroundMedia) {
    const bgWrapper = document.createElement('div');
    bgWrapper.className = 'hero-background';
    backgroundMedia.classList.add('hero-background-media');
    bgWrapper.appendChild(backgroundMedia);
    block.appendChild(bgWrapper);
  }

  // Add content wrapper to block
  block.appendChild(contentWrapper);
}
