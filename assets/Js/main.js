const menu_btn = document.querySelector('.hamburger');
const mobile_view = document.querySelector('.mobile-menu');

menu_btn.addEventListener('click', function (){
    menu_btn.classList.toggle('is-active');
    mobile_view.classList.toggle('is-active');
});