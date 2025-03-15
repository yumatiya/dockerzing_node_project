const express = require('express');

const app = express();

app.get('/home', (req, res) => {
    res.json({'message': 'ok'});
});


app.get('/', (req, res) => {
    console.log('started the server');
});