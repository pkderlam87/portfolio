import { baseURL } from "../util/api.js";

let categoriesURL = baseURL;
let portfolioCards = document.querySelector(".portfolio__cards");
let idCarouselItem = 1;

(async function createPortfolioURL() {
    try {
        const response = await fetch(baseURL);
        const dataBaseUrl = await response.json();
        for (let i = 0; i < dataBaseUrl.length; i++) {
            categoriesURL = "https://pkderlam.one/portfolio/wp-json/wp/v2/posts?categories=" + dataBaseUrl[i].id + "&_embed";
            portfolioCardsShow(categoriesURL);
        }
    } catch (error) {
        console.log("An error occurred.");
    }
})();

async function portfolioCardsShow(categoriesURL) {
    try {
        const response = await fetch(categoriesURL);
        const data = await response.json();
        contentCarousel(data);
    } catch (error) {
        console.log(error);
    }
}

function contentCarousel(data) {
    portfolioCards.innerHTML +=
        `<div class="wrap__carousel">
        <div id="carouselExampleDark" class="carousel carousel-dark slide" data-bs-ride="carousel">
        <div class="carousel-indicators">
          <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
          <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="1" aria-label="Slide 2"></button>
          <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="2" aria-label="Slide 3"></button>
          </div>
        <div class="carousel-inner">
          <div class="carousel-item active" data-bs-interval="10000" id=${idCarouselItem++}>
            </div>
          <div class="carousel-item" data-bs-interval="2000" id=${idCarouselItem++}>
            </div>
          <div class="carousel-item" id=${idCarouselItem++}>
            </div>
        </div>
      </div>
      <div class="container buttons d-flex justify-content-around">
            <a href = "${data[0].excerpt.rendered}" class="btn" id="linkToPage"><i class="fa-solid fa-globe"></i></a>
            <a href = "${data[1].excerpt.rendered}" class="btn" id="linkToGit"><i class="fa-brands fa-github"></i></a>
          </div>
      </div>
      </div>`;
    const carouselItem = document.querySelectorAll(".carousel-item");
    let dataIndex = 0;
    for (let i = 0; i < carouselItem.length; i++) {
        if (carouselItem[i].id >= (idCarouselItem - 3)) {
            carouselItem[i].innerHTML = `<img src="${data[dataIndex]._embedded['wp:featuredmedia'][0].source_url}" class="d-block image__carousel-inner" alt="${data[dataIndex]._embedded['wp:featuredmedia'][0].alt_text}">
            <div class="carousel-caption d-xs-block">
              ${data[dataIndex].content.rendered}
            </div>`;
            dataIndex++;
        }

    }
}
