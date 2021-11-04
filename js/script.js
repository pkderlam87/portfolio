const hamburgerMenu = document.querySelector(".fa-bars");
const menu = document.querySelector("ul");
let count = 0;
function showMenu() {
    menu.style.display = "block";
    count++;
    if ((count % 2) == 0) {
        menu.style.display = "none";
    }
}
hamburgerMenu.addEventListener("click", showMenu);
console.log(screen.width);
if (screen.width >= 769) {
    hamburgerMenu.style.display = "none";
}