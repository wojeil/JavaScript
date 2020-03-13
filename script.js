// Assignment Code


var generateBtn = document.querySelector("#generate");
//array character bank named X. split the array into 4 arrays.
var upper = ["A","B","C","D","E","F", "G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","Z","Y","Z"]; 
var lower =["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
var number =["1","2","3","4","5","6","7","8","9","0",];
var special =["!","@","#","$","%","^","&","*","(",")","_","+"];

//password set up variable
var fP = "";

//Function for Generate
function generatePassword() {
 //prompts and confirms added
  var nC1 = prompt("How many characters would you like to use");
  var nC2 = confirm("Do you want a lower case character?");
  var nC3 = confirm("Do you want an UPPER CASE CHARACTER?");
  var nC4 = confirm("Do you want to use any numbers");
  var nC5 = confirm("Do you want any special Characters?");

  console.log(nC1);
  console.log(nC2);
  console.log(nC3);
  console.log(nC4);

  //if yes to lower case 
  if (nC2) {
    fP += lower
    console.log(fP);
  }
  //if we want UPPER CASE
  if (nC3){
    fP += upper
    console.log(fP);
  }
  //If we want numbers
  if (nC4){
    fP += number
    console.log(fP);
  }
  //If we want special
  if (nC5){
    fP += special
    console.log(fP);
  }


// for loop 
  for (let index = 0; index < nC1.length; index++) {

    
    
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

