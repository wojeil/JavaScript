// Assignment Code


var generateBtn = document.querySelector("#generate");
//array character bank named X. split the array into 4 arrays.
var upper = ["A","B","C","D","E","F", "G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","Z","Y","Z"]; 
var lower =["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
var number =["1","2","3","4","5","6","7","8","9","0",];
var special =["!","@","#","$","%","^","&","*","(",")","_","+"];

//password set up variable
var fillP = "";
var completeP = "";
//Function for Generate
function generatePassword() {
  //to help reset password 
  password="";
  fillP ="";
  completeP="";
 //prompts and confirms added
  var nC1 = prompt("How many characters would you like to use?");
  if (nC1 < 8 || nC1 > 128) {
    alert("The number you slected has to be no less than 8 characters and no greater than 128 characters. Sorry Try again!")
    return generatePassword();
  }
  var nC2 = confirm("Do you want a lower case character?");
  var nC3 = confirm("Do you want an UPPER CASE CHARACTER?");
  var nC4 = confirm("Do you want to use any numbers");
  var nC5 = confirm("Do you want any special Characters?");

  console.log(nC1);
  console.log(nC2);
  console.log(nC3);
  console.log(nC4);

  //if yes to lower case // added .join(""); so that i can change the the array in a string 
  if (nC2) {
    fillP += lower.join("");
    console.log(fillP);
  }
  //if we want UPPER CASE
  if (nC3){
    fillP += upper.join("");
    console.log(fillP);
  }
  //If we want numbers
  if (nC4){
    fillP += number.join("");
    console.log(fillP);
  }
  //If we want special
  if (nC5){
    fillP += special.join("");
    console.log(fillP);
  }


// for loop 
 for (var index = 0; index < nC1; index++) {
    completeP += fillP[Math.floor(Math.random() * fillP.length)]; 
}
  return completeP;
}
// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);