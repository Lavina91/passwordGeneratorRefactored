// Assignment Code
var generateBtn = document.querySelector("#generate");

// array to store all lowercase letters 
var lower = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']

// array to store all uppercase letters
var upper = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']

// array to store all numbers
var num = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]

// array to store all special characters 
var special = ['@', '#', '$', '%', '^', '&', '*', '(', ')', '_', '+']




// Write password to the #password input

function writePassword() {

// prompts user to choose length of the generated password
var userLength = window.prompt('What length do you want your password (8 - 128)?');
  console.log(userLength);



// prompt user for if they want to use lowercase characters 
var userLower = window.confirm('Do you want to use lowercase characters?');
  console.log(userLower);



 // prompt user if they want to use uppercase characters 
var userUpper = window.confirm('Do you want to use uppercase characters?');
  console.log(userUpper);


// prompt user if they want use numeric characters 
var userNum = window.confirm('Do you want to use numeric characters?');
  console.log(userNum);



// prompt user if they want use numeric characters 
var userSpecial = window.confirm('Do you want to use special characters?');
  console.log(userSpecial);















  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
