import { introductionShow } from "./components/introduction.js";
import { skillsShow } from "./components/skills.js";
import { servicesShow } from "./components/services.js";
import { aboutShow } from "./components/about.js";
import { contactShow } from "./components/contact.js";

function showPortfolioPage() {
    //call the introduction, skills, services, about and contact functions
    introductionShow();
    skillsShow();
    servicesShow();
    aboutShow();
    contactShow();
}
showPortfolioPage();