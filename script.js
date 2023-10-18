"use strict"    
const bar = document.getElementById('bar');
const nav = document.getElementById('navbar');
const close = document.getElementById('close');

if(bar){
    bar.addEventListener("click", () => {
        nav.classList.add("active");
    })
}
if(close){
    close.addEventListener("click", () => {
        nav.classList.remove("active");
    })
}

var MainIMG = document.getElementById("main-pro-img");
var smallerIMG = [...document.getElementsByClassName("smallimg")]
smallerIMG.forEach(smallimg => {
    smallimg.addEventListener("click", ()=> {
        MainIMG.src = smallimg.src;
    })
});

