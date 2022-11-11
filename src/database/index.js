const Sequelize = require('sequelize');
const dbConfig = require('../config/database');

const Objetivo = require('../models/Objetivo');
const Usuario = require('../models/Usuario');
const Refeicao = require('../models/Refeicao');
const Alimento = require('../models/Alimento');
const Necessidades = require('../models/Necessidades');

const connection = new Sequelize(dbConfig);

Objetivo.init(connection);
Usuario.init(connection);
Refeicao.init(connection);
Alimento.init(connection);
Necessidades.init(connection);

Objetivo.associate(connection.models);
Usuario.associate(connection.models);
Refeicao.associate(connection.models);
Alimento.associate(connection.models);
Necessidades.associate(connection.models);

module.exports = connection;