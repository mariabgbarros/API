const express = require('express');
//const routes = require('./routes.js');
//require('./database');

const app = express();

app.use(express.json());
app.use(routes);
app.listen(process.env.PORT || 5000, function () {
    console.log('API ligada!');
});