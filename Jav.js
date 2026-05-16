

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

    const params = {
        fname: document.getElementById("Fname").value,
        lname: document.getElementById("Lname").value,
        email: document.getElementById("Email").value,
        date: document.getElementById("Rdate").value,
        time: document.getElementById("Rtime").value,
        number: randomNumber
    };

    emailjs.send("service_jake", "template_a4g88ko", params)
    .then(() => {
        reserveNumber.textContent = "No. " + randomNumber;

        signupForm.style.display = "none";
        SuccessBox.style.display = "block";
    })
    .catch((error) => {
        console.log(error);
        alert("Email failed to send");
    });
});
//fk thissssssssssss
SuccessBox.addEventListener("click", function(){

    signupForm.reset();

    SuccessBox.style.display = "none";
    signupForm.style.display = "block";
});
