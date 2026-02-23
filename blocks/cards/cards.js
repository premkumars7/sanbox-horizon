import { createOptimizedPicture } from '../../scripts/aem.js';

export default function decorate(block) {
  const isCustomerCentric = block.classList.contains('customer-centric');
  
  /* change to ul, li */
  const ul = document.createElement('ul');
  const rows = [...block.children];
  
  if (isCustomerCentric) {
    // For customer-centric variant, pair rows: heading + link = 1 card
    for (let i = 0; i < rows.length; i += 2) {
      const headingRow = rows[i];
      const linkRow = rows[i + 1];
      
      if (headingRow) {
        const li = document.createElement('li');
        
        // Add heading
        const headingDiv = document.createElement('div');
        headingDiv.className = 'cards-card-body';
        const heading = document.createElement('h3');
        heading.textContent = headingRow.textContent.trim();
        headingDiv.appendChild(heading);
        li.appendChild(headingDiv);
        
        // Add link/button if exists
        if (linkRow) {
          const linkDiv = document.createElement('div');
          linkDiv.className = 'cards-card-body';
          const link = linkRow.querySelector('a');
          if (link) {
            link.className = 'button';
            linkDiv.appendChild(link.cloneNode(true));
          } else {
            // If no link, just add the text
            linkDiv.appendChild(linkRow.firstElementChild?.cloneNode(true));
          }
          li.appendChild(linkDiv);
        }
        
        ul.append(li);
      }
    }
  } else {
    // Standard cards behavior
    rows.forEach((row) => {
      const li = document.createElement('li');
      while (row.firstElementChild) li.append(row.firstElementChild);
      [...li.children].forEach((div) => {
        if (div.children.length === 1 && div.querySelector('picture')) div.className = 'cards-card-image';
        else div.className = 'cards-card-body';
      });
      ul.append(li);
    });
  }
  
  ul.querySelectorAll('picture > img').forEach((img) => img.closest('picture').replaceWith(createOptimizedPicture(img.src, img.alt, false, [{ width: '750' }])));
  block.replaceChildren(ul);
}
