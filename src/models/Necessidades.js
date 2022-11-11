const { Model, DataTypes } = require('sequelize');

class Necessidades extends Model {
    static init(sequelize) {
        super.init({
            qtd_cal: DataTypes.INTEGER,
            qtd_prot: DataTypes.INTEGER,
            qtd_carb: DataTypes.INTEGER,
            qtd_lip: DataTypes.INTEGER,
        }, {
            sequelize,
            tableName: 'necessidades_nutricionais',
        })
    }

    static associate(models) {
        this.belongsTo(models.Usuario, {foreignKey: 'usuario_id', as: 'usuario'});
    }
}

module.exports = Necessidades;