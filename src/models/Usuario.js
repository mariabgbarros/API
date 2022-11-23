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
            sexo: DataTypes.STRING,
        }, {
            sequelize,
            tableName: 'usuarios',
        })
    }

    static associate(models) {
        this.belongsTo(models.Objetivo, {foreignKey: 'objetivo_id', as: 'objetivo'});
        this.hasMany(models.Refeicao, {foreignKey: 'usuario_id', as: 'refeicoes'});
        this.hasOne(models.Necessidades, {foreignKey: 'usuario_id', as: 'necessidades'});
    }
}

module.exports = Usuario;