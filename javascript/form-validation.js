document.addEventListener("DOMContentLoaded", function () {
    const form = document.querySelector("form");

    form.addEventListener("submit", function (event) {
        event.preventDefault();

        // values of the form
        const name = document.getElementById("name").value;
        const email = document.getElementById("email").value;
        const message = document.getElementById("message").value;

        // regexes that are used to check the form
        const nameRegex = /^[a-zA-Z\s]+$/;
        const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

        
        let hasError = false;

        // checking the name label
        if (!name.match(nameRegex)) {
            displayError("name", "Name is invalid");
            hasError = true;
        } else {
            clearError("name");
        }

        // checking the email label
        if (!email.match(emailRegex)) {
            displayError("email", "Email is invalid");
            hasError = true;
        } else {
            clearError("email");
        }

        // checking the message label
        if (message.trim() === "") {
            displayError("message", "Write something");
            hasError = true;
        } else {
            clearError("message");
        }

        // no error
        if (!hasError) {
            // alert that shows a message sent
            alert("Successfully sent.");
            form.submit();
        }
    });

    function displayError(fieldId, errorMessage) {
        const field = document.getElementById(fieldId);
        const errorContainer = document.createElement("div");
        errorContainer.classList.add("error-message");
        errorContainer.innerText = errorMessage;

        // check for error
        const existingError = field.nextElementSibling;
        if (existingError && existingError.classList.contains("error-message")) {
            field.parentElement.removeChild(existingError);
        }

        field.parentElement.appendChild(errorContainer);
    }

    function clearError(fieldId) {
        const field = document.getElementById(fieldId);
        const existingError = field.nextElementSibling;
        if (existingError && existingError.classList.contains("error-message")) {
            field.parentElement.removeChild(existingError);
        }
    }
});
