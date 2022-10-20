const { Model, DataTypes } = require('sequelize');

class Refeicao extends Model {
    static init(sequelize) {
        super.init({
            data: DataTypes.DATE,
        }, {
            sequelize,
            tableName: 'refeicoes',
        })
    }

    static associate(models) {
        this.hasMany(models.RefeicaoAlimento, {foreignKey: 'refeicao_id', as: 'alimento'});
        this.belongsTo(models.Usuario, {foreignKey: 'usuario_id', as: 'usuario'});
    }
}

module.exports = Refeicao