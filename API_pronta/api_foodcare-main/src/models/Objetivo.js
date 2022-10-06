const { Model, DataTypes } = require('sequelize');

class Objetivo extends Model {
    static init(sequelize) {
        super.init({
            descricao: DataTypes.STRING,
        }, {
            sequelize,
            tableName: 'objetivos',
        })
    }

    static associate(models) {
        this.hasMany(models.Usuario, {foreignKey: 'objetivo_id', as: 'usuarios'});
    }
}

module.exports = Objetivo;