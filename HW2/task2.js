//task 2 
// Требуется написать программу, которая определяет, за какую сумму предприимчивые сотрудники смогут продать весь песок в случае наилучшего для себя заполнения емкостей песком.
// Входные данные
// Пользователь вводит с клавиатуры 6 натуральных чисел A1, A2, A3, B1, B2, B3. Все числа не превосходят 100.
// Выходные данные
// Вывести на экран единственное целое число – сумму в рублях, которую смогут сотрудники заработать в случае наилучшего для себя заполнения емкостей песком.


const inputValue = prompt('Введите три значения стомости 1 кг золотого песка в рублях через запятую', '4, 40, 78');
let arrGold = inputValue.split(', ', 3);
let mostValua = Math.max(...arrGold);
let lowestValua = Math.min(...arrGold);
let midlleValua = 0;
if (+arrGold[0] !== mostValua && +arrGold[0] !== lowestValua) {
	midlleValua = +arrGold[0];
} else if (+arrGold[1] !== mostValua && +arrGold[1] !== lowestValua) {
	midlleValua = +arrGold[1];
} else {
	midlleValua = +arrGold[2];
}
console.log(mostValua, midlleValua, lowestValua);

const inputCapacity = prompt('Введите три значения того, сколько кг вмещает емность под золото через запятую', '10, 15, 40');
let arrCapacity = inputCapacity.split(', ', 3);
let mostCapacity = Math.max(...arrCapacity);
let lowestCapacity = Math.min(...arrCapacity);
let midlleCapacity = 0;
if (+arrCapacity[0] !== mostCapacity && +arrCapacity[0] !== lowestCapacity) {
	midlleCapacity = +arrCapacity[0];
} else if (+arrCapacity[1] !== mostCapacity && +arrCapacity[1] !== lowestCapacity) {
	midlleCapacity = +arrCapacity[1];
} else {
	midlleCapacity = +arrCapacity[2];
}
console.log(mostCapacity, midlleCapacity, lowestCapacity);

function fullFill(A1, A2, A3, B1, B2, B3) {
	return A1 * B1 + A2 * B2 + A3 * B3;
}
let result = fullFill(mostValua, midlleValua, lowestValua, mostCapacity, midlleCapacity, lowestCapacity);
alert(`В лучшем случае вы "заработаете" ${result} рублей` );

