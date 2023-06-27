import { galleryItems } from './gallery-items.js';

// Створення і рендер розмітки на підставі масиву даних galleryItems і наданого шаблону елемента галереї.
function createGalleryMarkup() {
    const galleryList = document.querySelector('.gallery');

    const galleryMarkup = galleryItems
        .map(
            ({ preview, original, description }) =>
                `<li class="gallery__item">
           <a class="gallery__link" href="${original}">
             <img class="gallery__image" src="${preview}" alt="${description}" />
           </a>
         </li>`
        )
        .join('');

    galleryList.innerHTML = galleryMarkup;
}

createGalleryMarkup();

const gallery = new SimpleLightbox('.gallery a', {
    captions: true, // Включення підписів до зображень
    captionPosition: 'bottom', // Позиція підпису (низ)
    captionDelay: 250, // Затримка відображення підпису після відкриття зображення (в мілісекундах)
    captionsData: 'alt', // Використовувати значення атрибута alt як підпис
});


