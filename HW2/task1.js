//task 1

const inputParameters = input();
function input() {
	return prompt('Введите параметры помещения в метрах через запятую: длина, ширина, высота потолка', '20, 10, 2.5');
}
let arr = inputParameters.split(', ', 3);
const L = arr[0];
const W = arr[1];
const H = arr[2];
const onePaint = 16;
if ((0 < L && L < 1000) && (0 < W && W < 1000) && (0 < H && H < 1000)) {
	let result = minPaint(L, W, H, onePaint);
	alert(`Минимальное количество банок краски, необходимых для покраски стен - ${result}`);
}else {
		alert('Упс.., попробуйте ввести значение еще раз');
		input();
	}
function minPaint(l, w, h, onePaint) {
			return Math.ceil((l*2 + w*2) * h / onePaint);
	}



