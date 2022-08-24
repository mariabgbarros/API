const express = require('express');
const UsuarioController = require('./controllers/UsuarioController');

const routes = express.Router();

routes.get('/', (req, res) => {
    return res.json({
        hello: "World  Bem vindos ao CI/CD Huuu!!!"
    });
})

routes.post('/usuarios', UsuarioController.store);

module.exports = routes;