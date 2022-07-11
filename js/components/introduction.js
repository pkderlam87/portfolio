import { newWindowLinkedin } from "../socialMedia.js";

const introduction = document.querySelector(".introduction");

export function introductionShow() {
    introduction.innerHTML = `
    <div class="introduction__text">
        <h6>Hi, I am Priscila Kuhn Derlam, Front End Developer</h6> 
    </div>
    <img src="/images/Linkedin-photo.jpg" alt="Priscila's photo" class="introduction__photo">
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

    //Linkedin Button in the introduction
    const linkedin = document.querySelector(".linkedin");
    linkedin.addEventListener("click", newWindowLinkedin);
}
