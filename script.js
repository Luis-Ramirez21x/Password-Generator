// Assignment Code
var generateBtn = document.querySelector("#generate");
var listNumbers = '123456789';
var listLowercase = 'abcdefghijklmnopqrstuvwxyz';
var listUppercase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
var listSpecialChar ='!#$%&*+';


function generatePassword(){
  
  var passwordArr = [];
  var charAvailable = '';
  var passwordLength = prompt('Enter password length. Must be between 8-128 characters.');
  var lowercase = confirm('Include lowercase characters?');
  var uppercase = confirm('Include uppercase characters?');
  var numeric = confirm('Include numbers?');
  var specialChar = confirm('Include special characters?');
  
   
  //if user confirms, that list of criteria is added to the available options
  if (lowercase) {charAvailable += listLowercase};
  if (uppercase) {charAvailable += listUppercase};
  if (numeric) {charAvailable += listNumbers};
  if (specialChar) {charAvailable += listSpecialChar};
  
  //pulls random characters from single or multiple lists depending on UI
    for (i = 0; i < passwordLength ; i++) {
      passwordArr[i] = charAvailable.charAt(Math.floor(Math.random() * charAvailable.length));
    }  
  
  //converts array content into a string
  passwordArr = passwordArr.join('');
  return passwordArr;


};
  
// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);