const Objetivo = require('../models/Objetivo');

module.exports = {
    async store(req, res) {
        const { descricao } = req.body;

        const objetivo = await Objetivo.create({ descricao });

        return res.json(objetivo)
    }
}