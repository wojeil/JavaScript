// Assignment Code


var generateBtn = document.querySelector("#generate");


function generatePassword() {
  var X = ["A","B","C","D","E","F", "G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","Z","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z","1","2","3","4","5","6","7","8","9","0","!","@","#","$","%","^","&","*","(",")","_","+"]; //array character bank named X.
  
  var numChar = prompt("How many characters would you like to use");
  console.log(numChar);
  
  for (let index = 0; index < X.length; index++) {

    
    
  }

}
// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
