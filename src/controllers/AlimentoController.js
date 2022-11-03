const Refeicao = require('../models/Refeicao');
const Alimento = require('../models/Alimento');

module.exports = {
    async index(req, res) {
        const { id } = req.params;

        const alimento = await Alimento.findByPk(id);

        return res.json(alimento);
    },

    async store(req, res) {
        const { refeicao_id } = req.params;
        const { alimento, qtd_g } = req.body;

        const refeicao = await Refeicao.findByPk(refeicao_id);

        if (!refeicao) {
            return res.status(400).json({ error: `Refeicao nao 
                encontrada com o id ${refeicao_id}` });
        }

        const refeicao_alimento = await Alimento.create({
            refeicao_id,
            alimento,
            qtd_g,
        });

        return res.json(refeicao_alimento);
    },

    async delete (req, res) {
        const { id } = req.params;

        const alimento = await Alimento.findByPk(id);

        if (!alimento) {
            return res.status(400).json({erro:"Alimento nao encontrado"})
        }

        await alimento.destroy();

        return res.json();
    }
}