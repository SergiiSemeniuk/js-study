// Simple, given a string of words, return the length of the shortest word(s).
// String will never be empty and you do not need to account for different data types.

countLetters(prompt('Enter a word string', 'lets talk about javascript the best language'))
function countLetters(inString) {
	let arr = inString.split(' ');
	let arr1 = arr.map(word => word.length);	
	//let arr1 = arr.map(function(word) { return word.length });
	let result = Math.min(...arr1);
	alert(`The shortest word in a string consists of ${result} characters`)
}