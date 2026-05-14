
const Fname = document.getElementById("Fname");
const Lname = document.getElementById("Lname");

const signupForm = document.getElementById("signupForm");
const SuccessBox = document.getElementById("SuccessBox");
const reserveNumber = document.getElementById("reserveNumber");

Fname.addEventListener("input", function (){
    this.value = this.value.replace(/[^a-zA-Z\s]/g, "");
});

Lname.addEventListener("input", function (){
    this.value = this.value.replace(/[^a-zA-Z\s]/g, "");
});

signupForm.addEventListener("submit", function(event){

    event.preventDefault();

    const randomNumber = Math.floor(Math.random() * 100) + 1;

    reserveNumber.textContent = "No. " + randomNumber;

    signupForm.style.display = "none";

    SuccessBox.style.display = "block";

});

SuccessBox.addEventListener("click", function(){

    signupForm.reset();
    signupForm.style.display = "block";

    SuccessBox.style.display = "none";    
});
