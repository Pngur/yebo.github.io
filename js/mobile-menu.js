const burgerButton = document.querySelector('.mobile-row__burger-icon');
const mobileMenu = document.querySelector('.navigation');

burgerButton.addEventListener('click', function() {
   mobileMenu.classList.toggle('toggle-js');
});

burgerButton.addEventListener('click', function() {
   if (this.classList.contains('mobile-row__burger-icon')) {
      this.classList.remove('mobile-row__burger-icon'); 
      this.classList.add('mobile-row__cross-icon'); 
   } else {
      this.classList.remove('mobile-row__cross-icon'); 
      this.classList.add('mobile-row__burger-icon'); 
   }
});
