const router = require('express').Router();
const fs = require("fs");

router.get('/', (rq, rs) => {
    rs.render('index', {
        title: 'Здоровый образ жизни'
    });
});

module.exports = router;