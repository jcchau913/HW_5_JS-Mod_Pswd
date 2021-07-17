// Array of special characters to be included in password
var specialCharacters = [
  '@',
  '%',
  '+',
  '\\',
  '/',
  "'",
  '!',
  '#',
  '$',
  '^',
  '?',
  ':',
  ',',
  ')',
  '(',
  '}',
  '{',
  ']',
  '[',
  '~',
  '-',
  '_',
  '.'
];

// Array of numeric characters to be included in password
var numericCharacters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

// Array of lowercase characters to be included in password
var lowerCasedCharacters = [
  'a',
  'b',
  'c',
  'd',
  'e',
  'f',
  'g',
  'h',
  'i',
  'j',
  'k',
  'l',
  'm',
  'n',
  'o',
  'p',
  'q',
  'r',
  's',
  't',
  'u',
  'v',
  'w',
  'x',
  'y',
  'z'
];

// Array of uppercase characters to be included in password
var upperCasedCharacters = [
  'A',
  'B',
  'C',
  'D',
  'E',
  'F',
  'G',
  'H',
  'I',
  'J',
  'K',
  'L',
  'M',
  'N',
  'O',
  'P',
  'Q',
  'R',
  'S',
  'T',
  'U',
  'V',
  'W',
  'X',
  'Y',
  'Z'
];

var getLength;
var getLowerCase;
var getUpperCase;
var getNumeric;
var getSpecChar;

// Function to prompt user for password options
function getPasswordOptions() {
  var validLength = false;
  var validType = false;
  while (!validLength) {
    getLength = prompt("Length of password (10-64): ");
    if (parseInt(getLength) >=10 && parseInt(getLength) <= 64) {
      validLength = true;
    }
    else { 
      alert ("You must enter a number between 10 and 64"); 
    }
  }
  while (!validType) {
    getLowerCase = confirm("Include lower case?");
    getUpperCase = confirm("Include upper case?");
    getNumeric = confirm("Include numeric?");
    getSpecChar = confirm("Include special characters?");
    if (getLowerCase || getUpperCase || getNumeric || getSpecChar) {
      validType = true;
    }
    else {
      alert ("You must select at least one type of character for your password.");
    }
  }
}

// Function for getting a random element from an array
function getRandom(arr) {
  randChar = arr[Math.floor(Math.random() * arr.length)];
  return randChar;
}

// Function to generate password with user input
function generatePassword() {

  var randType;
  var buildPassword = "";
  var criteriaMatch = false;

  getPasswordOptions();
  for (let x=0; x<getLength; x++){
    criteriaMatch=false;
    while (criteriaMatch === false) {
      randType = Math.floor(Math.random() * 4);     
      if (randType===0 && getLowerCase) {
        buildPassword = buildPassword + getRandom(lowerCasedCharacters);
        criteriaMatch = true;
      }
      else if (randType===1 && getUpperCase) {
        buildPassword = buildPassword + getRandom(upperCasedCharacters);
        criteriaMatch = true;
      }
      else if (randType===2 && getNumeric) {
        buildPassword = buildPassword + getRandom(numericCharacters);
        criteriaMatch = true;
      }
      else if (randType===3 && getSpecChar) {
        buildPassword = buildPassword + getRandom(specialCharacters);
        criteriaMatch = true;
      }
    }
  }
  return buildPassword;
}

// Get references to the #generate element
var generateBtn = document.querySelector('#generate');

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector('#password');

  passwordText.value = password;
  console.log (password);
}

// Add event listener to generate button
generateBtn.addEventListener('click', writePassword);


