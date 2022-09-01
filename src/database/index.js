const Sequelize = require('sequelize');
const dbConfig = require('../config/database');

const Objetivo = require('../models/Objetivo');
const connection = new Sequelize(dbConfig);

Objetivo.init(connection);

module.exports = connection;