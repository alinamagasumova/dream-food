const connectDB = function() {
    const MongoClient = require('mongodb').MongoClient;
    const user = process.env.DBNAME || 'Alina'; // || '' - только на  локальном, при боевом сервере УДАЛИТЬ
    const pwd = process.env.DBPASS || 'FkbyfVfu2'; // || '' - только на  локальном, при боевом сервере УДАЛИТЬ
    const uri = `mongodb+srv://${user}:${pwd}@cluster0.ekpcv.mongodb.net/food?retryWrites=true&w=majority`;
    return new MongoClient(uri, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    });
};

module.exports = connectDB;