const Refeicao = require('../models/Refeicao');
const RefeicaoAlimento = require('../models/RefeicaoAlimento');

module.exports = {
    async index(req, res) {

    },

    async store(req, res) {
        const { refeicao_id } = req.params;
        const { alimento, qtd_g } = req.body;

        const refeicao = await Refeicao.findByPk(refeicao_id);

        if (!refeicao) {
            return res.status(400).json({ error: `Refeicao nao 
                encontrada com o id ${refeicao_id}` });
        }

        const refeicao_alimento = await RefeicaoAlimento.create({
            refeicao_id,
            alimento,
            qtd_g,
        });

        return res.json(refeicao_alimento);
    },
}