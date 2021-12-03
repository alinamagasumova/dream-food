const router = require('express').Router();
const fs = require("fs");

let data = '';
const readFile = (path) => {
    return fs.readFileSync(path, 'utf-8', (err, info) => {return info});
}
data = readFile('./data/market.csv');
data = data.split('\n');
const names = data[0].split(';');

const Product = function(productsArr) {
    names.forEach((name, i) => {this[name] = productsArr[i]});
};

const products = [];
for (let i=1; i<data.length;i++) {
    products.push(new Product(data[i].split(';')));
}

router.get('/', (rq, rs) => {
    rs.render('index', {
        title: 'Здоровый образ жизни',
        products: products,
        names: names
    });
});

module.exports = router;