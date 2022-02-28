// Assignment Code
var generateBtn = document.querySelector("#generate");
// var password= document.getElementById("password");
var upperCase = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
var lowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var numbers = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];
var specialCar = ["(","!","#","$","%","&","*",".","/",":",";","<","=",">","?","@","`","{","|","}","~"]; 
var password = "";
var passwordInfo = [];

function criteriaPrompt() {
  // ask how many characters they want in the password
  var passwordLength = window.prompt("How many characters do you want your password to have? Please choose a length between 8 - 128 characters. ");

  //confirm if password is correct length
  if (passwordLength > 7 && passwordLength < 129) {
    window.confirm("Please confirm your selection of " + passwordLength + " characters.");
  } else {
    window.alert("Please provide a valid character amount between 8 and 128.");
    return null;
  }

  // ask if they want lower case
  var lowerCaseConfirm = window.confirm("Do you want your password to have lower case letters?");
  if (lowerCaseConfirm) {
    passwordInfo = passwordInfo.concat(lowerCase)
  }

  // ask if they want upper case
  var upperCaseConfirm = window.confirm("do you want your password to have upper case letters?");
  if (upperCaseConfirm) {
    passwordInfo = passwordInfo.concat(upperCase);
  }

  // ask if they want special characters
  var specialCarConfirm = window.confirm("Do you want special characters in your password?");
  if (specialCarConfirm) {
    passwordInfo = passwordInfo.concat(specialCar);
  }

  // ask if they want numbers
  var numbersConfirm = window.confirm("Do you want numbers in your password?");
  if (numbersConfirm) {
    passwordInfo = passwordInfo.concat(numbers);
  }

  var passwordOptions = {
    passwordLength: passwordLength,
    lowerCaseConfirm: lowerCaseConfirm,
    upperCaseConfirm: upperCaseConfirm,
    specialCarConfirm: specialCarConfirm,
    numbersConfirm: numbersConfirm,
  }

  // this brings all the different characters together and gives it the appropriate length
  for (var i = 0; i < passwordLength; i++) {
    password = password.concat(randomCar(0, passwordInfo.length));
  }
  // if all are false, they must go back and select at lease one'
  if (
    lowerCaseConfirm === false &&
    upperCaseConfirm === false &&
    specialCarConfirm === false &&
    numbersConfirm === false
  ) {
    window.alert("You must choose at least one password character type for your password.");
    return null;
  }
    return password;

};

var randomCar = function (min,max) {
  var randomNum = Math.floor(Math.random() * (max-1));
  var actualChosen = passwordInfo[randomNum];
  return actualChosen;
}; 


// Write password to the #password input
function writePassword() {
  var password = criteriaPrompt();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
  console.log(password);
};

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);