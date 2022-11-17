const Usuario = require('../models/Usuario');
const Objetivo = require('../models/Objetivo');

module.exports = {
    async list(req, res) {
        const usuarios = await Usuario.findAll();

        return res.json(usuarios);
    },

    async index(req, res) {
        const { email } = req.params;
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
            sexo,
        } = req.body;

        /*
        const usuarioExistente = await Usuario.findOne({
            where: { email }
        });

        if (usuarioExistente) {
            return res.status(400).json({erro:"Este email já foi utilizado"})
        }

        const objetivo = await Objetivo.findByPk(objetivo_id);

        if (!objetivo) {
            return res.status(400).json( {error: "Objetivo nao encontrado"} );
        }
        */

        const usuario = await Usuario.create({
            objetivo_id,
            nome,
            email,
            senha,
            data_nasc,
            peso,
            altura,
            sexo,
        });

        res.setHeader('Access-Control-Allow-Origin', 'http://0.0.0.0');
        // res.setHeader('Access-Control-Allow-Credentials', true);
        
        return res.json(usuario);
    },

    async delete (req, res) {
        const { email } = req.body;

        const usuario = await Usuario.findOne({
            where: { email }
        });

        if (!usuario) {
            return res.status(400).json({erro:"Usuario nao encontrado"})
        }

        await usuario.destroy();

        return res.json();
    },

    async update (req, res) {
        const { nome, email, senha, data_nasc, peso, altura, id_objetivo, sexo } = req.body;

        const usuario = await Usuario.findOne({
            where: { email }
        });

        if (!usuario) {
            return res.status(400).json({erro:"Usuario nao encontrado"})
        }

        // o email nao pode ser alterado uma vez que o usuario foi criado
        usuario.set({
            nome,
            senha,
            data_nasc,
            peso,
            altura,
            id_objetivo,
            sexo,
        });

        await usuario.save();

        return res.json(usuario);
    }
}