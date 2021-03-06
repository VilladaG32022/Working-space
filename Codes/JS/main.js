/**/
/*=============== CHANGE BACKGROUND HEADER ===============*/
const scrollHeader = () =>{
  const header = document.getElementById('header')
  // When the scroll is greater than 50 viewport height, add the scroll-header class to the header tag
  this.scrollY >= 50 ? header.classList.add('scroll-header') 
                     : header.classList.remove('scroll-header')
}
window.addEventListener('scroll', scrollHeader)

/*=============== SWIPER ===============*/
let swiper = new Swiper(".mySwiper", {
  spaceBetween: 24,
  loop: true,
  grabCursor: true,

  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },

  breakpoints: {
    576: {
      slidesPerView: 2,
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 48,
    },
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

let swipervolunteering = new Swiper(".mySwipervolunteering", {
  spaceBetween: 24,
  loop: true,
  grabCursor: true,

  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },

  breakpoints: {
    576: {
      slidesPerView: 2,
    },
    768: {
      slidesPerView: 1,
      spaceBetween: 48,
    },
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});




/*=============== NAV ANIMATION ===============*/


const navIcons = document.querySelectorAll('.nav__icon');
const navLinks = document.querySelectorAll('.nav__link');
const navItems = document.querySelectorAll('.nav__item');

const addListeners = (item, icon, link) => {
  const navIcon = document.getElementById(icon);
  const navLink = document.getElementById(link);

  
  navIcon.addEventListener('mouseover', () =>{
    navLink.classList.remove('nav__link-hidden')
    navLink.classList.add('animate__animated','animate__bounceIn')
  })
  navIcon.addEventListener('mouseout', () =>{
    navLink.classList.add('nav__link-hidden')
    navLink.classList.remove('animate__animated','animate__bounceIn')
  })
  
  navLink.addEventListener('mouseover', () =>{
    navLink.classList.remove('nav__link-hidden')
  })
  navLink.addEventListener('mouseout', () =>{
    navLink.classList.add('nav__link-hidden')
  })
}

navIcons.forEach((ni) =>{
  switch (ni.id) {
    case 'icon-home':
      addListeners('item-home', 'icon-home', 'link-home')
      break;
    case 'icon-about':
      addListeners('item-about', 'icon-about', 'link-about')
      break;
    case 'icon-volunteering':
      addListeners('item-volunteering', 'icon-volunteering', 'link-volunteering')
      break;
    case 'icon-update':
      addListeners('item-update', 'icon-update', 'link-update')
      break;
    }
  }
)



/*=============== SHOW SCROLL UP ===============*/ 
const scrollUp = () =>{
	const scrollUp = document.getElementById('scroll-up')
    // When the scroll is higher than 350 viewport height, add the show-scroll class to the a tag with the scrollup class
	this.scrollY >= 350 ? scrollUp.classList.add('show-scroll')
						: scrollUp.classList.remove('show-scroll')
}
window.addEventListener('scroll', scrollUp)