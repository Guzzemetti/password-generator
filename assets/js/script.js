// Arrays for special characters, lowercase letters, uppercase letters, and numbers
constspecialChars=["!", "@", "#", "$", "%", "^", "&", "*", "-", "=", "+", "(", ")", "{", "}", "[", "]", "?", "/", ">", "<", ".", ",", "~", "|"];

constnumberChars=["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];

constuppercase=["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];

constlowercase=["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];


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
  var promptSelections = prompt()


};