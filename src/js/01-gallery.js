// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line
const gallery = document.querySelector(".gallery");
const markup = galleryItems.map(
  ({ preview, original, description }) =>
    `<li class="gallery__item">
<a class="gallery__link" href="${preview}">
  <img
    class="gallery__image"
    src="${preview}"
    data-source="${original}"
    alt="${description}"
  />
</a>
</li>`
);
gallery.insertAdjacentHTML("beforeend", markup.join(""));

gallery.addEventListener("click", onClick);
function onClick(e) {
  e.preventDefault();
  if (!e.target.classList.contains("gallery__image")) {
    return;
  }
  const largeImageSrc = e.target.dataset.source;
  const largeImageAlt = e.target.alt;

  const instance = basicLightbox.create(`
  <img
    src="${largeImageSrc}"
    alt="${largeImageAlt}"
  />
  `);
  instance.show();
  
  document.addEventListener("keydown", onEscape, { once: true });
  function onEscape(event) {
    if (event.code === "Escape") {
      instance.close();
    }
  }
}
console.log(galleryItems);
