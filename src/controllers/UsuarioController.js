const Usuario = require('../models/Usuario');
const Objetivo = require('../models/Objetivo');

module.exports = {
    async list(req, res) {
        const usuarios = await Usuario.findAll();

        return res.json(usuarios);
    },

    async index(req, res) {
        const { email } = req.body;
        const usuario = await Usuario.findOne({
            where: { email }
        });

        return res.json(usuario);
    },

    async store(req, res) {
        const {
            nome,
            email,
            senha,
            data_nasc,
            peso,
            altura,
            objetivo_id,
        } = req.body;

        const usuarioExistente = await Usuario.findOne({
            where: { email }
        });

        if (usuarioExistente) {
            res.status(400).json({erro:"Este email já foi utilizado"})
        }

        const objetivo = await Objetivo.findByPk(objetivo_id);

        if (!objetivo) {
            res.status(400).json( {error: "Objetivo nao encontrado"} );
        }

        const usuario = await Usuario.create({
            objetivo_id,
            nome,
            email,
            senha,
            data_nasc,
            peso,
            altura,
        });

        return res.json(usuario);
    },

    async delete (req, res) {
        const { email } = req.body;

        const usuario = await Usuario.findOne({
            where: { email }
        });

        if (!usuario) {
            res.status(400).json({erro:"Usuario nao encontrado"})
        }

        await usuario.destroy();

        return res.json();
    }
}