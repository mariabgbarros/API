const Sequelize = require('sequelize');
const { username } = require('../config/database');
const dbConfig = require('../config/database');

const Usuario = require('../models/Usuario');
const connection = new Sequelize(dbConfig);

Usuario.init(connection);

module.exports = connection;