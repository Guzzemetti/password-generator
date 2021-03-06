// Arrays for special characters, lowercase letters, uppercase letters, and numbers
const specialChars=["!", "@", "#", "$", "%", "^", "&", "*", "-", "=", "+", "(", ")", "{", "}", "[", "]", "?", "/", ">", "<", ".", ",", "~", "|"];

const numberChars=["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];

const uppercase=["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];

const lowercase=["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

var possibleChars = []

// Assignment Code-------------------------------------------------//
var generateBtn = document.querySelector("#generate");

// Write password to the #password input within the HTML - Done
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
//----------------------------------------------------------------//

// This function will generate my password in full
function generatePassword(){
  var password = []
  // the parseInt returns the user's input as a Number stored to promptSelections
var passLength = prompt("How many characters, between 8 and 32, do you wish to use?");
  console.log(typeof passLength);
  console.log(passLength);
    if(isNaN(passLength)){
      alert("Please enter a valid integer between 8 and 32.")
      generatePassword();
    }
      // Verifies that the user's input is within the established character limit
    if(passLength < 8 || passLength > 32){
      alert("Please enter a valid integer between 8 and 32.")
      generatePassword();
    }
else {
      //------Below are my prompts asking users for which items they wish to include------//
  //--------------------------------------------------------
  promptSelections = confirm("Would you like to include special characters within your password?")
    // If promptSelections is confirmed, this adds the specialChars array to possibleChars, if cancelled, it will not add the arrays
  if(promptSelections){    
    possibleChars = possibleChars.concat(specialChars)
    }
  //--------------------------------------------------------
  promptSelections = confirm("Would you like to include numerical characters within your password?")
    // If promptSelections is confirmed, this adds the numberChars array to possibleChars
  if(promptSelections){    
    possibleChars = possibleChars.concat(numberChars)
    }
  //--------------------------------------------------------
  promptSelections = confirm("Would you like to include Uppercase characters within your password?")
    // If promptSelections is confirmed, this adds the uppercase array to possibleChars
  if(promptSelections){    
    possibleChars = possibleChars.concat(uppercase)
    }
  //--------------------------------------------------------
  promptSelections = confirm("Would you like to include Lowercase characters within your password?")
    // If promptSelections is confirmed, this adds the lowercase array to possibleChars
  if(promptSelections){    
    possibleChars = possibleChars.concat(lowercase)
    // return null;
  }
  //--------------------------------------------------------
  // Console Logs to verify work as I go
// console.log(possibleChars);
// console.log(typeof possibleChars);
// console.log(passLength);
// console.log(typeof passLength);
// console.log();
     for (let i = 0; i < passLength; i++) {
      password = password.concat(possibleChars[Math.floor(Math.random() * possibleChars.length)]);
      }
    }
// Console Logs to verify work as I go   
// console.log(typeof password);
password = password.join("");
return password;
};
