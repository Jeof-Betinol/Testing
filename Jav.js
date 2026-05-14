//const Fname = document.getElementById("Fname");
//const Lname = document.getElementById("Lname");

//Fname.addEventListener("input", function (){
//    this.value = this.value.replace(/[^a-zA-Z\s]/g, "");
//});

//Lname.addEventListener("input", function (){
//    this.value = this.value.replace(/[^a-zA-Z\s]/g, "");
//});

// Prevent numbers in First Name and Last Name
const Fname = document.getElementById("Fname");
const Lname = document.getElementById("Lname");

Fname.addEventListener("input", function (){
    this.value = this.value.replace(/[^a-zA-Z\s]/g, "");
});

Lname.addEventListener("input", function (){
    this.value = this.value.replace(/[^a-zA-Z\s]/g, "");
});
////////////////////
const signupForm = document.getElementById("signupForm");
const SuccessBox = document.getElementById("SuccessBox");
const reserveNumber = document.getElementById("reserveNumber");

//For sending email and showing reservation number
signupForm.addEventListener("submit", function(event){
    event.preventDefault();

    const randomNumber = Math.floor(Math.random() * 100) + 1;

    reserveNumber.textContent = "No. " + randomNumber;

    const templateParams = {
        fname: document.getElementById("Fname").value,
        lname: document.getElementById("Lname").value,
        email: document.getElementById("Email").value,
        date: document.getElementById("Rdate").value,
        time: document.getElementById("Rtime").value,
        number: randomNumber
    };

    emailjs.send("YOUR_SERVICE_ID", "YOUR_TEMPLATE_ID", templateParams)
    .then(function(response) {
        console.log("Email sent!", response.status);
    }, function(error) {
        console.log("FAILED...", error);
    });

    signupForm.style.display = "none";
    SuccessBox.style.display = "block";
});

SuccessBox.addEventListener("click", function(){

    signupForm.reset();

    SuccessBox.style.display = "none";
    signupForm.style.display = "block";
});