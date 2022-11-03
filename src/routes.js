const express = require('express');
const ObjetivoController = require('./controllers/ObjetivoController');
const RefeicaoController = require('./controllers/RefeicaoController');
const AlimentoController = require('./controllers/AlimentoController');
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
routes.put('/usuarios', UsuarioController.update);

// Refeicoes
routes.get('/refeicoes/:id', RefeicaoController.index);
routes.get('/usuarios/:usuario_id/refeicoes', RefeicaoController.listByUser);
routes.post('/usuarios/:usuario_id/refeicoes', RefeicaoController.store);
routes.delete('/refeicoes/:id', RefeicaoController.delete);

// Alimento Refeicao
routes.post('/refeicoes/:refeicao_id/alimentos', AlimentoController.store);
routes.get('/alimentos/:id', AlimentoController.index);
routes.delete('/alimentos/:id', AlimentoController.delete);

module.exports = routes;