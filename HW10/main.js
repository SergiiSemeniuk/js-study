class Car{
	url = 'https://api.privatbank.ua/p24api/pubinfo?json&exchange&coursid=5';

	constructor(){
		this.inpFuel = inpFuel;
		this.inpYear = inpYear;
		this.inpEngine = inpEngine;
		this.inpPrice = inpPrice;
		this.showCustoms = showCustoms;
		this.showCost = showCost;
		this.showToll = showToll;
		this.showExcise = showExcise;
		this.showVat = showVat;
		this.inpBattery = document.querySelector('.battery-capacity');
		this.inpCurrency = document.querySelector('.input-currency');
		this.btnCount = document.querySelector('.count-button');
		this.usdCur = document.querySelector('.usd-currency');
		this.euroCur = document.querySelector('.euro-currency');

		this.loadExchangeRates();		
		this.btnCount.addEventListener('click', this.onClick);
	}

	loadExchangeRates(){
        fetch(this.url)
            .then(req => req.json())
            .then(data => this.showExchangeRates(data));
    }

	showExchangeRates(data){	
		[this.doll, this.euro] = data;	
		this.usdCur.value = this.doll.buy.slice(0,5);
		this.euroCur.value = this.euro.buy.slice(0,5);
	}

	onClick = () => {
		console.log(this);
		this.fuel = this.inpFuel.options.selectedIndex;
		this.year = this.inpYear.options.selectedIndex;
		this.engine = this.inpEngine.value;
		this.price = this.inpPrice.value;
		this.currency = this.inpCurrency.value;
		this.battery = this.inpBattery.value;

		this.calculate();
	}

	calculate(){	 	
	 	this.rate = 0;
	 	switch(this.fuel){
		    case 0 : {
		        this.engine < 3000 ? this.rate = 50 : this.rate = 100;		
		        this.count();      
		        break;
		    }
		    case 1 : {
		        this.engine < 3500 ? this.rate = 75 : this.rate = 150;	
		        this.count();        
		        break;
		    }
		    case 2 : {
		        this.toll = 0; 
		        this.excise = Math.round(1 * this.battery);   
		        this.vat = 0;
		        this.sumCustoms = this.excise;
		        this.costCar = Math.round(this.price * 1 + this.sumCustoms);
		        break;
		    }
		    case 3 : {
		        this.toll = Math.round(this.price * 0.1);
		        this.excise = 100;   
		        this.vat = Math.round((this.excise + this.toll + this.price * 1) * 0.2);
		        this.sumCustoms = Math.round(this.excise + this.toll + this.vat);
		        this.costCar = Math.round(this.price * 1 + this.sumCustoms);
		        break;
		    }
		    default : {
	        	this.rate = 1;
	    	}
		}		
		if (this.currency == '€') {
			this.renderList(1);
		}
		if (this.currency == '$') {
			this.renderList(this.euro.buy / this.doll.buy);
		}
		if (this.currency == '₴') {
			this.renderList(this.euro.buy*1);
		}
			
	}
	count(){
			this.toll = this.price * 0.1;
			this.excise = this.rate * (this.engine / 1000) * (this.year + 1);	
			this.vat = (this.excise + this.toll + this.price * 1) * 0.2;  
			this.sumCustoms = this.excise + this.toll + this.vat;
			this.costCar = this.price * 1 + this.sumCustoms;
	}

	renderList(carrency){
		this.showToll.innerText = `${ Math.round(this.toll * carrency) } ${ this.currency }`;
		this.showExcise.innerText = `${ Math.round(this.excise * carrency) } ${ this.currency }`;
		this.showVat.innerText = `${ Math.round(this.vat * carrency) } ${ this.currency }`;
		this.showCustoms.innerText = `${ Math.round(this.sumCustoms * carrency) } ${ this.currency }`;
		this.showCost.innerText = `${ Math.round(this.costCar * carrency) } ${ this.currency }`;
	} 
}


const inpEngine = document.querySelector('.engine-capacity');
const inpPrice = document.querySelector('.price-auto');
const showCustoms = document.querySelector('.customs');
const showCost = document.querySelector('.cost-car');
const showToll = document.querySelector('.toll-show');
const showExcise = document.querySelector('.excise-show');
const showVat = document.querySelector('.VAT-show');
const inpFuel = document.querySelector('.input-fuel');
const inpYear = document.querySelector('.input-year');
const inpYearDiv = document.querySelector('.choice-year');
const inpEngineDiv = document.querySelector('.choice-engine');
const inpBatteryDiv = document.querySelector('.choice-battery');


inpFuel.addEventListener('click', display); 
inpFuel.addEventListener('click', clearShow);
inpEngine.addEventListener('click', clearShow); 	
inpPrice.addEventListener('click', clearShow); 
inpYear.addEventListener('click', clearShow); 

function display() {
	if (inpFuel.options.selectedIndex == 0 || inpFuel.options.selectedIndex == 1) {	
	inpYearDiv.style.display = "block";
	inpEngineDiv.style.display = "block";
	inpBatteryDiv.style.display = "none";
	}
	if (inpFuel.options.selectedIndex == 2) {	
	inpYearDiv.style.display = "none";
	inpEngineDiv.style.display = "none";
	inpBatteryDiv.style.display = "block";
	}
	if (inpFuel.options.selectedIndex == 3){	
	inpYearDiv.style.display = "none";
	inpEngineDiv.style.display = "none";
	inpBatteryDiv.style.display = "none";
	}
	
}

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

const car = new Car();




