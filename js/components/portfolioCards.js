import { baseURL } from "../util/api.js";
const categoriesURL = baseURL + "1&_embed";

export async function portfolioCardsShow() {
    try {
        const response = await fetch(categoriesURL);
        const data = await response.json();
        console.log(data);
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
          <div class="carousel-item">
            </div>
        </div>
      </div>
      </div>
      <div class="container buttons">
      <a href = "https://amazing-hugle-aedc0f.netlify.app" class="btn" id="linkToPage"><i class="fa-solid fa-globe"></i></a>
      <a href = "https://github.com/pkderlam87/Semester_Project_2" class="btn" id="linkToGit"><i class="fa-brands fa-github"></i></a>
      </div>`;
        const carouselItem = document.querySelectorAll(".carousel-item");
        console.log(carouselItem);
        for (let i = 0; i < data.length; i++) {
            carouselItem[i].innerHTML = `<img src="${data[i]._embedded['wp:featuredmedia'][0].source_url}" class="d-block image__carousel-inner" alt="${data[i]._embedded['wp:featuredmedia'][0].alt_text}">
            <div class="carousel-caption d-xs-block">
              ${data[i].excerpt.rendered}
            </div>`;
        }
    } catch (error) {
        console.log("An error occurred.");
    }
}