// Assignment Code


var generateBtn = document.querySelector("#generate");


function generatePassword(){


var numChar = prompt("How many characters would you like to use");
console.log(numChar);




  return "numChar"
}
// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
