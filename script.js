// Assignment Code
var generateBtn = document.querySelector("#generate");
var listNumbers = '123456789';
var listLowercase = 'abcdefghijklmnopqrstuvwxyz';
var listUppercase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
var listSpecialChar ='!#$%&*+[]{}_|~`/?><=;:-()';


function generatePassword(){
  
  var passwordArr = [];
  var charAvailable = '';
  var passwordLength;
  var lowercase;
  var uppercase;
  var numeric;
  var specialChar;

  //check to see if length entered is within range, if not the prompt is called again without calling generatePassword();
  function enterNumber(){
  passwordLength = prompt('Enter password length. Must be 8-128 characters.');
    if (passwordLength < 8 || passwordLength > 128) {
      alert('Please enter a number greater than 7 and less than 129');
      enterNumber();
    }};
  enterNumber();

  function enterCriteria(){  
  lowercase = confirm('Include lowercase characters?');
  uppercase = confirm('Include uppercase characters?');
  numeric = confirm('Include numbers?');
  specialChar = confirm('Include special characters?');
   if(!lowercase && !uppercase && !numeric && !specialChar){
     alert('Please confirm at least one of the criteria.');
     enterCriteria();
   }
  }
  enterCriteria();
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