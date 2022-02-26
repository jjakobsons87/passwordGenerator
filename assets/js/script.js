// Assignment Code
var generateBtn = document.querySelector("#generate");
var password= document.getElementById("password");
var upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var lowerCase = "abcdefghijklmnopqrstuvwxyz";
var numbers = "1234567890";
var specialCar = " (!#$%&()*./:;<=>?@[\]^_`{|}~)";



// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

function generatePassword(){

  var passwordLength = window.prompt("How many characters do you want your password to have? Please choose a length between 8 - 128 characters. ");
  if (passwordLength > 8 && passwordLength < 128) {
    window.prompt("Please confirm your selection of " + length + " characters.");
  } else {
    window.alert("Please provide a valid character amount between 8 and 128.");
    return;
  }

  var lowerCaseConfirm = window.confirm("Do you want your password to have lower case letters?");

  var upperCaseConfirm = window.confirm("do you want your password to have upper case letters?");

  var specialCarConfirm = window.confirm("Do you want special characters in your password?");

  var numbersConfirm = window.confirm("Do you want numbers in your password?");

};

generatePassword();


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
