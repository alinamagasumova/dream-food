const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

app.get('/', (rq, rs) => {
    rs.send('<h1>Dream food</h1>');

})

app.listen(PORT, (e) => {
    console.log('Server runs at port ' + process.env.PORT + ' or 3000');
})