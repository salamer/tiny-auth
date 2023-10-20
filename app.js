const express = require('express');
const leapcell = require('@leapcell/leapcell-js');
// let engine = require('ejs-locals');

const path = require('path');
const app = express();
// app.engine('ejs', engine);
app.set('views', './views');
app.set('view engine', 'ejs');


app.get("/hello", (request, response) => {
    return response.send("Hello World");
});

app.listen(8000, () => {
    console.log('App is listening on port 8000');
});