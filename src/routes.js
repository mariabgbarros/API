const express = require('express');
const ObjetivoController = require('./controllers/ObjetivoController');

const routes = express.Router();

routes.get('/', (req, res) => {
    return res.json({
        hello: "World  Bem vindos ao CI/CD Huuu!!!"
    });
})

routes.post('/objetivos', ObjetivoController.store);

module.exports = routes;