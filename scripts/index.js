const performanceBlock = document.querySelector('.performance');
const headerPerformance = document.querySelector('.performance__header');
const boxPerformance = document.querySelector('.performance__box');
let boxPerformanceNumber = document.querySelectorAll('.performance__box').length
console.log(boxPerformanceNumber)

function changePerformanceBlock() {
  performanceBlock.classList.remove('performance_number_one');
  performanceBlock.classList.remove('performance_number_two');
  headerPerformance.classList.remove('performance__header_number_two');
  headerPerformance.classList.remove('performance__header_number_one');
  boxPerformance.classList.remove('performance__box_number_two');
  boxPerformance.classList.remove('performance__box_number_one');

  if (boxPerformanceNumber === 2) {
    headerPerformance.classList.add('performance__header_number_two');
    boxPerformance.classList.add('performance__box_number_two');
    performanceBlock.classList.add('performance_number_two');
  } else
    if (boxPerformanceNumber === 1) {
      headerPerformance.classList.add('performance__header_number_one');
      boxPerformance.classList.add('performance__box_number_one');
      performanceBlock.classList.add('performance_number_one');
    }
}

changePerformanceBlock()
