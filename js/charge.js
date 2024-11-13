let li=document.querySelectorAll(".faq-text li");
for(var i=0;i<li.length;i++){
    li[i].addEventListener("click",(e)=>{
        let clickedLi;
        if(e.target.classList.contains("question-arrow")){
            clickedLi=e.target.parentElement;
        }else{
            clickedLi=e.target.parentElement.parentElement;
        }
        clickedLi.classList.toggle("showAnswer");
    });
}
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

