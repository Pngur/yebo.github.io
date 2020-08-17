const allDots = document.querySelectorAll('.slider__input');
const slider = document.querySelector('.slider');
let currentSlide = 0;
showSlide(currentSlide);

slider.addEventListener('click', function(e) {
   for (let a = 0; a < allDots.length; a++) {
      e.target === allDots[a] && showSlide(a);
   }
});

function showSlide (s) {
   const allSlides = document.querySelectorAll('.social-box');
   for (let i = 0; i < allSlides.length; i++) {
      allSlides[i].classList.add('social-box--hidden');
   }
    allSlides[s].classList.remove("social-box--hidden");

   for (let d = 0; d < allDots.length; d++) {
      allDots[d].checked = false;
   }
   allDots[s].checked = true;
}





