const menu = document.querySelector('#mobile-menu');
const menuLinks = document.querySelector('.navbar__menu');
const navlogo = document.querySelector('#navbar__logo');

// display mobile menu
const mobileMenu = () => {
    menu.classList.toggle('is-active');
    menuLinks.classList.toggle('active');
};

menu.addEventListener('click', mobileMenu);

const Menu = () => {
    const element = document.querySelector('.highlight');
    const Home = document.querySelector('#home-page');
    const about = document.querySelector('#about-page');
    const serv = document.querySelector('services-page');
    let scroll = window.scrollY;

     if(window.innerWidth > 960 && scrollPos < 600){
         Home.classList.add('higlight');
         about.classList.remove('highlight');
         return;
     }
     else if(window.innerWidth > 960 && scrollPos < 1400){
         about.classList.add('highlight');
         Home.classList.remove('highlight');
         serv.classList.remove('highlight');
         return;
     }
     else if(window.innerWidth > 960 && scrollPos < 2345){
        serv.classList.add('highlight');
        about.classList.remove('highlight');
        return;
    }
    if (element && window.innerWidth < 960 && scrollPos <600 || element){
        element.classList.remove('highlight');
    }
     
};

window.addEventListener('scroll',Menu);
window.addEventListener('scroll',Menu);

const MobileMenu = () => {
    const menuBars = document.querySelector('.is-active');
    if (window.innerWidth <= 768 && menuBars) {
      menu.classList.toggle('is-active');
      menuLinks.classList.remove('active');
    }
  };
  
  menuLinks.addEventListener('click', MobileMenu);
  navLogo.addEventListener('click', MobileMenu);