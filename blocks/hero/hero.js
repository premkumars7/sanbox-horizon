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
    } else if (firstLink && firstLink.href && firstLink.href.match(/\.(mp4|webm|mov)$/i)) {
      // Link to video file - create video element
      const video = document.createElement('video');
      video.setAttribute('autoplay', 'autoplay');
      video.setAttribute('loop', 'loop');
      video.setAttribute('muted', 'muted');
      video.setAttribute('playsinline', 'playsinline');
      video.setAttribute('crossorigin', 'anonymous');
      video.muted = true; // Ensure muted for autoplay

      // Use associated image as poster if available
      if (firstPicture) {
        video.setAttribute('poster', firstPicture.querySelector('img')?.src || '');
      }

      const source = document.createElement('source');
      source.src = firstLink.href;
      source.type = `video/${firstLink.href.split('.').pop()}`;
      video.appendChild(source);

      // Force play after load
      video.addEventListener('loadeddata', () => {
        video.play().catch(() => {
          // Autoplay failed, video will show poster
        });
      });

      backgroundMedia = video;
      rows.shift();
      firstRow.remove();
    } else if (firstPicture) {
      // Regular image
      backgroundMedia = firstPicture;
      rows.shift();
      firstRow.remove();
    }
  }

  // Create content wrapper
  const contentWrapper = document.createElement('div');
  contentWrapper.className = 'hero-content';

  // Create cards container (for multi-column rows)
  const cardsContainer = document.createElement('div');
  cardsContainer.className = 'hero-cards';

  // Process each remaining row
  rows.forEach((row) => {
    const cells = [...row.children];

    // Check if row has multiple columns (card layout)
    if (cells.length > 1) {
      // Multi-column row = cards
      cells.forEach((cell) => {
        const card = document.createElement('div');
        card.className = 'hero-card';
        card.innerHTML = cell.innerHTML;
        cardsContainer.appendChild(card);
      });
    } else if (cells.length > 0) {
      const content = cells[0];

      // Check if row contains buttons/links
      const links = content.querySelectorAll('a');
      if (links.length > 0 && links.length <= 2) {
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

  // Add search bar to hero
  const searchDiv = document.createElement('div');
  searchDiv.className = 'hero-search';

  const searchForm = document.createElement('form');
  searchForm.setAttribute('role', 'search');
  searchForm.innerHTML = `
    <input type="search" 
           placeholder="What can I help you find?" 
           aria-label="Search" 
           name="q">
    <button type="submit" aria-label="Search"></button>
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

  searchDiv.appendChild(searchForm);
  contentWrapper.appendChild(searchDiv);

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

  // Add cards if any exist
  if (cardsContainer.children.length > 0) {
    block.appendChild(cardsContainer);
  }
}
