const inputNumber = +prompt('Введите номер билета:', '385916');
if (inputNumber >= 0 && inputNumber < 10**6) {
	const six = inputNumber % 10;
	const five = ((inputNumber - six) / 10) % 10;
	const four = ((inputNumber - (five * 10 + six)) / 100) % 10;
	const three = ((inputNumber - (four * 100 + five * 10 + six)) / 1000) % 10;
	const two = ((inputNumber - (three * 1000 + four * 100 + five * 10 + six)) / 10000) % 10;
	const one = ((inputNumber - (two * 10000 + three * 1000 + four * 100 + five * 10 + six)) / 100000) % 10
	console.log(six, five, four, three, two, one);
	const firstHalf = one + two + three;
	const secondHalf = four + five + six;
	firstHalf === secondHalf ? alert('YES') : alert('NO');
} else { 
	alert('Упс..');
}