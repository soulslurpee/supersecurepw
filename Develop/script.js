// Assignment code here
const passwordLength = Number(prompt("What is the length of your password? (8 - 128 Characters)"));
const hasLowercase = confirm("Does the password require lowercase characters?");
const hasUppercase = confirm("Does the password require uppercase characters?");
const hasNumeric = confirm("Does the password require numeric characters?");
const hasSpecial = confirm("Does the password require special characters?");

console.log(passwordLength, hasLowercase, hasUppercase, hasNumeric, hasSpecial);

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword)