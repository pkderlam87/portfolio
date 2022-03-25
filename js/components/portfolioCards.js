import { portfolioContentDB } from "../util/portfolioContentDB.js";
let portfolioContentDBArray = [];
let carouselItem = null;
export function portfolioCardsShow() {
    const portfolioCards = document.querySelector(".portfolio__cards");
    for (let i = 0; i < portfolioContentDB().length; i++) {
        portfolioCards.innerHTML += `<div id="carouselExampleDark" class="carousel carousel-dark slide" data-bs-ride="carousel">
        <div class="carousel-indicators">
          <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
          <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="1" aria-label="Slide 2"></button>
          <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="2" aria-label="Slide 3"></button>
        </div>
        <div class="carousel-inner">
          <div class="carousel-item active" data-bs-interval="10000">
          </div>
          <div class="carousel-item" data-bs-interval="2000">
            </div>
          <div class="carousel-item" data-bs-interval="4000">
          </div>
        </div>
    </div>
    <div class="container buttons">
    <a href = "https://amazing-hugle-aedc0f.netlify.app" class="btn"><i class="fa-solid fa-globe"></i></a>
    <a href = "https://github.com/pkderlam87/Semester_Project_2" class="btn"><i class="fa-brands fa-github"></i></a>`;
        portfolioContentDBArray = portfolioContentDB()[i];
        carouselItem = document.querySelectorAll(".carousel-item");
        for (let i = 0; i < portfolioContentDBArray.length; i++) {
            carouselItem[i].innerHTML += `<img src=${portfolioContentDBArray[i].image} class="d-block w-100" alt=${portfolioContentDBArray[i].alt}>
                <div class="d-md-block">
                  <p>${portfolioContentDBArray[i].text}</p>
                </div>`;
        }
    }

}