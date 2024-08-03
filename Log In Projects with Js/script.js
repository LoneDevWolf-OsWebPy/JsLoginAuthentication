// Author LoneDevWolf
function intro() {
  console.log("===============================================");
  console.log("[~] Project Linked Successfully !!!!          |");
  console.log("[~] Operations Begin                          |");
  console.log("===============================================");
}

intro();

// Define Parameters that are most important to this programs

// Define a function that checks the parameter of the user and password
function checkLogValue() {
  const adminUsername = document.getElementById("username");
  const adminPassword = document.getElementById("accesscode");
  const message = document.getElementById("displayMessage");

  if (adminUsername.value === "admin" && adminPassword.value === "010101") {
    message.innerHTML = "The parameters are === | ✔☕";
  } else {
    message.innerHTML = "The parameters are !=  |  🛡⚔";
    message.style.color = "#2D3439";
    message.style.textAlign = "center";
  }
}

// Check if the inputed value tally with the real values intended for this program
// Create an error message to be throwned when given wrong input
// Create a success message to be throwned when given correct input

