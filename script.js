document.addEventListener("DOMContentLoaded", function(){
    window.addEventListener("scroll", function(){
        let header = document.querySelector("header");
        header.style.backgroundColor = window.scrollY > 50 ? "#1A2B38" : "#233D4D";
    });
});