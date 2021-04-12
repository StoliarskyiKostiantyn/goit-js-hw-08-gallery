import galleryItems from "./gallery-items.js";
const gallery_list = document.querySelector(".js-gallery");
const lightboxEl = document.querySelector(".js-lightbox");
const ligthboxImg = document.querySelector(".lightbox__image");
const lightboxBtn = document.querySelector(".lightbox__button");
const makeGallaryItemMarkup = ({ preview, description, original }) => {
  return `
    <li class="gallery__item"><a class="gallery__link"><img  class="gallery__image" src="${preview}" alt="${description}" data-source="${original}"></a></li>
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
  const currentImg = galleryItems.filter((e) => e.preview === evt.target.src);
  ligthboxImg.src = currentImg[0].original;
}
lightboxBtn.addEventListener("click", onlightboxBtnClick);
function onlightboxBtnClick(evt) {
  lightboxEl.classList.remove("is-open");
  ligthboxImg.src = "";
}
