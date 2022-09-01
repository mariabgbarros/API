const { Model, DataTypes } = require('sequelize');

class Usuario extends Model {
    static init(sequelize) {
        super.init({
            nome: DataTypes.STRING,
            email: DataTypes.STRING,
            senha: DataTypes.STRING,
            anoNasc: DataTypes.INTEGER,
            peso: DataTypes.INTEGER,
            altura: DataTypes.INTEGER,
        },
        {
            sequelize,
            tableName: 'usuarios'
        })
    }

    static associate(models) {
        this.belongsTo(models.Objetivo, { foreignKey: 'idObjetivo', as: 'objetivos' });
    }
}

module.exports = Usuario;