//task 2
// Напишите приложение, которое помогает пользвателю натренироваться в простых математических 
// операциях(сложение/вычитание/деление для чисел от 10 до 100, и умножение для чисел от 2 до 30). 
// При заходе на страницу пользователю генерируется математическое выражение. 
// Пользователь должен ввести результат в поле ввода и нажать на кнопку "Проверить". 
// Если все верно - генерируется новое выражение, а пользователь получает сообщение "Все верно".

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min; 
}


Array.prototype.random = function () {
  return this[Math.floor((Math.random()*this.length))];
}


let arrAct = ['+','-','/','*'];
addTag();


function arithmetic() {
	let arrEx = elem1.innerHTML.split(' ');
	let [num1, oper, num2] = arrEx;
	let res;
	 switch(oper){
	    case '+' : {
	       res = num1*1 + num2*1;
	        break;
	    }
	    case '-' : {
	       res = +num1 - num2;
	        break;
	    }
	    case '/' : {
	       res = +num1 / num2;
	        break;
	    }
	    case '*' : {
	       res = +num1 * num2;
	        break;
	    }
	    default : {
	        console.log('Шота не то :( ');
	    }
	}
	alert(res == input1.value ? 'Все верно' : 'Подумай еще');		
}


function addTag() {
	div1.innerHTML = `<div id="elem1">${getRandomInt(10,101)} ${arrAct.random()} ${getRandomInt(10,101)} = </div>`;
	input1.value = '';
}


button1.addEventListener("click", arithmetic); 
button1.addEventListener("click", addTag); 



