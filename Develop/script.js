// Assignment code here
var addNumber = document.querySelector("#addNumber");
var valOptions = document.getElementById('options');
var validate = 0;


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
    writePassword(rangeChar.value);
  } else {
    alert('Either one of your check boxes are not selected or your number range is blank')
  }
}


//(example) var myString = "Hello "; myString += String.fromCharCode(65);


function generatePassword() {
  
}














// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword(numChar) {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  console.log(numChar)
  passwordText.value = password;
}