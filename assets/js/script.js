// Assignment Code
var generateBtn = document.querySelector("#generate");
var password= document.getElementById("password");
var upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var lowerCase = "abcdefghijklmnopqrstuvwxyz";
var numbers = "1234567890";
var specialCar = " (!#$%&()*./:;<=>?@[\]^_`{|}~)";

// function to generate password 
function generatePassword(){

  // ask how many characters they want in the password 
  var passwordLength = window.prompt("How many characters do you want your password to have? Please choose a length between 8 - 128 characters. ");
  // convert number of characters 
  passwordLength = parseInt(passwordLength);

  //confirm if password is correct length 
  if (passwordLength > 8 && passwordLength < 128) {
    window.prompt("Please confirm your selection of " + length + " characters.");
  } else {
    window.alert("Please provide a valid character amount between 8 and 128.");
    return;
  }
  // ask if they want lower case 
  var lowerCaseConfirm = window.confirm("Do you want your password to have lower case letters?");

  // ask if they want upper case 
  var upperCaseConfirm = window.confirm("do you want your password to have upper case letters?");

  // ask if they want special characters 
  var specialCarConfirm = window.confirm("Do you want special characters in your password?");

  // ask if they want numbers 
  var numbersConfirm = window.confirm("Do you want numbers in your password?");

};

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
