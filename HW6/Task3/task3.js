// task 3
// Создать html-страницу для ввода имени пользователя. 
// Необходимо проверять каждый символ, который вводит пользователь. 
// Если он ввел цифру, то не отображать ее в input.

input1.addEventListener('keydown', function () {
input1.value = input1.value.replace(/[^a-zA-Z]/g, '');
});
