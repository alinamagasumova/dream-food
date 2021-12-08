// Получить данные из бд за счет ajax-программирование
let container = document.querySelector('.products');
// IIFE
(async () => {
    const res = await fetch('/api/veg');
    const data = await res.json();
    container.innerText = JSON.stringify(data.data);
})();