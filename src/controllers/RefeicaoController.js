const Usuario = require('../models/Usuario');
const Refeicao = require('../models/Refeicao');

module.exports = {
    async index(req, res) {
        const { id } = req.params;

        const refeicao = await Refeicao.findByPk(id);

        return res.json(refeicao);
    },

    async listByUser(req, res) {
        const { usuario_id } = req.params;

        const usuario = await Usuario.findByPk(usuario_id, {
            include: {
                association: 'refeicoes',
                attributes: [ 'id', 'data' ],
                include: {
                    association: 'alimentos',
                    attributes: [ 'alimento', 'qtd_g' ]
                }
            }
        });

        return res.json(usuario.refeicoes);
    },

    async store(req, res) {
        const { usuario_id } = req.params;
        const { data } = req.body;

        const usuario = await Usuario.findByPk(usuario_id);

        if (!usuario) {
            return res.status(400).json({ error: `Usuario nao encontrado com
                o id ${usuario_id}`});
        }

        const refeicao = await Refeicao.create({ data, usuario_id });

        return res.json(refeicao);
    },

    async delete (req, res) {
        const { id } = req.params;

        const refeicao = await Refeicao.findByPk(id);

        if (!refeicao) {
            return res.status(400).json({erro:"Refeicao nao encontrado"})
        }

        await refeicao.destroy();

        return res.json();
    }
}