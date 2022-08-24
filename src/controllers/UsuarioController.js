const Usuario = require('../models/Usuario');

module.exports = {
    async store(req, res) {
        const { name, email } = req.body;

        const usuario = await Usuario.create({ name, email });

        return res.json(usuario)
    }
}