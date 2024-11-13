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

var swiper = new Swiper(".mySwiper", {
    effect: "coverflow",
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: "auto",
    coverflowEffect: {
      rotate: 50,
      stretch: 0,
      depth: 100,
      modifier: 1,
      slideShadows: true,
    },
    pagination: {
      el: ".swiper-pagination",
    },
  });

  