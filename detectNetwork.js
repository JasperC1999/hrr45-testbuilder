
// Given a credit card number, this function should return a string with the 
// name of a network, like 'MasterCard' or 'American Express'
// Example: detectNetwork('343456789012345') should return 'American Express'

// How can you tell one card network from another? Easy! 
// There are two indicators:
//   1. The first few numbers (called the prefix)
//   2. The number of digits in the number (called the length)

var detectNetwork = function(cardNumber) {
  // Note: `cardNumber` will always be a string
  //console.log(cardNumber)
  var firstNum = Number(cardNumber.slice(0, 1));
  var firstTwoNums = Number(cardNumber.slice(0, 2));
  var firstThreeNums = Number(cardNumber.slice(0, 3));
  var firstFourNums = Number(cardNumber.slice(0, 4));
  var firstSixNums = Number(cardNumber.slice(0, 6));
  // The Diner's Club network always starts with a 38 or 39 and is 14 digits long
  if (cardNumber.length === 14 && (firstTwoNums === 38 || firstTwoNums === 39)) {
  	return "Diner's Club";
  // The American Express network always starts with a 34 or 37 and is 15 digits long
  } else if (cardNumber.length === 15 && (firstTwoNums === 34 || firstTwoNums === 37)) {
  	return "American Express";
  // Visa always has a prefix of 4 and a length of 13, 16, or 19.
  } else if ((cardNumber.length === 13 || cardNumber.length === 16 || cardNumber.length === 19) && (firstNum === 4)) {
    if (isSwitch(cardNumber)) {
      return "Switch";
    } else {
  	return "Visa";
    }
  	// MasterCard always has a prefix of 51, 52, 53, 54, or 55 and a length of 16.
  } else if (cardNumber.length === 16 && (firstTwoNums >= 51 && firstTwoNums <= 55)) {
  	return "MasterCard";
  // Discover always has a prefix of 6011, 644-649, or 65, and a length of 16 or 19.
  } else if ((cardNumber.length === 16 || cardNumber.length === 19) && (firstFourNums === 6011 || firstTwoNums === 65 || (firstThreeNums >= 644 && firstThreeNums <= 649))) {
    return "Discover";
  // Maestro always has a prefix of 5018, 5020, 5038, or 6304, and a length of 12-19.
  } else if ((cardNumber.length >= 12 || cardNumber.length <= 19) && (firstFourNums === 5018 || firstFourNums === 5020 || firstFourNums === 5038 || firstFourNums === 6304)) {
    return "Maestro";
  // China UnionPay always has a prefix of 622126-622925, 624-626, or 6282-6288 and a length of 16-19.
  } else if ((cardNumber.length >= 16 && cardNumber.length <= 19) && (((firstSixNums >= 622126 && firstSixNums <= 622925) || (firstFourNums >= 6282 && firstFourNums <= 6288) || (firstThreeNums >= 624 && firstThreeNums <= 626)))) {
    return "China UnionPay";
  // Switch always has a prefix of 4903, 4905, 4911, 4936, 564182, 633110, 6333, or 6759 and a length of 16, 18, or 19.
  } else if (isSwitch(cardNumber)) {
    return "Switch";
  // it should fail if it doesnt meet any of this criteria  
  } else {
  	return "FAILED";
  }
  // Once you've read this, go ahead and try to implement this function, then return to the console.
};



// helper function
function isSwitch(cardNumber) {
  var firstFourNums = Number(cardNumber.slice(0, 4));
  var firstSixNums = Number(cardNumber.slice(0, 6));
  if ((firstFourNums === 4903 || firstFourNums === 4905 || firstFourNums === 4911 || firstFourNums === 4936 || firstFourNums === 6333 || firstFourNums === 6759 || 
    firstSixNums === 564182 || firstSixNums === 633110) && (cardNumber.length === 16 || cardNumber.length === 18 || cardNumber.length === 19)) {
    return true
  }
}
