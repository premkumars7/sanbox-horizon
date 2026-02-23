/**
 * Decorates the content-tile block with Pearson styling
 * Expected structure:
 * - Row 1: Image
 * - Row 2: Heading (H2 or H3)
 * - Row 3: Description text
 * - Row 4: CTA button link
 * @param {Element} block The content-tile block element
 */
export default function decorate(block) {
  const rows = [...block.children];

  // Determine if image should be on right (default: left)
  const imageRight = block.classList.contains('image-right');

  // Extract content from rows
  const imageRow = rows[0];
  const headingRow = rows[1];
  const descriptionRow = rows[2];
  const buttonRow = rows[3];

  // Create figure container for image
  const figure = document.createElement('div');
  figure.className = 'content-tile-figure';

  if (imageRow) {
    const picture = imageRow.querySelector('picture');
    const img = imageRow.querySelector('img');
    if (picture) {
      figure.appendChild(picture);
    } else if (img) {
      figure.appendChild(img);
    }
  }

  // Create figcaption for text content
  const figcaption = document.createElement('div');
  figcaption.className = 'content-tile-figcaption';

  if (headingRow) {
    const heading = headingRow.querySelector('h1, h2, h3, h4, h5, h6, p');
    if (heading) {
      // Convert to h2 if it's a paragraph
      if (heading.tagName === 'P') {
        const h2 = document.createElement('h2');
        h2.className = 'content-tile-title';
        h2.textContent = heading.textContent;
        figcaption.appendChild(h2);
      } else {
        heading.className = 'content-tile-title';
        figcaption.appendChild(heading);
      }
    }
  }

  if (descriptionRow) {
    const description = document.createElement('div');
    description.className = 'content-tile-text';
    description.innerHTML = descriptionRow.innerHTML;
    figcaption.appendChild(description);
  }

  if (buttonRow) {
    const link = buttonRow.querySelector('a');
    if (link) {
      link.className = 'button primary';
      const buttonContainer = document.createElement('div');
      buttonContainer.className = 'content-tile-button';
      buttonContainer.appendChild(link);
      figcaption.appendChild(buttonContainer);
    }
  }

  // Clear block and rebuild
  block.innerHTML = '';

  // Create container
  const container = document.createElement('div');
  container.className = 'content-tile-container';

  // Add figure and figcaption in correct order
  if (imageRight) {
    container.appendChild(figcaption);
    container.appendChild(figure);
    block.classList.add('image-right');
  } else {
    container.appendChild(figure);
    container.appendChild(figcaption);
  }

  block.appendChild(container);
}
