class Car{
	constractor(){
		this.fuel = document.querySelector('.input-fuel');
		this.year = document.querySelector('.input-year');
		this.engine = document.querySelector('.engine-capacity');
		this.price = document.querySelector('.price-auto');
		this.currency = document.querySelector('.input-currency');
		this.btnCount = document.querySelector('.count-button');
		
		this.btnCount.addEventListener('click', this.onAddClick);
	}
	onAddClick = () => {
		console.log(this);
	}
}

const car = new Car();
console.log(car);

console.log(document.querySelector('.input-fuel'));
console.log(document.querySelector('.input-year'));
console.log(document.querySelector('.engine-capacity'));
console.log(document.querySelector('.price-auto'));
console.log(document.querySelector('.input-currency'));
console.log(document.querySelector('.count-button'));
document.querySelector('.count-button').addEventListener('click', console.log('hello'));

