let nav = document.querySelector('nav');
let mobile_nav = document.querySelector('.mobile-nav');
let menu_icon = document.querySelector('.menu-icon');
let menu_close = document.querySelector('.menu-close');
let mobile_nav_container = document.querySelector('.mobile-menu-container');

window.addEventListener('scroll', () =>{
    if(window.pageYOffset > 60){
        nav.classList.add('scrolled');
        mobile_nav.classList.add('scrolled');
    }else{
        nav.classList.remove('scrolled');
        mobile_nav.classList.remove('scrolled');
    }
});

menu_icon.addEventListener('click', () => {
    mobile_nav_container.classList.add('active');
});

menu_close.addEventListener('click', () => {
    mobile_nav_container.classList.remove('active');
});