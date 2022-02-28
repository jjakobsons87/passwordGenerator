// Assignment Code
var generateBtn = document.querySelector("#generate");
var password= document.getElementById("password");
var upperCase = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
var lowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var numbers = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];
var specialCar = ["(","!","#","$","%","&","*",".","/",":",";","<","=",">","?","@","`","{","|","}","~"];
 // change all the above 


var randomCar = function(array) {
  let index = (Math.random()) * array.length;
  return array[index];
} 

function criteriaPrompt() {
  // ask how many characters they want in the password
  var passwordLength = parseInt(prompt("How many characters do you want your password to have? Please choose a length between 8 - 128 characters. "));
  // convert number of characters
  passwordLength = parseInt(passwordLength);

  //confirm if password is correct length
  if (passwordLength > 7 && passwordLength < 129) {
    window.confirm("Please confirm your selection of " + passwordLength + " characters.");
    // return passwordLength;
  } else {
    window.alert("Please provide a valid character amount between 8 and 128.");
    return;
  };

  // ask if they want lower case
  var lowerCaseConfirm = window.confirm("Do you want your password to have lower case letters?");
  // if yes, then remember we want to have lower case
  // if (lowerCaseConfirm) {
  //    passwordOptions += lowerCaseConfirm;
  //    console.log(lowerCaseConfirm);
  //   // if no, move on
  // // } else {
  //  }
  // ask if they want upper case
  var upperCaseConfirm = window.confirm("do you want your password to have upper case letters?");
  // if yes store we want to have upper case
  // if (upperCaseConfirm) {
  //   passwordOptions += upperCaseConfirm;
  // } else {
  // }
  // ask if they want special characters
  var specialCarConfirm = window.confirm("Do you want special characters in your password?");
  // if (specialCarConfirm) {
  //   passwordOptions += specialCarConfirm;
  // } else {
  // }
  // ask if they want numbers
  var numbersConfirm = window.confirm("Do you want numbers in your password?");
  // if (numbersConfirm) {
  //   passwordOptions += numbersConfirm;
  // } else {
  // }

  var passwordOptions = {
    passwordLength: passwordLength,
    lowerCaseConfirm: lowerCaseConfirm,
    upperCaseConfirm: upperCaseConfirm,
    specialCarConfirm: specialCarConfirm,
    numbersConfirm: numbersConfirm,
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
  } else {
    return passwordOptions;
  }
};

// function to generate password 
function generatePassword() {
  var runPassword = criteriaPrompt();
  var result = [];
  var potentialCar = [];
  // var actualChosen = [];
  // when criteriaPrompt ran, did they select special characters? if yes put in this array 
  if (runPassword.specialCarConfirm) {
    potentialCar = potentialCar.concat(specialCar);
    // if yes, put these characters into the random generator 
    // actualChosen.push(randomCar(specialCar));
  }
  // if they said yes to lower case
  if (runPassword.lowerCaseConfirm) {
    potentialCar = potentialCar.concat(lowerCase);
    // actualChosen.push(randomCar(lowerCase));
  }
  // if they said yes to upper case 
if (runPassword.upperCaseConfirm) {
  potentialCar = potentialCar.concat(upperCase);
  // actualChosen.push(randomCar(upperCase));
}
  // if they said yes to numbers 
if (runPassword.numbersConfirm) {
  potentialCar = potentialCar.concat(numbers);
  // actualChosen.push(randomCar(numbers));
}

  // this brings all the different characters together and gives it the appropriate length 
  for (var i = 0; i < runPassword.passwordLength; i++) {
    var potentialCars = randomCar(potentialCar);
    result.push(potentialCars);
  }
  // for (var i = 0; i < actualChosen.passwordLength; i++) {
  //   result[i] = actualChosen[i]; 
  // }
  return result.join('');
};

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
  console.log(password);
};

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);