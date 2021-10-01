const performanceBlock = document.querySelector('.performance');
const headerPerformance = document.querySelector('.performance__header');
const boxPerformance = document.querySelector('.performance__box');
const boxPerformanceNumber = document.querySelectorAll('.performance__box').length;
//находим элемент body
const bodyElement = document.querySelector('.page');
//находим заголовок
const titleVideoElement = bodyElement.querySelector('.video__title ');
//находим контейнер с видео
const videoContainer = bodyElement.querySelector('.video__iframes');
//находим блок с видео
const videoElements = bodyElement.querySelectorAll('.video__iframe');

console.log(boxPerformanceNumber)


// function changePerformanceBlock() {
//   performanceBlock.classList.remove('performance_number_one');
//   performanceBlock.classList.remove('performance_number_two');
//   headerPerformance.classList.remove('performance__header_number_two');
//   headerPerformance.classList.remove('performance__header_number_one');
//   boxPerformance.classList.remove('performance__box_number_two');
//   boxPerformance.classList.remove('performance__box_number_one');

//   if (boxPerformanceNumber === 2) {
//     headerPerformance.classList.add('performance__header_number_two');
//     boxPerformance.classList.add('performance__box_number_two');
//     performanceBlock.classList.add('performance_number_two');
//   } else
//     if (boxPerformanceNumber === 1) {
//       headerPerformance.classList.add('performance__header_number_one');
//       boxPerformance.classList.add('performance__box_number_one');
//       performanceBlock.classList.add('performance_number_one');
//     }
// }

// changePerformanceBlock()

// function changVideoBlock() {
//   if (videoElements.length === 1) {
//     titleVideoElement.classList.add('video__title_number_one');
//     videoContainer.classList.add('video__iframes_number_one');
//     videoElements.forEach((element) => {
//       element.classList.add('video__iframe_number_one');
//     })
//   } else if (videoElements.length === 2) {
//     titleVideoElement.classList.add('video__title_number_two');
//     videoContainer.classList.add('video__iframes_number_two');
//     videoElements.forEach((element) => {
//       element.classList.add('video__iframe_number_two');
//     })
//   } else if (videoElements.length === 3) {
//     titleVideoElement.classList.add('video__title_number_three');
//     videoContainer.classList.add('video__iframes_number_three');
//     videoElements.forEach((element) => {
//       element.classList.add('video__iframe_number_three');
//     })
//   };
// }

// changVideoBlock();

// закрытие поп-апа
function closePopup(popup) {
  popup.classList.remove('popup_condition_opened');
}
// открытие поп-апа
function openPopup(popup) {
  popup.classList.add('popup_condition_opened');
}
let popupElement = document.querySelector('.popup');
let popupPhoto = popupElement.querySelector('.popup__photo');
// событие закрытия поп-апа
document.querySelector('.popup_position_top-right').addEventListener('click', function () {closePopup(popupElement)})
// событие при нажатии на картинку
document.querySelectorAll('.photo-grid__image').forEach(imageElement =>
  imageElement.addEventListener('click', function () {
    popupPhoto.src = imageElement.src;
    openPopup(popupElement);
  }))
