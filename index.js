function isPalindrome(word) {
  let wordArr = word.split('')
  let reverseArr = wordArr.reverse()
  let reverseWord = reverseArr.join('')
  if(word === reverseWord) {
    return true
  } else {
    return false
  }
}

/* 
  turn the word into an array and assign to a variable
  reverse the new array and save as a variable
  turn the reversed array into a string and save as a variable
    if the input is equal to the reversed string
      return true
    else
      return false
*/

/*
  the string input should be equal to the string if it is spelled backwards
  or reversed
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
