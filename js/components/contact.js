export function contactShow() {
    const contactMeShow = document.querySelector(".contact__show");
    contactMeShow.innerHTML = `
    <br>
                <div id="validation"></div>
                <div class="errorRequest"></div>        
        <div class="col-md-4">
            <div class="d-flex gap-2">
                <i class="fa-solid fa-location-dot"></i>
                <h6>Trondheim/Norway</h6>
            </div>
            <br>
            <a href="mailto:pkderlam@hotmail.com" class="d-flex gap-2 email__contact"><i class="fa-solid fa-envelope"></i>
                <h6>pkderlam@hotmail.com</h6>
            </a>
            <br>
        </div>
            <div class="col-md-8"> 
                <form action="https://pkderlam.one/portfolio/wp-json/contact-form-7/v1/contact-forms/13/feedback"
                    method="post" class="contact__form">
                    <div class="mb-3">
                        <label for="exampleInputName" class="form-label">Full Name*</label>
                        <input type="text" class="form-control" id="exampleInputName" name="exampleInputName" required>
                        <div class="form-error" id="nameError">Your name should have at least 2 characters</div>
                    </div>
                    <div class="d-md-flex gap-md-1 col-md-12">
                    <div class="mb-3 col-md-6">
                        <label for="exampleInputEmail1" class="form-label">Email*</label>
                        <input type="email" class="form-control" id="exampleInputEmail1" name="exampleInputEmail1" required>
                        <div class="form-error" id="emailError">Your email must be a valid email address</div>
                    </div>
                    <div class="mb-3 col-md-6">
                        <label for="exampleInputPhoneNumber" class="form-label">Phone Number (optional)</label>
                        <input type="text" class="form-control" id="exampleInputPhoneNumber" name="exampleInputPhoneNumber">
                        <div id="phoneHelp" class="form-text">+47 99999999</div>
                    </div>
                    </div>
                    <div class="mb-3">
                        <label for="exampleInputMessage" class="form-label">Enter your message*</label>
                        <textarea type="text" class="form-control" id="exampleInputMessage" name="exampleInputMessage" required></textarea>
                        <div class="form-error" id="messageError">Your message should have at least 5 characters</div>
                    </div>
                    <div class="d-flex flex-column d-md-block button__submit--contact">
                        <button type="submit" class="btn">Submit</button>
                    </div>
                </form>
            </div>`;
    const form = document.querySelector(".contact__form");
    const emailError = document.querySelector("#emailError");
    const inputEmail = document.querySelector("#exampleInputEmail1");
    const nameError = document.querySelector("#nameError");
    const inputName = document.querySelector("#exampleInputName");
    const messageError = document.querySelector("#messageError");
    const messageTextarea = document.querySelector("#exampleInputMessage");
    const validationMessage = document.querySelector("#validation");
    const errorRequest = document.querySelector(".errorRequest");
    form.addEventListener("submit", (event) => formSubmission(event, emailError, inputEmail, nameError, inputName, messageError, messageTextarea, validationMessage, errorRequest, form));
}
//This excerpt come from https://css-tricks.com/headless-form-submission-with-the-wordpress-rest-api/ 
const formSubmission = (event, emailError, inputEmail, nameError, inputName, messageError, messageTextarea, validationMessage, errorRequest, form) => {
    event.preventDefault();
    console.log(event.target);
    const formElement = event.target,
        { action, method } = formElement,
        formData = new FormData(formElement);
    fetch(action, {
        method,
        body: formData
    })
        .then((response) => response.json())
        .then((response) => {
            console.log(response);
            if (response.status == "mail_sent") {
                emailError.style.display = "none";
                validationMessage.style.display = "block";
                validationMessage.innerHTML = `<div class= "successMessage"><p>${response.message}</p></div>`;
                form.reset();
                nameError.style.display = "none";
                inputName.style.border = "1px solid #ced4da";
                emailError.style.display = "none";
                inputEmail.style.border = "1px solid #ced4da";
                messageError.style.display = "none";
                messageTextarea.style.border = "1px solid #ced4da";
                setTimeout(function () {
                    validationMessage.style.display = "none";
                }, 10000);
            }
            if (response.status == "validation_failed") {
                for (let i = 0; i < (response.invalid_fields).length; i++) {
                    switch (response.invalid_fields[i].error_id) {
                        case "-ve-exampleInputName":
                            nameError.style.display = "block";
                            inputName.style.border = "2px solid red";
                            break;
                        case "-ve-exampleInputEmail1":
                            emailError.style.display = "block";
                            inputEmail.style.border = "2px solid red";
                            break;
                        case "-ve-exampleInputMessage":
                            messageError.style.display = "block";
                            messageTextarea.style.border = "2px solid red";
                            break;
                    }
                }
            }
        })
        .catch((error) => {
            console.log(error)
            errorRequest.style.display = "block";
            errorRequest.innerHTML = `<h6>An error occurred during the request${error}. Please try again later.</h6>`
        });
};
