const { Model, DataTypes } = require('sequelize');

class RefeicaoAlimento extends Model {
    static init(sequelize) {
        super.init({
            alimento: DataTypes.STRING,
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

module.exports = RefeicaoAlimento