const instagram = document.querySelector(".fa-instagram");
const github = document.querySelector(".fa-github");
const linkedin = document.querySelector(".fa-linkedin");

export function newWindowInsta() {
    window.open("https://www.instagram.com/prikuhnderlam/", "width=400,height=400");
}
instagram.addEventListener("click", newWindowInsta);
export function newWindowGithub() {
    window.open("https://github.com/pkderlam87/", "width=400,height=400");
}
github.addEventListener("click", newWindowGithub);
export function newWindowLinkedin() {
    window.open("https://www.linkedin.com/in/priscila-kuhn-derlam/", "width=400,height=400");
}
linkedin.addEventListener("click", newWindowLinkedin);