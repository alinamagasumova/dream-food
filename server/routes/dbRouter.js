const router = require('express').Router();
const mongodb = require('mongodb');
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

router.get('/category/:cat', (req, res) => {
    const client = db();
    let cats = {
        'veg': 'Овощи',
        'fruits': 'Фрукты',
        'berries': 'Ягоды',
    }
    client.connect(err => {
        if (err) {
            res.send({'msg': 'Error connection'});
            client.close();
        } else {
            const table = client.db('food');
            const col = table.collection('products');
            let obj = {};
            if (req.params.cat !== 'all') {
                obj.type = cats[req.params.cat]
            }
            col.find(obj).toArray( (err, data) => {
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

router.get("/del/:id", (req, res) => {
    const client = db();
    client.connect((err) => {
        if (err) {
            res.send({"msg": "Error connection"});
            client.close();
        } else {
            const col = client.db("food").collection("products");
            col.deleteOne({"_id": new mongodb.ObjectId(req.params.id)}, (err, result) => { 
                if (err) {
                    client.close(); 
                    res.send({"msg": "bad"});
                } else {
                    console.log(result);
                    client.close();  
                    res.send({"msg": "ok"});
                }
            });
        }
    });
});

module.exports = router;