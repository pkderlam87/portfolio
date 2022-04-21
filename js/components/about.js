export function aboutShow() {
    const aboutMeShow = document.querySelector(".about__show");
    aboutMeShow.innerHTML = `
    <div class="d-flex justify-content-center align-items-center col-md-5">
    <!--This is the draft version of a video about me-->
                    <video class="video__about__section w-100" controls muted>Your browser does not support the &lt;video&gt; tag.
                        <source src="/images/Video_about_section.mp4" />
                    </video>
    </div>
    <div class="wrap__about--info col-md-7">
    <div>
    <p>My nickname is "P" (π) since I was a child, just like the name of the letter Pi when pronounced
        in Portuguese my mother language.</p>
    <p>I took a Front-end Developer higher professional degree in Norway, and I'm putting my focus on
        website development.</p>
    <p>I am organized, disciplined, adaptable, and I like to learn constantly. I'm always trying new
        things, I am not afraid of starting over.</p>
</div>
<div class="about__buttons d-flex flex-column flex-md-row gap-md-3 justify-content-center">
        <button class="btn p-sm-2 px-md-2 py-md-1 about__resume__button"><a href="/Resume.pdf" download><h5><i class="fa-solid fa-download"></i> Resume</h5></a></button>
        <a href="https://www.linkedin.com/in/priscila-kuhn-derlam/"><button class="btn linkedin p-sm-2 px-md-2 py-md-1"><h5><i class="fa-brands fa-linkedin"></i> LinkedIn</h5></button></a>
        <a href="https://github.com/pkderlam87/"><button class="btn github p-sm-2 px-md-2 py-md-1"><h5><i class="fa-brands fa-github"></i> Github</h5></button></a>
</div>
</div>`;
}