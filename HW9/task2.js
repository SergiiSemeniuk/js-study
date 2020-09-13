// Реализовать класс, описывающий простой маркер. В классе должны быть следующие компоненты:
// ■ поле, которое хранит цвет маркера(зарезервированные слова);
// ■ поле, которое хранит количество чернил в маркере (число с плавающей запятой от 0 до 100);
// ■ метод для печати (метод принимает строку и выводит текст соответствующим цветом; текст выводится до тех пор, 
// 	пока в маркере есть чернила; один не пробельный символ – это 0,5% чернил в маркере).
// *Реализовать класс, описывающий заправляющийся маркер, унаследовав его от простого маркера и добавив метод для заправки маркера. 
// Продемонстрировать работу написанных методов

class Marker {
	constructor(color, ink) {
    this.color = color;
    this.ink = ink;    
  	}
	print(text){
        if (this.ink == 0) {
        	console.log('чернила закончились, печать невозможна');
        }
        if (this.ink > 0 && this.ink <= 100) {      
        	
        	console.log ( '%c%s', `color: ${this.color};`, `${text.substr(0, Math.floor(this.ink * 2))}` );
        } else {
        	console.log('Странный маркер');
        }
        
   		   
    }
}

class RefillableMarker extends Marker {
	refueling(){
		this.ink = 100;

	}
}

const marker = new Marker ('red', 10);
marker.print('12345 67 89    0');

const marker1 = new RefillableMarker ('green', 2);
marker1.print('12345 67 89    0');
marker1.refueling();
marker1.print('12345 67 89    0');

