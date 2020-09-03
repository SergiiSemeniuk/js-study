// Task3
// С помощью reduce, перепишите реализацию следующего кода

// task3.1 map
// const arr = ['Яблоко', 'Банан', 'Ананас', 'Груша'];
// console.log(arr);
// console.log(arr.map(el => el[0]));
// const red = arr.reduce((acc, el) => acc + el[0], '').split('');
// console.log(red);

// task3.2 filter
// const arr = ['Яблоко', 'Банан', 'Ананас', 'Груша'];
// console.log(arr);
// console.log(arr.filter(el => el[0].toLowerCase() == 'а'));

// const red = arr.reduce((acc, el) => {
//         if(el[0].toLowerCase() == 'а'){
//             acc = el;
//         }
//         return acc;
// }, '').split(' ');
// console.log(red);


//task3.3 forEach
const arr = ['Яблоко', 'Банан', 'Ананас', 'Груша'];
console.log(arr);
// arr.forEach((el,i,arr) => arr[i] = `${i+1}: ${el};`);

const red = arr.reduce((acc, el, i, arr) => acc + `${i+1}: ${el};\n`, '');
console.log(red);