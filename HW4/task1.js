// Найти стул
// Итак, вы нашли переговорную - уф! Вы приходите туда, готовые представить, и обнаруживаете, что кто-то занял один или несколько стульев
//  !! Вам нужно быстро найти ... проверьте все другие конференц-залы, чтобы увидеть, все ли стулья заняты.
// Ваш конференц-зал может вместить до 8 стульев. нужно будет сказать вам, сколько было принято. Вам нужно найти столько.
// Найдите запасные стулья из множества конференц-залов. Каждый массив конференц-залов будет иметь количество людей в виде строки. 
// Каждый агент обозначен буквой «X». В массиве room также будет целое число, указывающее, сколько стульев в комнате.
// Вы должны вернуть массив целых чисел, который показывает, сколько стульев вы берете из каждой комнаты по порядку, 
// пока у вас не будет требуемого количества.
// пример: [['XXX', 3], ['XXXXX', 6], ['XXXXXX', 9], ['XXX', 2]], когда вам нужно 4 стула:
// result -> [0, 1, 3] (в комнате 0 нет свободных стульев, возьмите 1 из комнаты 1, возьмите 3 из комнаты 2. 
// Нет необходимости рассматривать комнату 4, так как у вас уже есть 4 стула.
// Если вам не нужны стулья, верните «Игра включена». Если запасных стульев недостаточно, верните «Недостаточно!»

// meeting([['XXX', 3], ['XXXXX', 6], ['XXXXXX', 9]], 4) ---> [0, 1, 3]
// meeting([['XXX', 1], ['XXXXXX', 6], ['X', 2], ['XXXXXX', 8], ['X', 3], ['XXX', 1]], 5) ---> [0, 0, 1, 2, 2]
// meeting([['XX', 2], ['XXXX', 6], ['XXXXX', 4]], 0) ---> 'Game On'
// meeting([['XX', 2], ['XXXX', 6], ['XXXXX', 4]], 4) ---> 'Not enough!'

const seatsHall = 8;
const needChairs = 5;
const arr = [['XXX', 1], ['XXXXXX', 6], ['X', 2], ['XXXXXX', 8], ['X', 3], ['XXX', 1]];
console.log(arr);
let arr1 = [];
let sumChairs = 0;
let result = 0;
if (needChairs <= 0) {
	console.log('Game On');
} 
if (needChairs > 0 && needChairs <= 8) {
	searchChairs(needChairs, arr);
	result == 0 ? console.log('Not enough!') : console.log(result);
} else {
	console.log('дичь!');
}
function searchChairs(needChairs, arr) {
	for (let i = 0; i < arr.length; i++) {
	 	if (arr[i][0].length < arr[i][1]) {
	 	arr1[i] = arr[i][1] - arr[i][0].length;
	 	}else {
	 	arr1[i] = 0;
	 	}
	}
	console.log(arr1);
		for (let i = 0; i < arr1.length; i++) {
		if (sumChairs >= needChairs){
		arr1.length = i;
		return result = arr1;
		}else {
		sumChairs += arr1[i];
		}
	}
}

