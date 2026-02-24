Build Full-Width Content-Tile Component (Image Left, Text Right) – Pearson Style

Create a content-tile block matching Pearson’s full-width 50/50 layout (image left, text right), based on:

Live reference: https://www.pearson.com/en-gb.html

Component HTML 
<section class="column-control flex-layout--vertically-centered bgcolor--background-medium use-texture-norepeat-02 has-padding-top--30 has-padding-bottom--30 min-height--45vh aem-GridColumn aem-GridColumn--default--12">



    

    

    <div class="container">

        <div class="row"><div class="col-md-6 col-12"><div class="content-tile pad--15__figure section">

<div class="content-tile-container">
	
	
	
	
	<div class="content-tile__figure">
		
			
    

        
            
        

        <picture style="--original-image-ratio: 2">
            
            <source srcset="/content/dam/global/shared/brand/evolution/product/1600x800-etextbooksfeature.png.transform/tiny-size-xs/img.png" media="(max-width:320px)">
<source srcset="/content/dam/global/shared/brand/evolution/product/1600x800-etextbooksfeature.png.transform/tiny-size-xl/img.png" media="(max-width:480px)">
<source srcset="/content/dam/global/shared/brand/evolution/product/1600x800-etextbooksfeature.png.transform/medium-size/img.png" media="(max-width:991px)">
<source srcset="/content/dam/global/shared/brand/evolution/product/1600x800-etextbooksfeature.png.transform/big-size-xs/img.png" media="(max-width:1199px)">
<source srcset="/content/dam/global/shared/brand/evolution/product/1600x800-etextbooksfeature.png.transform/big-size-xl/img.png" media="(min-width:1200px)">

            
                
                <img loading="lazy" src="/content/dam/global/shared/brand/evolution/product/1600x800-etextbooksfeature.png" alt="" role="presentation">
            
        </picture>
    

			
		
	</div>
</div>



    

	
    

	
    


</div>
</div><div class="col-md-6 col-12"><div class="content-tile vertically-centered use-button-action pad--30__figure pad-eq-vertical--60__caption color--text-brand-01 title-typesize--h2 section">

<div class="content-tile-container">
	
	
	
	
	<div class="content-tile__figure">
		
			
			<div class="content-tile__figcaption">
				<p class="content-tile__eyebrow">Pearson+</p>
				<h2 class="content-tile__title">Take teaching &amp; learning to the next level </h2>
				
				<div class="content-tile-text rte-container"><p>Get bite sized videos and 24/7 AI help — all in one place.</p>
<p><a href="https://www.pearson.com/en-gb/higher-education/products-services/pearsonplus.html">Get Pearson+</a></p>
 </div>
			</div>
		
	</div>
</div>



    

	
    

	
    


</div>
</div></div>
    </div>

</section>

Reference screenshot: card-title-fullwidth.png


🧱 Step 1: Extract Structure from Provided HTML

Use the exact structure pattern from Pearson:

<div class="content-tile-container">
  <div class="content-tile__figure">

    <picture>
      <img src="..." alt="">
    </picture>

    <div class="content-tile__figcaption">
      <p class="content-tile__eyebrow">Pearson+</p>

      <h2 class="content-tile__title">
        Take teaching & learning to the next level
      </h2>

      <div class="content-tile-text rte-container">
        <p>Get bite sized videos and 24/7 AI help — all in one place.</p>
        <p><a href="...">Get Pearson+</a></p>
      </div>
    </div>

  </div>
</div>
Key Differences from Previous Component

Includes eyebrow text (Pearson+)

Uses CTA button styled as yellow pill

Uses purple background (brand gradient feel)

Full-width section (no max-width constraint)

Vertically centered content

🎯 Step 2: Layout Requirements
Desktop Layout

2-column layout: 50% image / 50% text

Image on left

Text on right

Vertically centered content

Mobile Layout

Stack:

Image on top

Text below

Maintain padding consistency

🎨 Step 3: Style Extraction (MANDATORY)

Use Chrome DevTools on Pearson site and extract exact values.

Layout Container

Inspect:

.content-tile-container
.content-tile__figure
.content-tile.vertically-centered

Extract:

display (flex/grid)

align-items (center)

min-height (approx 45vh)

padding top/bottom (~30px)

gap between columns

Full-Width Override (VERY IMPORTANT)

EDS sections are constrained by default.

Override:

main > .section.content-tile-container {
  max-width: unset !important;
  padding: 0 !important;
}

.content-tile-wrapper {
  padding: 0 !important;
}

Ensure component spans 100% viewport width

Image Styling
.content-tile__figure picture,
.content-tile__figure img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

Maintain aspect ratio

Image fills full height of section

Background Color

Extract exact color from site (approx):

background-color: #a9a6d6; /* verify exact */

Apply to section or container

Typography

Inspect and copy:

Eyebrow
font-size: 14px;
font-weight: 600;
text-transform: uppercase;
letter-spacing: 0.5px;
color: #1b1464;
Title
font-size: 36–48px;
font-weight: 600;
line-height: 1.2;
color: #1b1464;
Body
font-size: 16–18px;
color: #333;
line-height: 1.6;
CTA Button (Yellow Pill)

Extract styles for "Get Pearson+" button:

background-color: #ffd400;
color: #000;
border-radius: 999px;
padding: 12px 24px;
font-weight: 600;
display: inline-block;
text-decoration: none;

Hover state:

background-color: #f2c200;
🧩 Step 4: AEM EDS Block Structure
Markdown Example (Authoring)
## Pearson+
## Take teaching & learning to the next level

Get bite sized videos and 24/7 AI help — all in one place.

[Get Pearson+](https://www.pearson.com/en-gb/higher-education/products-services/pearsonplus.html)

![Pearson+](image.png)
Expected DOM Transformation

Your JS should convert to:

<div class="content-tile">
  <div class="content-tile-container">
    <div class="content-tile__figure">

      <picture>...</picture>

      <div class="content-tile__figcaption">
        ...
      </div>

    </div>
  </div>
</div>
⚙️ Step 5: JS Requirements (EDS Block)

Handle all image formats:

const picture = block.querySelector('picture') 
  || block.querySelector('img') 
  || block.querySelector('a[href$=".jpg"], a[href$=".png"]');

Wrap content:

const container = document.createElement('div');
container.className = 'content-tile-container';

const figure = document.createElement('div');
figure.className = 'content-tile__figure';

// Append image + caption
Eyebrow Handling

If first paragraph is short → treat as eyebrow:

if (firstElement.textContent.length < 30) {
  firstElement.classList.add('content-tile__eyebrow');
}
Button Conversion

Convert last link to button:

link.classList.add('content-tile__cta');
📐 Step 6: Responsive Behavior
Desktop
.content-tile__figure {
  display: grid;
  grid-template-columns: 1fr 1fr;
}
Mobile
@media (max-width: 768px) {
  .content-tile__figure {
    grid-template-columns: 1fr;
  }
}
🧪 Step 7: Testing Checklist

✅ Section spans full viewport width

✅ Image fills left half with no gaps

✅ Text vertically centered

✅ Eyebrow appears correctly

✅ Button styled as yellow pill

✅ Responsive stacking works

✅ No extra padding from AEM wrappers

✅ Works with:

<picture>

<img>

<a href="image">

⚠️ Important Rules

❗ Do NOT guess values — inspect Pearson site

❗ Always override AEM default spacing using !important

❗ Ensure block works inside EDS section system

❗ Maintain accessibility (alt text, semantic HTML)

🚀 Optional Enhancements

Support image right variant via class:

content-tile--reverse

Add gradient background

Add lazy loading for images

Add animation on scroll