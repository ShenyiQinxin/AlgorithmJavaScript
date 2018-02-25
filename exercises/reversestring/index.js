// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'




module.exports = reverse;


/*solution 1 : turn str into an array, call reverse method on the array, join the array back into a string, return result*/
/*function reverse(str) {
	return str.split('').reverse().join('');
}*/


/*solution2: create an empty string called 'reversed',
for each character in the string, take the character and add it to the start of reversed, return the variable 'reversed'*/
/*function reverse(str) {
	let reversed = '';
	for(let character of str){
		reversed = character + reversed;
	}
	return reversed;
}*/

/*solution3: reduce helper
reduce(call-back, initial value)*/
function reverse(str) {
	return str.split('').reduce((rev, char) => char+rev, '');
}

/*manually call the function that being debugered*/
reverse('asdf');

/*
debugger steps
add debugger stat in the func
call the func manually after the func
terminal, node inspect index.js
to continue execution, c
launch a repl session, repl
exit the repl, Control+c
exit all, exit

*/