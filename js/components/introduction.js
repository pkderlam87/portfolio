import { newWindowLinkedin } from "../socialMedia.js";

const introduction = document.querySelector(".introduction");

export function introductionShow() {
    introduction.innerHTML = `
    <h6 class="introduction__text"></h6>
    <img src="/images/My cartoon photo.jpeg" alt="Priscila's cartoon photo" class="introduction__photo">
    <div class="buttons d-flex justify-content-evenly">
        <div>
            <a href="/Resume.pdf" download>
                <button class="btn"><i class="fa-solid fa-download"></i> Resume</button>
            </a>
        </div>
        <div>
            <button class="btn linkedin"><i class="fa-brands fa-linkedin"></i> LinkedIn</button>
        </div>
    </div>`;
    const introductionText = document.querySelector(".introduction__text");
    introText(introductionText);
    //Linkedin Button in the introduction
    const linkedin = document.querySelector(".linkedin");
    linkedin.addEventListener("click", newWindowLinkedin);
}
function introText(introductionText) {
    introductionText.innerHTML = `Hi, I am Priscila Kuhn Derlam, Junior Front End Developer based in Trondheim, Norway`;
}
