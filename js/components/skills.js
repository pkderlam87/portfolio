export function skillsShow() {
    const skillsList = document.querySelector(".skills__list");
    skillsList.innerHTML = `<div class="row">
                    <div class="col">
                        <div class="d-flex">
                        <i class="fa-brands fa-html5 me-2"></i> 
                        <h6>HTML</h6>
                        </div>
                        <div class="d-flex">
                            <i class="fa-brands fa-bootstrap me-2"></i>
                            <h6>Bootstrap</h6>
                        </div>
                        <div class="d-flex">
                            <i class="fa-brands fa-sass me-2"></i>
                            <h6>Sass</h6>
                        </div>
                        <div class="d-flex">
                            <i class="fa-brands fa-npm me-2"></i>
                            <h6>npm</h6>
                        </div>
                        <div class="d-flex">
                            <i class="fa-brands fa-wordpress-simple me-2"></i>
                            <h6>Wordpress</h6>
                        </div>
                        <div class="d-flex">
                            <i class="fa-brands fa-wordpress-simple"></i>
                            <h6>Adobe XD</h6>
                        </div>
                        <div class="d-flex">
                            <i class="fa-brands fa-trello me-2"></i>
                            <h6>Trello</h6>
                        </div>
                    </div>
                    <div class="col">
                        <div class="d-flex">
                            <i class="fa-brands fa-css3-alt me-2"></i>
                            <h6>CSS</h6>
                        </div>
                        <div class="d-flex">
                            <i class="fa-brands fa-js-square me-2"></i>
                            <h6>JavaScript</h6>
                        </div>
                        <div class="d-flex">
                        <i class="fa-brands fa-react me-2"></i>
                            <h6>React</h6>
                        </div>
                        <div class="d-flex">
                            <i class="fa-brands fa-github me-2"></i>
                            <h6>Github</h6>
                        </div>
                        <div class="d-flex">
                            <i class="fa-brands fa-github me-2"></i>
                            <h6>Strapi</h6>
                        </div>
                        <div class="d-flex">
                            <i class="fa-brands fa-hotjar me-2"></i>
                            <h6>Hotjar</h6>
                        </div>
                        <div class="d-flex">
                            <i class="fa-brands fa-hotjar"></i>
                            <h6>Responsive design</h6>
                        </div>
    </div>
    </div>`;
}