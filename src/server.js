const express = require('express');
const cors = require('cors');
const routes = require('./routes');

require('./database');

const app = express();

app.use(express.json())
app.use(cors());

const port = process.env.PORT || 3333;

app.use(function (req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:' + port);
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
    res.setHeader('Access-Control-Allow-Credentials', true);
});

app.use(routes);

app.listen(port, () => {
    console.log("Servidor rodando na porta " + port);
});

