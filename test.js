document.addEventListener("DOMContentLoaded", () => {
    const nav = document.querySelector(".nav");

    document.querySelector("#btnNav") .addEventListener("click", () => {
      nav.classList.add("nav--open");  
    });
    document.querySelector(".nav__overlay") .addEventListener("click", () => {
        nav.classList.remove("nav--open");  
      });
})



// function openNav() {
//   document.getElementById("mySidenav").style.width = "100%";
// }

// function closeNav() {
//   document.getElementById("mySidenav").style.width = "0";
// }

