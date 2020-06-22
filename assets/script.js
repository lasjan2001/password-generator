 // Event listener added to Generate Password button
document.querySelector("#generate").addEventListener("click", writePassword);

// Necessary Arrays
 var lowercase = [
	'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 
	'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'
  ];
  
  var uppercase = [
	'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M',
	'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'
  ];
  
  var numbers = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
  
  var specChars = [
	'!', '@', '#', '$', '&', '*', '?', '-', '_', '+'
  ];

// Variable Declarations
var passwordLength = "";
var lowerChar;
var upperChar;
var numericChar;
var specialChar;

window.alert("Welcome to Password Generator!");

window.alert("Click on the Generate Password button to begin generating a strong, secure password!");

// Determine Password Length
function generatePassword() {
	var passwordLength = (prompt("How long would you like to make your password? (8-character minimum required!)"));
  
	// Loop if minimum requirement is not met
	while(passwordLength <= 7 || passwordLength >= 129) {
		alert("Your password length must be between 8-128 characters. Please try again.");
		var passwordLength = (prompt("How long would you like to make your password? Please enter a minimal numeric value of 8!"));
		} 
  
		// Remind user of how many characters were chosen 
		alert(`Your password will have ${passwordLength} characters.`);
  
	  // Password Options 
	  var lowerChar = confirm("Click OK to include lowercase characters.");
	  var upperChar = confirm("Click OK to include uppercase characters");
	  var numericChar = confirm("Click OK to include numeric characters.");  
	  var specialChar = confirm("Click OK to include special characters.");
	     
		// Loop if at least one parameter is not chosen
		while(upperChar === false && lowerChar === false && specialChar === false && numericChar === false) {
		  alert("You are required to choose at least one password parameter!");
		  var lowerChar = confirm("Click OK to include lowercase characters.");
	 	  var upperChar = confirm("Click OK to include uppercase characters");
	  	  var numericChar = confirm("Click OK to include numeric characters.");  
	  	  var specialChar = confirm("Click OK to include special characters.");  
	  } 
  
		// Actions for Password Parameters
		var passwordCharacters = []
	
		if (lowerChar) {
			passwordCharacters = passwordCharacters.concat(lowercase)
		  }

		if (upperChar) {
			passwordCharacters = passwordCharacters.concat(uppercase)
		  }

		if (numericChar) {
			passwordCharacters = passwordCharacters.concat(numbers)
		  }
		  
		if (specialChar) {
		passwordCharacters = passwordCharacters.concat(specChars)
	  }
  
		console.log(passwordCharacters)
  
		// Randomize Password 
		var randomPassword = ""
		
		for (var i = 0; i < passwordLength; i++) {
		  randomPassword = randomPassword + passwordCharacters[Math.floor(Math.random() * passwordCharacters.length)];
		  console.log(randomPassword)
		}
		return randomPassword;
  }
  
  // Password appears to page! YAY!
  function writePassword() {
	var password = generatePassword();
	var passwordText = document.querySelector("#password");
  
	passwordText.value = password;
  }
  

  

