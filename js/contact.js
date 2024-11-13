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