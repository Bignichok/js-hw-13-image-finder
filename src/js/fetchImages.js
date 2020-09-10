import renderCards from './renderCards';
import apiService from './apiService';
import * as basicLightbox from 'basiclightbox';
import { loadMore, spinner } from './refs';

function imageHandler(e) {
  const target = e.target;
  const bigUrl = target.dataset.url;
  const instance = basicLightbox.create(`
    <img src="${bigUrl}" width="800" height="600">
`);
  instance.show();
} //modal

function restPagination() {
  loadMore.classList.remove('is-hidden'); //показываем кнопку
  const imagesForModal = document.querySelectorAll('.image-wrp__image'); // получение массива картинок
  imagesForModal.forEach(e => e.addEventListener('click', imageHandler)); // получение текущей картинки
}

function fetchImages() {
  loadMore.classList.add('is-hidden'); //прячем кнопку
  spinner.classList.remove('is-hidden'); //запускаем спиннер

  apiService
    .fetchImages()
    .then(images => {
      renderCards(images);
      restPagination();
      window.scrollTo({
        top: document.documentElement.offsetHeight, //высота документа
        behavior: 'smooth', //плавная прокрутка
      });
    })
    .finally(() => {
      spinner.classList.add('is-hidden'); //прячем спиннер
    });
}

export default fetchImages;
