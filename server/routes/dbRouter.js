const router = require('express').Router();
const db = require('./db.js');

router.post('/add', (req, res) => {
    console.log(req.body); // получаем тело формы
    // Добавить в массив новые данные в цсв и добавить их в таблицу
    const client = db();
    client.connect(err => {
        if (err) {
            console.log({'msg': 'Error connection'});
        } else {
            const table = client.db('food');
            const col = table.collection('products');
            col.insertOne(req.body, err => {
                if (err) {
                    console.log(err);
                    client.close();
                } else {
                    res.send({msg: 'done'});
                    client.close();
                }
            });
        }
    });
});

router.get('/veg', (req, res) => {
    const client = db();
    client.connect(err => {
        if (err) {
            res.send({'msg': 'Error connection'});
            client.close();
        } else {
            const table = client.db('food');
            const col = table.collection('products');
            col.find({'type': 'Овощи'}).toArray( (err, data) => {
                if (err) {
                    console.log(err);
                } else {
                    console.log(data);
                    res.send({'data': data});
                    client.close();
                }
            });
        }
    });
});

module.exports = router;
