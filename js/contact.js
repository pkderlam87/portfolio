const form = document.querySelector(".contact__form");
const emailError = document.querySelector("#emailError");
const nameError = document.querySelector("#nameError");
const messageError = document.querySelector("#messageError");
const validationMessage = document.querySelector("#validation");
const errorRequest = document.querySelector(".errorRequest");

//This excerpt come from https://css-tricks.com/headless-form-submission-with-the-wordpress-rest-api/ 
const formSubmission = (event) => {
    event.preventDefault();
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
                setTimeout(function () {
                    validationMessage.style.display = "none";
                }, 10000);
            }
            if (response.status == "validation_failed") {
                for (let i = 0; i < (response.invalid_fields).length; i++) {
                    switch (response.invalid_fields[i].error_id) {
                        case "-ve-exampleInputName":
                            nameError.style.display = "block";
                            break;
                        case "-ve-exampleInputEmail1":
                            emailError.style.display = "block";
                            break;
                        case "-ve-exampleInputMessage":
                            messageError.style.display = "block";
                            break;
                    }
                }
            }
        })
        .catch((error) => {
            console.log(error)
            errorRequest.innerHTML = `<h6>An error occurred during the request${error}. Please try again later.</h6>`
        });
};
form.addEventListener("submit", formSubmission);