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
})
