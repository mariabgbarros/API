const Usuario = require('../models/Usuario');
const Refeicao = require('../models/Refeicao');
// const RefeicaoAlimento = require('../models/RefeicaoAlimento');

module.exports = {
    async index(req, res) {
        const { id } = req.params;

        const refeicao = await Refeicao.findByPk(id);

        return res.json(refeicao);
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
            res.status(400).json({erro:"Refeicao nao encontrado"})
        }

        await refeicao.destroy();

        return res.json();
    }
}