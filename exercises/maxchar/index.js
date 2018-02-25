// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"
/*similar questions:
most common character in the string
string A has the same characters as string B
a given string has repeated characters in it

"Hello There" 
H:1,
e:3,
l:2,
o:1,
" ":1,
t:1,
h:1,
r:1,
!:1
*/
function maxChar(str) {

	/*iterate through the string chars, 
	when the char shows up 1st time, 
	then set the index as 1,
	else ++*/
	const charMap = {};
	let max = 0;
	let maxChar = '';
	
	for(let char of str){
		charMap[char] = charMap[char]+1 || 1;
	}

	for(let char in charMap){
		if(charMap[char] > max){
			max = charMap[char];
			maxChar = char;
		}
	}
	//console.log(charMap);
	
	return maxChar;

}

module.exports = maxChar;
