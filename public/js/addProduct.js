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
