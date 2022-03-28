import { introText } from "./components/introduction.js";
import { newWindowLinkedin } from "./socialMedia.js";
import { portfolioCardsShow } from "./components/portfolioCards.js";
import { skillsShow } from "./components/skills.js";
import { servicesShow } from "./components/services.js";
import { aboutShow } from "./components/about.js";
import { contactShow } from "./components/contact.js";

const introduction = document.querySelector(".introduction");
function intro() {
    introduction.innerHTML = `<h6 class="introduction__text"></h6>
<img src="/images/My cartoon photo.jpeg" alt="Priscila's cartoon photo" class="introduction__photo">
<div class="buttons">
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
    //call the portfolio cards show function
    portfolioCardsShow();
    skillsShow();
    servicesShow();
    aboutShow();
    contactShow();
}
intro();