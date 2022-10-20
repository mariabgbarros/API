const express = require('express');
const ObjetivoController = require('./controllers/ObjetivoController');
const RefeicaoController = require('./controllers/RefeicaoController');
const RefeicaoAlimentoController = require('./controllers/RefeicaoAlimentoController');
const UsuarioController = require('./controllers/UsuarioController');

const routes = express.Router();

routes.get('/', (req,res) => {return res.json({teste: "Testando"})});

// Objetivos
routes.post('/objetivos', ObjetivoController.store);
routes.get('/objetivos', ObjetivoController.list);

// Usuarios
routes.post('/usuarios', UsuarioController.store);
routes.get('/usuarios', UsuarioController.list);
routes.get('/usuarios/index', UsuarioController.index);
routes.delete('/usuarios', UsuarioController.delete);

// Refeicoes
routes.get('/refeicoes/:id', RefeicaoController.index);
routes.post('/usuarios/:usuario_id/refeicoes/', RefeicaoController.store);
routes.delete('/refeicoes/:id', RefeicaoController.delete);

// Alimento_Refeicao
routes.post('/refeicoes/:refeicao_id/alimentos', RefeicaoAlimentoController.store);

module.exports = routes;