const Sequelize = require('sequelize');
const dbConfig = require('../config/database');

const Objetivo = require('../models/Objetivo');
const Usuario = require('../models/Usuario');
const Refeicao = require('../models/Refeicao');
const RefeicaoAlimento = require('../models/RefeicaoAlimento');

const connection = new Sequelize(dbConfig);

Objetivo.init(connection);
Usuario.init(connection);
Refeicao.init(connection);
RefeicaoAlimento.init(connection);

Objetivo.associate(connection.models);
Usuario.associate(connection.models);
Refeicao.associate(connection.models);
RefeicaoAlimento.associate(connection.models);

module.exports = connection;