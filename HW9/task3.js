// task3
// Реализовать класс, описывающий окружность. В классе должны быть следующие компоненты:
// ■ поле, хранящее радиус окружности;
// ■ get-свойство, возвращающее радиус окружности;
// ■ set-свойство, устанавливающее радиус окружности;
// ■ get-свойство, возвращающее диаметр окружности;
// ■ метод, вычисляющий площадь окружности;
// ■ метод, вычисляющий длину окружности.
// Продемонстрировать работу свойств и методов.

class Circle {
	// _radius = 0;
	constructor(radius) {
    this._radius = radius;        
  	}
  	get radius() {
    	return this._radius;
  	}
  	set radius(value) {
    	this._radius = value;
  	}
  	get diameter() {
  		return this._radius * 2;
  	}
  	calculateAreaCircle (){
  	console.log(this._radius ** 2 * Math.PI);
  	}
  	calculateCircumference (){
  	console.log(this.diameter * Math.PI);
  	}
}

const circle = new Circle (100);
console.log(circle);
console.log(circle.radius);
circle.radius = 50;
console.log(circle.radius);
console.log(circle.diameter);
circle.calculateAreaCircle();
circle.calculateCircumference();