const express = require('express');
const app = express();
const router = require('./server/routes/router');
const stylus =  require('stylus');
const PORT = process.env.PORT || 5000;

app.set('views', './server/views');
app.set('view engine', 'pug');

app.use(express.static('./public'));
app.use('/', router);
app.use(stylus.middleware({
    src: './public',
    dest: './public'
}));

app.listen(PORT, (e) => {
    console.log('Server runs at port ' + process.env.PORT + ' or 5000');
})