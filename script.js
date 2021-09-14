// Assignment Code
var generateBtn = document.querySelector("#generate");
var listNumbers = '123456789';
var listLowercase = 'abcdefghijklmnopqrstuvwxyz';
var listUppercase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
var listSpecialChar ='!#$%&*+';
var charAvailable;




function generatePassword(){
  var passwordLength = prompt('Enter password length. Must be between 8-128 characters.');
  var lowercase = prompt('Include lowercase characters? Enter Y or N.').toLowerCase();
  var uppercase = prompt('Include uppercase characters? Enter Y or N.').toLowerCase();
  var numeric = prompt('Include numbers? Enter Y or N.').toLowerCase();
  var specialChar = prompt('Inlcude special characters? Enter Y or N.').toLowerCase();
  
  var passwordArr = [];
  var test;
  
  
 /* function numGen() {
   randomNum = Math.floor(Math.random() * passwordLength);
   return randomNum;
  }*/

  //pulls random characters from single or multiple lists depending on UI
  function randomChar() {
    charAvailable.charAt(Math.floor(Math.random() * charAvailable.length));
    for (i = 0; i < passwordLength ; i++) {
      passwordArr[i] = charAvailable.charAt(Math.floor(Math.random() * charAvailable.length));
    }  
  }

  function lowcaseGen(){
    var a = listLowercase.charAt(Math.floor(Math.random() * listLowercase.length));
    return a;
  }

  function uppercaseGen(){
    var b = listUppercase.charAt(Math.floor(Math.random() * listUppercase.length));
    return b;
  }

  function numericGen(){
    var c = listNumbers.charAt(Math.floor(Math.random() * listNumbers.length));
    return c;
  }

  function specialGen(){
    var d = listSpecialChar.charAt(Math.floor(Math.random() * listSpecialChar.length));
    return d;
  }

  
  
  if (lowercase === 'y' && uppercase === 'y' && numeric === 'y' && specialChar === 'y') {
    charAvailable = listLowercase + listUppercase + listNumbers + listSpecialChar;

      randomChar();
      passwordArr[passwordLength-1] = lowcaseGen();
      passwordArr[0] = uppercaseGen();
      passwordArr[2] = numericGen();
      passwordArr[passwordLength-2] = specialGen();
      passwordArr = passwordArr.join('');
      console.log(passwordArr);
      console.log(test);
  }
};

  

  


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);