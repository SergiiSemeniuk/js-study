// Task3
// Создать html-страницу с кнопкой Открыть и модальным окном. На модальном окне должен быть текст и кнопка Закрыть. 
// Изначально модальное окно не отображается. При клике на кнопку Открыть появляется модальное окно, на кнопку Закрыть – исчезает.

 const modal = document.getElementById("my_modal");
 const open = document.getElementById("open_modal");
 const close = document.getElementsByClassName("close_modal")[0];

 open.onclick = function () {
    modal.style.display = "block";
 }

 close.onclick = function () {
    modal.style.display = "none";
 }

