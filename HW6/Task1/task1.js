
arrXY = [0,60,120,180,240,300,360,420,480,540];

Array.prototype.random = function () {
  return this[Math.floor((Math.random()*this.length))];
}


function randColor() {
    let r = Math.floor(Math.random() * (256));
    let g = Math.floor(Math.random() * (256));
    let b = Math.floor(Math.random() * (256));
    return '#' + r.toString(16) + g.toString(16) + b.toString(16);
}


function draw() { 
  svg.innerHTML += `<rect x="${arrXY.random()}" y="${arrXY.random()}" width="60" height="60" fill="${randColor()}" stroke="black">`
  }


timer = setInterval(draw, 1000);
setTimeout(() => { clearInterval(timer); 
	div.innerHTML = '<h2>Заполнение завершено<h2>'; 
}, 100000);

