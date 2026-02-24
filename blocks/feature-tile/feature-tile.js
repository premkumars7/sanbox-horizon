/**
 * Decorates the feature-tile block with Pearson full-width styling
 * Based on Pearson's 50/50 layout with eyebrow, heading, text, and CTA
 * Expected structure:
 * - Row 1: Eyebrow text (short text, becomes uppercase label)
 * - Row 2: Heading (H2)
 * - Row 3: Description text
 * - Row 4: CTA button link
 * - Row 5: Image
 * @param {Element} block The feature-tile block element
 */
export default function decorate(block) {
  const rows = [...block.children];

  // Determine if image should be on right
  const imageRight = block.classList.contains('image-right');

  // Extract content from rows
  const eyebrowRow = rows[0];
  const headingRow = rows[1];
  const descriptionRow = rows[2];
  const buttonRow = rows[3];
  const imageRow = rows[4];

  // Create figure container (holds both image and text)
  const figure = document.createElement('div');
  figure.className = 'feature-tile-figure';

  // Create image section
  const imageSection = document.createElement('div');
  imageSection.className = 'feature-tile-image';

  if (imageRow) {
    const picture = imageRow.querySelector('picture');
    const img = imageRow.querySelector('img');
    const link = imageRow.querySelector('a');

    if (picture) {
      imageSection.appendChild(picture);
    } else if (img) {
      imageSection.appendChild(img);
    } else if (link && link.href.match(/\.(jpg|jpeg|png|gif|webp|avif|svg)$/i)) {
      const newImg = document.createElement('img');
      newImg.src = link.href;
      newImg.alt = imageRow.textContent.replace(/!\[|\]\(.*\)/g, '').trim();
      newImg.loading = 'lazy';
      imageSection.appendChild(newImg);
    }
  }

  // Create figcaption for text content
  const figcaption = document.createElement('div');
  figcaption.className = 'feature-tile-figcaption';

  // Add eyebrow if exists
  if (eyebrowRow) {
    const eyebrow = document.createElement('p');
    eyebrow.className = 'feature-tile-eyebrow';
    eyebrow.textContent = eyebrowRow.textContent.trim();
    figcaption.appendChild(eyebrow);
  }

  // Add heading
  if (headingRow) {
    const heading = headingRow.querySelector('h1, h2, h3, h4, h5, h6, p');
    if (heading) {
      const h2 = document.createElement('h2');
      h2.className = 'feature-tile-title';
      h2.textContent = heading.textContent;
      figcaption.appendChild(h2);
    }
  }

  // Add description
  if (descriptionRow) {
    const description = document.createElement('div');
    description.className = 'feature-tile-text';
    description.innerHTML = descriptionRow.innerHTML;
    figcaption.appendChild(description);
  }

  // Add CTA button
  if (buttonRow) {
    const link = buttonRow.querySelector('a');
    if (link) {
      link.className = 'feature-tile-cta';
      figcaption.appendChild(link);
    }
  }

  // Clear block and rebuild
  block.innerHTML = '';

  // Create container
  const container = document.createElement('div');
  container.className = 'feature-tile-container';

  // Add image and figcaption in correct order
  if (imageRight) {
    figure.appendChild(figcaption);
    figure.appendChild(imageSection);
    block.classList.add('image-right');
  } else {
    figure.appendChild(imageSection);
    figure.appendChild(figcaption);
  }

  container.appendChild(figure);
  block.appendChild(container);
}
