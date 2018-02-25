// --- Directions
// Given a string, return true if the string is a palindrome
// or false if it is not.  Palindromes are strings that
// form the same word if it is reversed. *Do* include spaces
// and punctuation in determining if the string is a palindrome.
// --- Examples:
//   palindrome("abba") === true
//   palindrome("abcdefg") === false

/*one without reverse() 
[0,10,14] is every value greater than 5
array.every( (val)=>val>5 ) */
function palindrome(str) {
	return str.split('').every((char, i) => {
		return char === str[str.length-i-1];
	});
}

module.exports = palindrome;


// the staight forward one
/*function palindrome(str) {
	return str === str.split('').reverse().join('');
	
}*/