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

// Додавання прослуховувача на клік по елементу галереї
document.querySelector('.gallery').addEventListener('click', openModal);

// Відкриття модального вікна по кліку на елементі галереї
function openModal(event) {
    event.preventDefault();

    if (!event.target.classList.contains('gallery__image')) {
        return;
    }

    const largeImageURL = event.target.parentNode.getAttribute('href');
    const instance = basicLightbox.create(`<img src="${largeImageURL}" />`, {
        onClose: () => {
            document.removeEventListener('keydown', handleKeyPress);
        },
    });

    instance.show();
    // Додавання прослуховувача на клік по ESC
    document.addEventListener('keydown', handleKeyPress);

    function handleKeyPress(event) {
        if (event.code === 'Escape') {
            instance.close();
        }
    }
}

// Виклик функції для створення галереї
createGalleryMarkup();
