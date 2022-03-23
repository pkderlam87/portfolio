import { portfolioContent } from "../util/portfolioContent.js";

export function portfolioCardsShow() {
    const portfolioCards = document.querySelector(".portfolio__cards");
    portfolioCards.innerHTML = `<div id="carouselExampleDark" class="carousel carousel-dark slide" data-bs-ride="carousel">
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
    <a href = ""`;
    const carouselItem = document.querySelectorAll(".carousel-item");
    for (let i = 0; i < portfolioContent.length; i++) {
        carouselItem[i].innerHTML = `<img src=${portfolioContent[i].image} class="d-block w-100" alt=${portfolioContent[i].alt}>
            <div class="d-md-block">
              <p>${portfolioContent[i].text}</p>
            </div>`;
    }
}