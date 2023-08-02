let menuBtn = document.querySelector('.menu_btn');
let menu = document.querySelector('.navigation')
menuBtn.addEventListener('click', function(){
  menuBtn.classList.toggle('active');
  menu.classList.toggle('active');
}
);