// decodeMorse('.... . -.--   .--- ..- -.. .')
//should return "HEY JUDE"

const morze = {
  "0": "-----",
  "1": ".----",
  "2": "..---",
  "3": "...--",
  "4": "....-",
  "5": ".....",
  "6": "-....",
  "7": "--...",
  "8": "---..",
  "9": "----.",
  "a": ".-",
  "b": "-...",
  "c": "-.-.",
  "d": "-..",
  "e": ".",
  "f": "..-.",
  "g": "--.",
  "h": "....",
  "i": "..",
  "j": ".---",
  "k": "-.-",
  "l": ".-..",
  "m": "--",
  "n": "-.",
  "o": "---",
  "p": ".--.",
  "q": "--.-",
  "r": ".-.",
  "s": "...",
  "t": "-",
  "u": "..-",
  "v": "...-",
  "w": ".--",
  "x": "-..-",
  "y": "-.--",
  "z": "--..",
  ".": ".-.-.-",
  ",": "--..--",
  "?": "..--..",
  "!": "-.-.--",
  "-": "-....-",
  "/": "-..-.",
  "@": ".--.-.",
  "(": "-.--.",
  ")": "-.--.-",
  "SOS": "···−−−···"
}

console.log(decodeMorse('.... . -.--   .--- ..- -.. .'));

function decodeMorse(strMorze) {
  let arrMor = strMorze.split(' ');
  console.log(arrMor);
  const arrLetter = arrMor.map(function(el){ 
   if (el != ' ' && el != '') {
     for (let key in morze) {
      if (el == morze[key]) {
        el = key;
      }
    };     
   } else {
    el = ' ';
   }
   return el;    
 });
  console.log(arrLetter);
  return arrLetter.join('').toUpperCase().replace(/ +/g, ' ').trim(); // replace(/ +/g, ' ') заміна пробілів на один // trim() обрізання лишніх пробілів спереду і ззаду
}

