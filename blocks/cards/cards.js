import { createOptimizedPicture } from '../../scripts/aem.js';

/**
 * Decorates cards block
 * 
 * Content structure in da.live:
 * - Each ROW becomes one card
 * - Each CELL in a row becomes content within the card
 * 
 * Card anatomy (cells in one row):
 * - Cell with picture → card image
 * - Cell with heading (h1-h6) → card title
 * - Cell with paragraph → card description
 * - Cell with link wrapped in strong/em → button
 * - Cell with plain link → text link
 * 
 * Example in da.live:
 * Row 1: [Image] | [Heading] | [Description] | [Strong Link]
 * Row 2: [Heading] | [Description] | [Link]
 * Row 3: [Heading] | [Strong Link]
 */
export default function decorate(block) {
  const ul = document.createElement('ul');
  
  [...block.children].forEach((row) => {
    const li = document.createElement('li');
    
    [...row.children].forEach((cell) => {
      const div = document.createElement('div');
      
      // Check what type of content this cell has
      const picture = cell.querySelector('picture');
      const heading = cell.querySelector('h1, h2, h3, h4, h5, h6');
      const link = cell.querySelector('a');
      const strong = cell.querySelector('strong');
      const em = cell.querySelector('em');
      
      if (picture) {
        // Image cell
        div.className = 'cards-card-image';
        div.appendChild(picture);
      } else if (link && (strong || em)) {
        // Button cell (link wrapped in strong or em)
        div.className = 'cards-card-body';
        link.className = 'button';
        div.appendChild(link);
      } else if (heading) {
        // Heading cell
        div.className = 'cards-card-body';
        const h3 = document.createElement('h3');
        h3.innerHTML = cell.innerHTML;
        div.appendChild(h3);
      } else {
        // Regular content cell
        div.className = 'cards-card-body';
        div.innerHTML = cell.innerHTML;
      }
      
      li.appendChild(div);
    });
    
    ul.append(li);
  });
  
  // Optimize images
  ul.querySelectorAll('picture > img').forEach((img) => {
    img.closest('picture').replaceWith(
      createOptimizedPicture(img.src, img.alt, false, [{ width: '750' }])
    );
  });
  
  block.replaceChildren(ul);
}
