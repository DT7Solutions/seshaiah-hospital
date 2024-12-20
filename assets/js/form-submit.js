
// Appointment Form
document.getElementById("appointment-form").addEventListener("submit", function(event) {
    event.preventDefault(); 
    const name = document.getElementById("name").value;
    const age = document.getElementById("age").value;
    const gender = document.getElementById("gender").value;
    const cellNumber = document.getElementById("cell-number").value;
    const email = document.getElementById("email").value;
    const refDoc = document.getElementById("ref-doc").value || '-';
    const date = document.getElementById("date").value;
    const service = document.getElementById("services").value || '-';
    const address = document.getElementById("address").value || '-';

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
    emailjs.init("Z3GPmG9hTiVY_nkks"); 
    // Send appointment data to EmailJS
    emailjs.send("service_qxb7o1q", "template_z2e2bze", appointmentData)
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

/* 
  // EMAIL JS CREDENTIALS
  // User: seshaiahprajavydyasala@gmail.com
  // PW: Seshaiah@2025
  // Email Send to Users: seshaiahprajavydyasala@gmail.com, info@seshaiahprajavydyasala.com
  // Subject Email: New Appointment Request from {{from_name}}
*/
