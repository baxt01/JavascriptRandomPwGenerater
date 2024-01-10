// Array of special characters to be included in password
var specialCharacters = [
  '@', '%', '+', '\\', '/', '\'', '!', '#', '$', '^', '?', ':', ',', ')', '(', '}', '{', ']', '[', '~', '-', '_', '.'
];

// Array of numeric characters to be included in password
var numericCharacters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

// Array of lowercase characters to be included in password
var lowerCasedCharacters = [
  'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'
];

// Array of uppercase characters to be included in password
var upperCasedCharacters = [
  'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'
];

// Function to prompt user for password options
function getPasswordOptions() {
  var validPasswordLength = false;

  while (! validPasswordLength) {
    var passwordLength = prompt('Please enter a desired password length.');

    // if user cancelled prompt return an error
    if (passwordLength === null) {
      return {
        error: true
      };
    }

    var passwordLengthInt = parseInt(passwordLength);
    // checking that a number was entered.
    if (isNaN(passwordLengthInt)) {
      alert('Password length needs to be a number. Please try again.');
    } else if (passwordLengthInt < 8 || passwordLengthInt > 128) {
      alert('The password need to be between 8 and 128 characters long!');
    } else {
      validPasswordLength = true;
    }
  }

  var validCharacterTypesResponse = false;
  var characterTypes = ['lowercase', 'uppercase', 'numeric', 'special'];

  var characterTypesSelected = [];

  while (! validCharacterTypesResponse) {
    for(var i = 0; i < characterTypes.length; i++) {
      var characterTypeResponse = getCharacterTypeResponse(characterTypes[i]);

      if (characterTypeResponse === null) {
        // if user cancelled prompt return an error
        return {
          error: true
        };
      } else if (characterTypeResponse === true) {
        characterTypesSelected.push(characterTypes[i]);
      }
    }

    if (characterTypesSelected.length === 0) {
      alert('You must specify at least one character type to include in your password. Please try again.');
    } else {
      validCharacterTypesResponse = true;
    }
  }

  return {
    passwordLength: passwordLength,
    characterTypesSelected: characterTypesSelected
  };
}
