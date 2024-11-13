
const header=document.querySelector("header");
const hamburger=document.querySelector(".hamburger-on");
const navLinks=document.querySelector(".nav-links");
let hamburgerOpen= false;

window.addEventListener("scroll",function(){
    header.classList.toggle("sticky",window.scrollY>0);
})

hamburger.addEventListener("click",function(){
    if(!hamburgerOpen){
        navLinks.classList.toggle("show-navlinks");
        hamburger.classList.toggle("hamburger-off");
    }else{
        navLinks.classList.remove("show-navlinks");
        hamburger.classList.remove("hamburger-off")
        hamburgerOpen=false;
    }
})
const cards = document.querySelectorAll('.card');


let activeCard = document.querySelector('.card-1'); 
activeCard.classList.add('active');

cards.forEach((card, index) => {
  card.addEventListener('mouseover', () => {
    if (!card.classList.contains('active')) {
      
      activeCard.classList.remove('active');
      activeCard.style.zIndex = 1; 
      
      
      card.classList.add('active');
      card.style.zIndex = 20; 
      
     
      activeCard = card;
    }
  });
});


const swiper = new Swiper('.slider-wrapper', {
  loop:true,
  grabCursor:true,
  spaceBetween: 30,

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
    clickable:true,
    dynamicBullets:true
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  breakpoints: {
    0: {
      slidesPerView: 1
    },
    768: {
      slidesPerView: 2
    },
    1024: {
      slidesPerView: 3
    },
  }
 
});

