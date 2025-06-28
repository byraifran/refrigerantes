// Variaveis
let list = document.querySelectorAll(".item"); // Captura a lista dos elementos da class '.item' do html.
let prev = document.getElementById("prev"); // Captura os elementos do id 'prev' do html.
let next = document.getElementById("next"); // Captura os elementos do id 'next' do html.
let count = list.length; // Armazena o tamanho da var. list.
let active = 0;
// Ações do botão "anterior"
prev.addEventListener("click", () => {
    let activeOld = document.querySelector(".active");
    activeOld.classList.remove("active");
    active = active <= 0 ? count-1 : active -1;
    list[active].classList.add("active");
});
// Ações do botão "próximo"
next.addEventListener("click", () => {
    let activeOld = document.querySelector(".active");
    activeOld.classList.remove("active");
    active = active >= count -1 ? 0 : active + 1;
    list[active].classList.add("active");
});