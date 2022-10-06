const Objetivo = require('../models/Objetivo');

module.exports = {
    async list(req, res) {
        const objetivos = await Objetivo.findAll();

        return res.json(objetivos);
    },

    async store(req, res) {
        const { descricao  } = req.body;

        const objetivo = await Objetivo.create({ descricao });

        return res.json(objetivo);
    },
}