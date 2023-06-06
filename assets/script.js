
var generateBtn = document.querySelector("#generate");
var body = document.querySelector("Your Secure Password");
var passwordText = document.querySelector("#password");

var lowercase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var uppercase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
var specialChar = ["!", "#", "$", "%", "&", "*", "+"];


function generatePassword(event) {
  var lowercaseQuestion = confirm("Would you like to use lowercase characters?");
  var indexL = (Math.floor(Math.random() * lowercase.length));
  var indexL2 = (Math.floor(Math.random() * lowercase.length));
  if (lowercaseQuestion) {
    for(var i = 0; i < lowercase.length; i++) {
      var lowercaseChoice = lowercase[indexL] + lowercase[indexL2];
    }
  } else {
    var lowercaseChoice = "";
  }
  
  var uppercaseQuestion = confirm("Would you like to use uppercase characters?");
  var indexU = Math.floor(Math.random() * uppercase.length);
  var indexU2 = Math.floor(Math.random() * uppercase.length);
  if (uppercaseQuestion) {
    for(var i = 0; i < uppercase.length; i++) {
    var uppercaseChoice = uppercase[indexU] + uppercase[indexU2];
    }
  } else {
    var uppercaseChoice = "";
  }

  var numbersQuestion = confirm("Would you like to use numbers?");
  var indexN = Math.floor(Math.random() * numbers.length);
  var indexN2 = Math.floor(Math.random() * numbers.length);
  if (numbersQuestion) {
    for(var i = 0; i < numbers.length; i++) {
    var numbersChoice = numbers[indexN] + numbers[indexN2];
    }
  } else {
    numbersChoice = "";
  }
  
  var specialCharQuestion = confirm("Would you like to use special characters?");
  var indexSP = Math.floor(Math.random() * specialChar.length);
  var indexSP2 = Math.floor(Math.random() * specialChar.length);
  if (specialCharQuestion) {
    for(var i = 0; i < specialChar.length; i++) {
      var specialCharChoice = specialChar[indexSP] + specialChar[indexSP2];
    }
  } else {
    specialCharChoice = ""
  } 

  var password = lowercaseChoice + uppercaseChoice + numbersChoice + specialCharChoice; 
  if (!password) {
    password = "You must choose at least one character type! Refresh the page and try again!";
  }
  passwordText.textContent = password;

}

generateBtn.addEventListener("click", generatePassword);
