let form = document.forms.addProduct;

form.addEventListener('submit', e => {
    e.preventDefault();
    let body = {};
    for (let i=0; i<e.target.elements.length; i++) {
        let child = e.target.elements[i];
        if (child.name) {
            body[child.name] = child.value
        }
    }
    console.log(body);
    sendForm(body, e.target.method, '/api/add');
});

const sendForm = async (body, method, path) => {
    let response = await fetch(path, {
        method: method,
        headers: {
            'accept': 'application/json',
            'content-type': 'application/json'
        },
        body: JSON.stringify(body)
    });
    let data = await response.json();
    console.log(data);
};


// function changeProduct(el) {
//     let tds = el.children;
//     oldData = el.innerHTML;
//     for(let i=0; i<tds.length; i++) {
//         if (i === 0) {
//             tds[i].innerHTML = `<form id='changeForm' method='get'><input class='tbInp' type=text placeholder="Название продукта"></input>`;
//         } else if (i === tds.length-1) {
//             tds[i].innerHTML = `<button onclick='approveChange()'>Ок</button><button onclick='cancelChange(oldData)'>Отмена</button>`;
//         } else if (i === tds.length-2) {
//             tds[i].innerHTML = `<select class='tbInp' name="type"> <option value="Овощи">Овощи</option> <option value="Фрукты">Фрукты</option> <option value="Ягоды">Ягоды</option></select></form>`
//         } else {
//             tds[i].innerHTML = `<input class='tbInp' type="number" step="0.1" min="0"></input>`;
//         }
//     }
// }
