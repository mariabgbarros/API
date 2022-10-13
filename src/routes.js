const express = require('express');
const ObjetivoController = require('./controllers/ObjetivoController');
const UsuarioController = require('./controllers/UsuarioController');

const routes = express.Router();

routes.get('/', (req,res) => {return res.json({teste: "Testando"})});

routes.post('/objetivos', ObjetivoController.store);
routes.get('/objetivos', ObjetivoController.list);

routes.post('/usuarios', UsuarioController.store);
routes.get('/usuarios', UsuarioController.list);
routes.delete('/usuarios', UsuarioController.delete);

module.exports = routes;