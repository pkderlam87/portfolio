import { introText } from "./components/introduction.js";
import { newWindowLinkedin } from "./socialMedia.js";
import { portfolioCardsShow } from "./components/portfolioCards.js";

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
}
intro();