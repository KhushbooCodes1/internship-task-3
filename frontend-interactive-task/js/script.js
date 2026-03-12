// HERO BUTTON

document.getElementById("heroBtn").onclick = function(){

alert("Welcome to the Frontend Interactive Project!");

}



// DOM MANIPULATION

const button = document.getElementById("changeBtn");

const message = document.getElementById("message");

button.addEventListener("click", function(){

message.textContent = "DOM Manipulation Successful! 🎉";

});



// FORM VALIDATION

const form = document.getElementById("contactForm");

form.addEventListener("submit", function(e){

e.preventDefault();

const name = document.getElementById("name").value;

const email = document.getElementById("email").value;

const messageBox = document.getElementById("formMessage");

if(name === "" || email === ""){

messageBox.textContent = "Please fill all fields.";

messageBox.style.color = "red";

}

else{

messageBox.textContent = "Form submitted successfully!";

messageBox.style.color = "green";

}

});