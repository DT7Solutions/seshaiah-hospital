
// Contact Form
document.getElementById("contact-form").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent the default form submission

    // Gather the form data
    const username = document.getElementById("username").value;
    const email = document.getElementById("email").value;
    const phone = document.getElementById("phone").value;
    const subject = document.getElementById("subject").value;
    const message = document.getElementById("message").value;

    const emailData = {
        from_name: username,
        from_email: email,
        phone: phone,
        subject: subject,
        message: message,
    };

    // EmailJS configuration
    emailjs.init("YOUR_PUBLIC_KEY"); 
    // Send appointment data to EmailJS
    emailjs.send("YOUR_SERVICE_ID", "YOUR_TEMPLATE_ID", emailData)
    .then(function (response) {
        const successMessage = document.getElementById("contact-success-message");
        successMessage.classList.remove("d-none");
        console.log("Contact Form submitted successfully!", JSON.stringify(emailData, null, 2), response.status, response.text);
        setTimeout(() => {
            successMessage.classList.add("d-none");
            document.getElementById("contact-form").reset();
        }, 3000);
    }, function (error) {
        const errorMessage = document.getElementById("contact-error-message");
        errorMessage.classList.remove("d-none");
        console.log("Contact Form submission failed! Try Again!", JSON.stringify(emailData, null, 2), error);
        setTimeout(() => {
            errorMessage.classList.add("d-none");
            document.getElementById("contact-form").reset();
        }, 3000);
    });
});


// Appointment Form
document.getElementById("appointment-form").addEventListener("submit", function(event) {
    event.preventDefault(); 
    const name = document.getElementById("name").value;
    const age = document.getElementById("age").value;
    const gender = document.getElementById("gender").value;
    const cellNumber = document.getElementById("cell-number").value;
    const email = document.getElementById("email").value;
    const refDoc = document.getElementById("ref-doc").value;
    const date = document.getElementById("date").value;
    const service = document.getElementById("services").value;
    const address = document.getElementById("address").value;

    const appointmentData = {
        from_name: name,
        age: age,
        gender: gender,
        phone: cellNumber,
        email: email,
        ref_doc: refDoc,
        appointment_date: date,
        service: service,
        address: address,
    };

    // EmailJS configuration
    emailjs.init("YOUR_PUBLIC_KEY"); 
    // Send appointment data to EmailJS
    emailjs.send("YOUR_SERVICE_ID", "YOUR_TEMPLATE_ID", appointmentData)
    .then(function (response) {
        const successMessage = document.getElementById("success-message");
        successMessage.classList.remove("d-none");
        console.log("Appointment Form submitted successfully!", JSON.stringify(appointmentData, null, 2), response.status, response.text);
        setTimeout(() => {
            successMessage.classList.add("d-none");
            document.getElementById("appointment-form").reset();
        }, 3000);
    }, function (error) {
        const errorMessage = document.getElementById("error-message");
        errorMessage.classList.remove("d-none");
        console.log("Appointment Form submission failed! Try Again!", JSON.stringify(appointmentData, null, 2), error);
        setTimeout(() => {
            errorMessage.classList.add("d-none");
            document.getElementById("appointment-form").reset();
        }, 3000);
    });
});
