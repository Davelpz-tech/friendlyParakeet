// Assignment code here
var addNumber = document.querySelector("#addNumber");
var valOptions = document.getElementById('options');
var validate = 0;

// Make sure at least one of the check boxes is selected and making sure range of characters is set
valOptions.onsubmit = function(e){
  e.preventDefault();
  if(addNumber.checked === true){
    validate = 1;
  } if(addUpper.checked === true){
    validate = 1;
  } if(addLower.checked === true){
    validate = 1;
  } if(addSymbols.checked === true){
    validate = 1;
  } if(rangeChar.value.length == 0){
    validate = 0;
  } if(validate == 1) {
    writePassword(rangeChar.value, addUpper.checked, addLower.checked, addSymbols.checked, addNumber.checked);
  } else {
    alert('Either one of your check boxes are not selected or your number range is blank')
  }
}



//  creates password
function generatePassword(numChar, containsUpper, containsLower, containsSymbols, containsNumbers) {

  // array that concatenates which character options you would like to include in your password
  var charCodes = [];
  if(containsLower) charCodes = charCodes.concat(lowercase_codes);
  if(containsUpper) charCodes = charCodes.concat(uppercase_codes);
  if(containsNumbers) charCodes = charCodes.concat(number_codes);
  if(containsSymbols) charCodes = charCodes.concat(symbols_codes);

  // apppends characters until 
  var passChar = []
  for (var i = 0; i < numChar; i++) {
    var characterCode = charCodes[Math.floor(Math.random() * (charCodes.length -1))]
    passChar.push(String.fromCharCode(characterCode))
  }
  return passChar.join('')
}

// array for ascii codes according to parameter range
var uppercase_codes = lowToHigh(65, 90);
var lowercase_codes = lowToHigh(97, 122);
var number_codes = lowToHigh(48, 57);
var symbols_codes = lowToHigh(33, 47);

// for loop that creates array incrementing according to the parameter range
function lowToHigh(low, high) {
  var array = []
  for (var i = low; i <= high; i++) {
    array.push(i)
  }
  return array
}

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword(numChar, containsUpper, containsLower, containsSymbols, containsNumbers) {
  var password = generatePassword(numChar, containsUpper, containsLower, containsSymbols, containsNumbers);
  var passwordText = document.querySelector("#password");
  console.log(numChar)
  passwordText.value = password;
}