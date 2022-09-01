const { Model, DataTypes } = require('sequelize');

class Objetivo extends Model {
    static init(sequelize) {
        super.init({
            descricao: DataTypes.STRING,
        },
        { sequelize })
    }

    static associate(models) {
        this.hasMany(models.Usuario, { foreignKey: 'idObjetivo', as: 'usuarios'});
    }
}

module.exports = Objetivo;