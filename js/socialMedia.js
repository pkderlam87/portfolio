const instagram = document.querySelector(".fa-instagram");

function newWindow() {
    window.open("https://www.instagram.com/prikuhnderlam/", instagram, "width=400,height=400");
}
instagram.addEventListener("click", newWindow);