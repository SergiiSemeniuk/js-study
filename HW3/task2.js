// Task 2:
// Deoxyribonucleic acid (DNA) is a chemical found in the nucleus of cells and carries the "instructions" for the development and functioning of living organisms.
// If you want to know more http://en.wikipedia.org/wiki/DNA
// In DNA strings, symbols "A" and "T" are complements of each other, as "C" and "G". You have function with one side of the DNA (string, except for Haskell); you need to get the other complementary side. DNA strand is never empty or there is no DNA at all (again, except for Haskell).


// Дезоксирибонуклеїнова кислота (ДНК) - хімічна речовина, яка знаходиться в ядрі клітин і несе «вказівки» щодо розвитку та 
// функціонування живих організмів.
// У рядках ДНК символи "A" і "T" є доповненнями один одного, як "C" і "G". 
// Ви маєте функцію з однієї сторони ДНК (рядок, крім Haskell); вам потрібно отримати іншу доповнюючу сторону. 
// ДНК-ланцюг ніколи не порожній або взагалі немає ДНК (знову ж таки, за винятком Haskell).

dnaChang(prompt('Enter the DNA string', 'ATTCGGCA'));
function dnaChang(dna) {
	let arr = dna.split('');
	let arr1 = [];
	for (let i = 0; i < arr.length; i++) {
	 	if (arr[i] == 'A') {	 		
	 		arr1[i] = 'T';
	 		}
		if (arr[i] == 'T') {
	 		arr1[i] = 'A';
	 	}
	 	if (arr[i] == 'C') {
	 		arr1[i] = 'G';	 		
	 	}
	 	if (arr[i] == 'G') {
	 		arr1[i] = 'C';	 		
	 	}
	 } 
	 alert(arr1.join(''));
}