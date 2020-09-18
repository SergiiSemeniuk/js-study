class Car{
	constructor(inpEngine, inpPrice){
		this.inpFuel = document.querySelector('.input-fuel');
		this.inpYear = document.querySelector('.input-year');
		this.inpEngine = inpEngine;
		this.inpPrice = inpPrice;
		this.inpCurrency = document.querySelector('.input-currency');
		this.btnCount = document.querySelector('.count-button');
		this.showCustoms = document.querySelector('.customs');
		this.showCost = document.querySelector('.cost-car');
		this.showToll = document.querySelector('.toll-show');
		this.showExcise = document.querySelector('.excise-show');
		this.showVat = document.querySelector('.VAT-show');

				
		this.btnCount.addEventListener('click', this.onClick);
	}
	
	onClick = () => {
		console.log(this);
		const fuel = this.inpFuel.options.selectedIndex;
		const year = this.inpYear.options.selectedIndex;
		const engine = this.inpEngine.value;
		const price = this.inpPrice.value;
		const currency = this.inpCurrency.options.selectedIndex;
		console.log(fuel);
		console.log(year);
		console.log(currency);
		console.log(engine);
		console.log(price);
		this.calculate(price, fuel, engine, year);
	}
	calculate(price, fuel, engine, year){
	 	
	 	let rate = 0;
	 	switch(fuel){
		    case 0 : {
		        engine < 3000 ? rate = 50 : rate = 100;
		        console.log(rate);
		        break;
		    }
		    case 1 : {
		        engine < 3500 ? rate = 75 : rate = 150;
		        console.log(rate);
		        break;
		    }
		    default : {
	        	rate = 1;
	    	}
		}
		this.toll = Math.round(price * 0.1);
		this.excise = Math.round(rate * (engine / 1000) * (year + 1));	
		this.vat = Math.round((this.excise + this.toll + price * 1) * 0.2);  
		this.sumCustoms = Math.round(this.excise + this.toll + this.vat);
		this.costCar = Math.round(price * 1 + this.sumCustoms);
	
		this.renderList();
	}

	renderList(){
		this.showToll.innerText = `${ this.toll }`;
		this.showExcise.innerText = `${ this.excise }`;
		this.showVat.innerText = `${ this.vat }`;
		this.showCustoms.innerText = `${ this.sumCustoms }`;
		this.showCost.innerText = `${ this.costCar }`;
	} 
}


const inpEngine = document.querySelector('.engine-capacity');
const inpPrice = document.querySelector('.price-auto');
const showCustoms = document.querySelector('.customs');
const showCost = document.querySelector('.cost-car');
const showToll = document.querySelector('.toll-show');
const showExcise = document.querySelector('.excise-show');
const showVat = document.querySelector('.VAT-show');

inpEngine.addEventListener('click', clearShow); 	
inpPrice.addEventListener('click', clearShow);

function clearShow(){
	showToll.innerText = '';
	showExcise.innerText = '';
	showVat.innerText = '';
	showCustoms.innerText = '';
	showCost.innerText = '';
}

inpCheck(inpEngine);
inpCheck(inpPrice);
function inpCheck(el){
	el.addEventListener('keyup', ()=> el.value = el.value.replace(/\D/g, ''));

}
	


const car = new Car(inpEngine, inpPrice);
console.log(car);

// console.log(document.querySelector('.input-fuel'));
// console.log(document.querySelector('.input-year'));
// console.log(document.querySelector('.engine-capacity'));
// console.log(document.querySelector('.price-auto'));
// console.log(document.querySelector('.input-currency'));
// console.log(document.querySelector('.count-button'));
// document.querySelector('.count-button').addEventListener('click', console.log('hello'));

