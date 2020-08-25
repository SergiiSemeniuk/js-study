//task 1
const L = +prompt('Введите длину помещения в метрах', '20');
const W = +prompt('Введите ширину помещения в метрах', '10');
const H = +prompt('Введите высоту помещения в метрах', '2.5');
const onePaint = 16;
const oneMetr = 1 / onePaint;
function minPaint(l, w, h, oneMetr) {
	s = Math.ceil((l**2 + w**2) * h * oneMetr);
	return s;
}
let result = minPaint(L, W, H, oneMetr);
alert(result);