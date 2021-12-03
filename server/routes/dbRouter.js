const router = require('express').Router();
const db = require('./db.js');

router.post('/add', (req, res) => {
    console.log(req.body); // получаем тело формы
    // Добавить в массив новые данные в цсв и добавить их в таблицу
    const client = db();
    client.connect(err => {
        if (err) {
            // aaaaa
        } else {
            const table = client.db('food');
            const col = table.collection('products');
            col.insertOne(req.body, err => {
                if (err) {
                    console.log(err);
                    client.close();
                } else {
                    res.send({msg: 'done'});
                }
                client.close();
            });

        }
    });
});


module.exports = router;
