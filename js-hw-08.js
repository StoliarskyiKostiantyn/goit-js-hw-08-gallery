import galleryItems from "./gallery-items.js";
const gallery_list = document.querySelector(".js-gallery");
const makeGallaryItemMarkup = ({ preview, description }) => {
  return `
    <li class="gallery__item"><a class="gallery__link"><img  class="gallery__image" src="${preview}" alt="${description}"></a></li>
    `;
};
const makeGallaryMarkup = galleryItems.map(makeGallaryItemMarkup).join("");
gallery_list.insertAdjacentHTML("afterbegin", makeGallaryMarkup);
