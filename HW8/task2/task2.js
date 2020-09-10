// Сделайте слайдер с возможностью смены изображений:
// Кнопка вперед(следующее изображение)
// Кнопка назад(предыдущее изображение)

const imageArr = ['img/img1.jpg', 'img/img2.jpg', 'img/img3.jpeg', 'img/img4.jpg', 'img/img5.jpg'];
const pref = document.getElementById("button_prev");
const next = document.getElementById("button_next");

document.getElementById("gallery").innerHTML = (`<img id = "img" src = "${imageArr[0]}" alt = "" width = "600" height = "400" >`);

let image = document.getElementById("img");
let count = 0;

next.onclick = () => {
    count++;
    if (count == imageArr.length) {
    count = 0;
    }
    image.src = imageArr[count];
}

pref.onclick = () => {    
    count--;
    if (count < 0) {
    	count = imageArr.length - 1;
    }
 	image.src = imageArr[count];
}

