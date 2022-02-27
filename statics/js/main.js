// Redirect function
function redirect(url) {
    window.location.href = url;
}


// Validate email
function validateEmail(email) {
    const result = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return result.test(String(email).toLowerCase());
}


// Contact form
document.querySelector("#contact-form button").addEventListener("click", function() {

    // Result
    let result = true;

    // Change button text temporarily
    this.innerHTML = "Requesting..."

    // Form elements
    let name = document.querySelector("#contact-form [name=name]");
    let email = document.querySelector("#contact-form [name=email]");
    let subject = document.querySelector("#contact-form [name=subject]");
    let message = document.querySelector("#contact-form [name=message]");

    // Check the name
    if (name.value == null || name.value == "") {
        name.classList.add("is-invalid");
        name.parentElement.querySelector(".text-info").innerHTML = "Name is required";
        result = false;

    } else {
        name.classList.remove("is-invalid");
        name.parentElement.querySelector(".text-info").innerHTML = "";
    }


    // Check the email
    if (email.value == null || email.value == "") {
        email.classList.add("is-invalid");
        email.parentElement.querySelector(".text-info").innerHTML = "Email is required";
        result = false;

    } else if (!validateEmail(email.value)) {
        email.classList.add("is-invalid");
        email.parentElement.querySelector(".text-info").innerHTML = "Email is invalid";
        result = false;

    } else {
        email.classList.remove("is-invalid");
        email.parentElement.querySelector(".text-info").innerHTML = "";
    }


    // Check the subject
    if (subject.value == null || subject.value == "") {
        subject.classList.add("is-invalid");
        subject.parentElement.querySelector(".text-info").innerHTML = "Subject is required";
        result = false;

    } else {
        subject.classList.remove("is-invalid");
        subject.parentElement.querySelector(".text-info").innerHTML = "";
    }


    // Check the message
    if (message.value == null || message.value == "") {
        message.classList.add("is-invalid");
        message.parentElement.querySelector(".text-info").innerHTML = "Message is required";
        result = false;

    } else if (message.value.length > 255) {
        message.classList.add("is-invalid");
        message.parentElement.querySelector(".text-info").innerHTML = "Message is too long";
        result = false;

    } else {
        message.classList.remove("is-invalid");
        message.parentElement.querySelector(".text-info").innerHTML = "";
    }


    // Change button text back
    this.innerHTML = "SUBMIT";


    // Check results
    if (result) {
        // Show alert message
        document.querySelector("#form-result").classList.add("alert");
        document.querySelector("#form-result").classList.add("alert-success");
        document.querySelector("#form-result").innerHTML = "Thanks for your message!";
        document.querySelector("#form-result").style.opacity = "1";

        // Prepare the email body
        let body = `${name.value} <${email.value}>\n`;
        body += `${message.value}`;

        // Submit form
        window.open(`mailto:heminsatya@outlook.com?subject=${subject.value}&body=${encodeURIComponent(body)}`);

        // Reset form
        document.querySelector("#contact-form").reset();
    }

});


// Contact form name
document.querySelector("#contact-form [name=name]").addEventListener("blur", function() {
    // Check the name
    if (this.value == null || this.value == "") {
        this.classList.add("is-invalid");
        this.parentElement.querySelector(".text-info").innerHTML = "Name is required";
        result = false;

    } else {
        this.classList.remove("is-invalid");
        this.parentElement.querySelector(".text-info").innerHTML = "";
    }
});


// Contact form email
document.querySelector("#contact-form [name=email]").addEventListener("blur", function() {
    // Check the email
    if (this.value == null || this.value == "") {
        this.classList.add("is-invalid");
        this.parentElement.querySelector(".text-info").innerHTML = "Email is required";
        result = false;

    } else if (!validateEmail(this.value)) {
        this.classList.add("is-invalid");
        this.parentElement.querySelector(".text-info").innerHTML = "Email is invalid";
        result = false;

    } else {
        this.classList.remove("is-invalid");
        this.parentElement.querySelector(".text-info").innerHTML = "";
    }
});


// Contact form subject
document.querySelector("#contact-form [name=subject]").addEventListener("blur", function() {
    // Check the subject
    if (this.value == null || this.value == "") {
        this.classList.add("is-invalid");
        this.parentElement.querySelector(".text-info").innerHTML = "Subject is required";
        result = false;

    } else {
        this.classList.remove("is-invalid");
        this.parentElement.querySelector(".text-info").innerHTML = "";
    }
});


// Contact form body
document.querySelector("#contact-form [name=message]").addEventListener("blur", function() {
    // Check the body
    if (this.value == null || this.value == "") {
        this.classList.add("is-invalid");
        this.parentElement.querySelector(".text-info").innerHTML = "Message is required";
        result = false;

    } else if (this.value.length > 255) {
        this.classList.add("is-invalid");
        this.parentElement.querySelector(".text-info").innerHTML = "Message is too long";
        result = false;

    } else {
        this.classList.remove("is-invalid");
        this.parentElement.querySelector(".text-info").innerHTML = "";
    }
});
