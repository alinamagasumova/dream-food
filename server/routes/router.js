const router = require('express').Router();
const fs = require("fs");

let data = '';
const readFile = (path) => {
    return fs.readFileSync(path, 'utf-8', (err, info) => {return info});
}
data = readFile('./data/market.csv');
data = data.split('\n');
// console.log(data);

const Product = function(productsArr) {
    let names = data[0].split(';');
    names.forEach((name, i) => {this[name] = productsArr[i]});
};

const products = [];
for (let i=1; i<data.length;i++) {
    products.push(new Product(data[i].split(';')));
}
console.log(products);


router.get('/', (rq, rs) => {
    rs.render('index', {
        title: 'Здоровый образ жизни',
        products: products
    });
});

module.exports = router;