const { Model, DataTypes } = require('sequelize');

class Usuario extends Model {
    static init(sequelize) {
        super.init({
            nome: DataTypes.STRING,
            email: DataTypes.STRING,
            senha: DataTypes.STRING,
            data_nasc: DataTypes.STRING,
            peso: DataTypes.INTEGER,
            altura: DataTypes.INTEGER,
        }, {
            sequelize,
            tableName: 'usuarios',
        })
    }

    static associate(models) {
        this.belongsTo(models.Objetivo, {foreignKey: 'objetivo_id', as: 'objetivo'});
    }
}

module.exports = Usuario;