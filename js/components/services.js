export function servicesShow() {
    const serviceShow = document.querySelector(".services__show");
    serviceShow.innerHTML = `
    <div class="service__card">
    <div class="d-flex">
    <img src="/images/services/prototype.jpg" alt="Example of prototype using Adobe XD" class="img__services">
    </div>
    <div class="services__subtitles d-flex">
    <h1><i class="fa-solid fa-pen-ruler"></i>
        Prototype</h1>
    </div>
    <div class="container">
        <p>By anticipating the look-and-feel of the desired result, one can offer early
            opportunities for improvements and, thus, spare countless amounts of time and money.
            A valuable resource for planning.</p>
    </div>
    </div>
    <div class="service__card">
<div class="d-flex">
    <img src="/images/services/Web_development.jpg"
        alt="Example of web development using VS Code and the mobile browser" class="img__services">
    </div>
    <div class="services__subtitles d-flex">
    <h1><i class="fa-solid fa-screwdriver-wrench"></i>
        Web development</h1>
    </div>
    <div class="container">
        <p>At this stage, we can bring a prototype to life by coding each detail thoroughly. It's where
            all the knowledge should clump together while the coding, by its turn, should reflect
            decoupling and cohesion.</p>
    </div>
    </div>
    <div class="service__card">
    <div class="d-flex">
        <img src="/images/services/freestocks-40k6ZqbsXuo-unsplash.jpg" alt="Example of usability test" class="img__services">
    </div>
        <div class="services__subtitles d-flex">
        <h1><i class="fa-solid fa-user-check"></i>
            Usability test</h1>
        </div>
        <div class="container">
            <p>A good website is useful, intuitive, and non-misleading in any sense. After the features
                are exposed during the prototyping, it's essential to validate the final result with
                some rounds of monitored user interactions.</p>
        </div>
    </div>`;
}