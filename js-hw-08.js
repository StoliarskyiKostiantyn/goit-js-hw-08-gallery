import galleryItems from "./gallery-items.js";
const gallery_list = document.querySelector(".js-gallery");
const lightboxEl = document.querySelector(".js-lightbox");
const ligthboxImg = document.querySelector(".lightbox__image");
const makeGallaryItemMarkup = ({ preview, description }) => {
  return `
    <li class="gallery__item"><a class="gallery__link"><img  class="gallery__image" src="${preview}" alt="${description}"></a></li>
    `;
};
const makeGallaryMarkup = galleryItems.map(makeGallaryItemMarkup).join("");
gallery_list.insertAdjacentHTML("afterbegin", makeGallaryMarkup);
gallery_list.addEventListener("click", onImgClick);
function onImgClick(evt) {
  if (evt.target.nodeName !== "IMG") {
    return;
  }
  lightboxEl.classList.add("is-open");
  ligthboxImg.src = evt.target.src;
  console.log(evt.target.nodeName);
}
