const instagram = document.querySelector(".fa-instagram");
const cardInstagram = document.querySelector(".instagram");
const cardGithub = document.querySelector(".github");

function newWindowInsta() {
    window.open("https://www.instagram.com/prikuhnderlam/", instagram, "width=400,height=400");
}
instagram.addEventListener("click", newWindowInsta);
function newWindowCardInsta() {
    window.open("https://www.instagram.com/prikuhnderlam/", instagram, "width=400,height=400");
}
cardInstagram.addEventListener("click", newWindowCardInsta);
function newWindowGithub() {
    window.open("https://github.com/pkderlam87/", cardGithub, "width=400,height=400");
}
cardGithub.addEventListener("click", newWindowGithub);