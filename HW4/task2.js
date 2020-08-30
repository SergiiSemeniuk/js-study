// Если бы мы создали игру в крестики-нолики, мы бы хотели знать, решено ли текущее состояние доски, не так ли? 
// Наша цель - создать функцию, которая будет проверять это за нас!
// Предположим, что доска представлена ​​в виде массива 3x3, где значение равно 0, если точка пуста, 1, если это «X», или 2, если это «O», 
// например:
// [[0, 0, 1],
//  [0, 1, 2],
//  [2, 1, 0]]
// Мы хотим, чтобы наша функция возвращалась:
// -1 если доска еще не закончена (есть пустые места),
// 1, если выиграл «Х»,
// 2 если выиграл «О»,
// 0, если это кошачья игра (т.е. ничья).
// Вы можете предположить, что переданная доска действительна в контексте игры в крестики-нолики.
const arr = [[1, 1, 1],
 			 [0, 1, 2],
 			 [2, 1, 1]];
let i = 0, j = 0, k = 1, l = 2;
let horizontal = arr[i][j] == arr[i][k] && arr[i][j] == arr[i][l];
let vertical = arr[j][i] == arr[k][i] && arr[j][i] == arr[l][i];
let diagonal = arr[j][j] == arr[k][k] && arr[j][j] == arr[l][l] || arr[j][l] == arr[k][k] && arr[j][l] == arr[l][j];
let is0 = arr[i][j] == 0 || arr[i][k] == 0 || arr[i][l] == 0;
console.log(horizontal);
console.log(vertical);
console.log(diagonal);
for (i, j, k, l; i < arr.length; i++) {
	 	if ((horizontal || vertical || diagonal) && !is0) {
	 		console.log('есть победитель');
	 	} else if (is0) {
	 		console.log('есть пустые места');
	 		break;
	 	} else {
	 		console.log('0, это кошачья игра, ничья');
	 	} 
}
