const { Model, DataTypes } = require('sequelize');

class Alimento extends Model {
    static init(sequelize) {
        super.init({
            nome: DataTypes.STRING,
            qtd_g: DataTypes.INTEGER,
        }, {
            sequelize,
            tableName: 'refeicoes_alimentos',
        })
    }

    static associate(models) {
        this.belongsTo(models.Refeicao, {foreignKey: 'refeicao_id', as: 'refeicao'});
    }
}

module.exports = Alimento