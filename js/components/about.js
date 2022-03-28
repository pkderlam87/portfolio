export function aboutShow() {
    const aboutMeShow = document.querySelector(".about__show");
    aboutMeShow.innerHTML = `<div>
    <p>My nickname is "Pee" (π) since I was a child, just like the name of the letter Pi when pronounced
        in Portuguese my mother language.</p>
    <p>I took a Front-end Developer higher professional degree in Norway, and I'm putting my focus on
        website development.</p>
    <p>I am organized, disciplined, adaptable, and I like to learn constantly. I'm always trying new
        things, I am not afraid of starting over.</p>
</div>
<div class="about__buttons">
        <button class="btn p-2 about__resume__button"><a href="/Resume.pdf" download><h5><i class="fa-solid fa-download"></i> Resume</h5></a></button>
        <button class="btn linkedin p-2"><h5><i class="fa-brands fa-linkedin"></i> LinkedIn</h5></button>
    <button class="btn github p-2"><h5><i class="fa-brands fa-github"></i> Github</h5></button>
</div>`;
}