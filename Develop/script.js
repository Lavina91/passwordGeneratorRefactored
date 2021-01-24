// Assignment Code
var generateBtn = document.querySelector("#generate");

// array to store all lowercase letters 
var lower = ['a' , 'b'  ,'c' , 'd' , 'e' , 'f', 'g' , 'h' , 'i' , 'j' , 'k' , 'l' , 'm' , 'n' , 'o' , 'p' , 'q' , 'r' , 's' , 't' , 'u' , 'v' , 'w' , 'x' , 'y' , 'z' ]

// array to store all uppercase letters
var upper = ['A' , 'B' , 'C' , 'D' , 'E' , 'F' , 'G' , 'H' , 'I' , 'J' , 'K' , 'L' , 'M' , 'N' , 'O' , 'P' , 'Q' , 'R' , 'S' , 'T' , 'U' , 'V' , 'W' , 'X' , 'Y' , 'Z']

// array to store all numbers
var num = [0 , 1 , 2 , 3 , 4 , 5 , 6 , 7 , 8 , 9 ]

// array to store all special characters 
var special = ['@' , '#' , '$' , '%' , '^' , '&' , '*' , '(' , ')' , '_' , '+' ]




// Write password to the #password input

function writePassword() {

// prompts user to choose length of the generated password
var userLength = window.prompt('What length do you want your password (8 - 128)?');
  console.log(userLength);

//  while loop to check if user put the appropriate number for password length
while(userLength < 8 || userLength > 128){
  alert('Please choose 8 - 128 characters for the length of your password');
  // repeats prompt to user
    var userLength = window.prompt('What length do you want your password (8 - 128)?');
};

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

// created a while loop to check if user inputs at least one character type
  while(!userLower && !userUpper && !userNum && !userSpecial) {
    alert('Please choose at least one character type');

// repeats prompt to user
var userLower = window.confirm('Do you want to use lowercase characters?');
  console.log(userLower);
var userUpper = window.confirm('Do you want to use uppercase characters?');
  console.log(userUpper);
var userNum = window.confirm('Do you want to use numeric characters?');
  console.log(userNum);
var userSpecial = window.confirm('Do you want to use special characters?');
  console.log(userSpecial);
  }


// created an object to store the multiple inputs received from the user 
  var userChoices = {
    length: userLength,
    lowerCase: userLower,
    upperCase: userUpper,
    number: userNum,
    special: userSpecial,
  }
  console.log(userChoices);


// created a variable to store all available character types based on user input
  var passPool = [];
  console.log(passPool);


// if/for loop to check user input for lowercase characters, if true push variable lower to passPool
if (userChoices.lowerCase === true){
  for(i = 0; i < lower.length; i++){
    passPool.push(lower[i])
  }
}

// if/for loop to check user input for uppercase characters, if true push variable upper to passPool
if (userChoices.upperCase === true){
  for(i = 0; i < upper.length; i++){
    passPool.push(upper[i]);
  }
}

// if/for loop to check user input for numeric characters, if true push variable num to passPool
if (userChoices.number === true){
  for(i = 0; i < num.length; i++){
    passPool.push(num[i]);
  }
}

// if/for loop to check user input for special characters, if true push variable special to passPool
if (userChoices.special === true){
  for(i = 0; i < special.length; i++){
    passPool.push(special[i]);
  }
}

// created a variable to store the generated password
var lastPass = [];





// for loop to pull random values from variable passPool 
for (i = 0; i < userChoices.length; i++){
  var getRandom = passPool[Math.floor(Math.random() * passPool.length)];
  console.log(getRandom);
  // pushes random values to variable lastPass
  lastPass.push(getRandom);
}



  var passwordText = document.querySelector("#password");

  passwordText.value = lastPass;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
