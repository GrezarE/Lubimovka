const performanceBlock = document.querySelector('.performance');
const headerPerformance = document.querySelector('.performance__header');
const boxPerformance = document.querySelector('.performance__box');
let boxPerformanceNumber = document.querySelectorAll('.performance__box').length
console.log(boxPerformanceNumber)

function changePerformanceBlock() {
  performanceBlock.classList.remove('performance_number_one');
  performanceBlock.classList.remove('performance_number_two');
  headerPerformance.classList.remove('header_2');
  headerPerformance.classList.remove('header_1');
  boxPerformance.classList.remove('box_2');
  boxPerformance.classList.remove('box_1');

  if (boxPerformanceNumber === 2) {
    headerPerformance.classList.add('header_2');
    boxPerformance.classList.add('box_2');
    performanceBlock.classList.add('performance_number_two');
  } else
    if (boxPerformanceNumber === 1) {
      headerPerformance.classList.add('header_1');
      boxPerformance.classList.add('box_1');
      performanceBlock.classList.add('performance_number_one');
    }
  // if (boxPerformanceNumber >= 3) {
  //   performanceBlock.classList.remove('performance_number_one');
  //   performanceBlock.classList.remove('performance_number_two');
  //   headerPerformance.classList.remove('header_2');
  //   headerPerformance.classList.remove('header_1');
  //   boxPerformance.classList.remove('box_2');
  //   boxPerformance.classList.remove('box_1');
  // }

}
changePerformanceBlock()
