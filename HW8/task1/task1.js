
let table = document.getElementById('table');
	console.log(table);

	
	
paintingSquares(table);

function paintingSquares(table) {
	const div = document.getElementById('div1');

	const arrSquares = Array.from(document.querySelectorAll('td'));
	console.log(arrSquares);

	const timer = setInterval(() => { 

	const randSquare = arrSquares.random();
	let randColor = `#${Math.random().toString(16).slice(2,8)}`;
	arrSquares.splice(randSquare, 1)[0];
	
	console.log(randSquare);
	randSquare.style.backgroundColor = randColor;	
	
	console.log(arrSquares);
	if(arrSquares.length == 0) {
            clearInterval(timer);
            div.innerHTML = '<h2>Заполнение завершено<h2>'; 
        }                   
}, 100);

	Array.prototype.random = function () {
  	return this[Math.floor((Math.random()*this.length))];
	}
}

