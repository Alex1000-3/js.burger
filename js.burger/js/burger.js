// Меню бургер
const iconMenu = document.querySelector('.menu__icon');
const menuBody = document.querySelector('.menu__body');
if (iconMenu) {
   // собите клик по иконке
   iconMenu.addEventListener('click', function (e) {
      // мы здесь закрываем возможность прокручивать когда действет бургер
      document.body.classList.toggle('_lock')
      iconMenu.classList.toggle('_active');
      menuBody.classList.toggle('_active');
   })
}

// Прокрутка при клике 

const menuLinks = document.querySelectorAll('.menu__link[data-goto');
if (menuLinks.length > 0) {
   menuLinks.forEach(menuLinks => {
      menuLinks.addEventListener('click', onMenuLinksClisk);
   });
   function onMenuLinksClisk(e) {
      const menulink = e.target;
      if (menulink.dataset.goto && document.querySelector(menulink.dataset.goto)) {
         const gotoBlock = document.querySelector(menulink.dataset.goto);
         const gotoBlockValue = gotoBlock.getBoundingClientRect().top + pageYOffset - document.querySelector('header').offsetHeight;

         // здесь мы делем чтобы при проркуте в бургере, бургер закрывался 
         if (iconMenu.classList.contains('_active')) {
            document.body.classList.remove('_lock')
            iconMenu.classList.remove('_active');
            menuBody.classList.remove('_active');
         }

         window.scrollTo({
            top: gotoBlockValue,
            behavior: "smooth"
         });
         e.preventDefault();
      }
   }
}
