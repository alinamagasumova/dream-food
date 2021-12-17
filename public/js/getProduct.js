// Получить данные из бд за счет ajax-программирование
let container = document.querySelector('.products');
// IIFE
async function deleteProduct(el) {
    let id = el.getAttribute("data-key");
    let res = await fetch(`/api/del/${id}`);
    let msg = await res.json();
    if (msg.msg === "ok") {
        el.remove();
    }
}


const getData = async (param) => {
    const res = await fetch('/api/category/' + param);
    const data = await res.json();
    data.data.forEach((obj) => {
        container.innerHTML += `<div onclick="deleteProduct(this)" class="products__item" data-key="${obj._id}">${obj.name} <a href='' data-data='${JSON.stringify(obj)}'>Поменять</a></div><div class='hide'></div>`;
    });
    let links = document.querySelectorAll('[data-data]');
        links.forEach(link => {
            link.addEventListener('click', setChange);
        });
};

const setChange = (e) => {
    e.preventDefault();
    e.stopPropagation();
    let data = e.target.getAttribute('data-data');
    data = JSON.parse(data);
    console.log(data);
    let insertBlock = document.querySelector('.class');
    let html = '<form>';
    for (let k in data) {
        html += `<input type='text' name='${k}' value='${data[k]}'>`;
    }
    html += '<button id="btnC">Отмена</button>';
    html += '<button id="btnUpd" type="submit">Изменить</button>';
    html += '</form>';
    insertBlock.innerHTML += html;
    let form = document.forms[0];
    let cancel = document.getElementById('btnC');
    cancel.onclick = function() {
        form.remove();
    };
    form.addEventListener('submit', e => {
        e.preventDefault();
    });
};