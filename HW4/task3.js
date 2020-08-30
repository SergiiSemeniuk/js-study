// Task 3:
// Напишите свои функции-аналоги методов массивов:
// pop,
// push,
// shift,
// unshift,
// concat
//  Варианты решения:
// используя splice
// используя length / [ ] brackets


const arr = ['sdf', 'ds', 2, [1, 2, 3], {}];
console.log(arr);
manipulationArr(arr);
function manipulationArr(arr) {
 	arr.splice(arr.length - 1, 1); //pop
	console.log(arr);

	arr.splice(arr.length, 0, 'last'); // push
	console.log(arr);

	console.log(arr.splice(0, 1)) // shift
	console.log(arr);

	arr.splice(0, 0, 'first'); // unshift
	console.log(arr);

	let arr1 = ['sfdssdf', 232, [], 34]; // concat
	let [a,b,c,d] = arr1;
	arr.splice(arr.length, 0, a, b, c, d);
	console.log(arr);
} 


