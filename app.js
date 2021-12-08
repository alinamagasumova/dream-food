const express = require('express');
const app = express();
const serverRouter = require('./server/routes/router');
const DBrouter = require('./server/routes/dbRouter');
const stylus =  require('stylus');
const PORT = process.env.PORT || 4000;

app.set('views', './server/views');
app.set('view engine', 'pug');

app.use(express.json());
app.use(express.static('./public'));
app.use('/', serverRouter);
app.use('/api', DBrouter);
app.use(stylus.middleware({
    src: './public',
    dest: './public'
}));


app.listen(PORT, (e) => {
    console.log('Server runs at port ' + process.env.PORT + ' or 4000');
});