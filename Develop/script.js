// Assignment code here
var passOptions = [
  {q: 'Does your password include Uppercase?', a: 't'},
  {q: 'Does your password include Lowercase?', a: 't'},
  {q: 'Does your password include Numbers?', a: 't'},
  {q: 'Does your password include Symbols?', a: 't'},
]
function options(){
  for (var i = 0; i < passOptions.length; i++) {
    var userInput = confirm(passOptions[i].q);
    if (
      (userInput === true && passOptions[i].a === 't') || (userInput === false && passOptions[i].a === 'f')) {

      }
  }
}

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

generateBtn.addEventListener("click", options);

