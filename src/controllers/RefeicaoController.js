const Usuario = require('../models/Usuario');
const Refeicao = require('../models/Refeicao');
const Alimento = require('../models/Alimento');

const axios = require('axios')

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

        if (!usuario) {
            return res.status(400).json({error: 'Usuario nao encontrado'});
        }

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
    },

    /*
    async getConsumo(req, res) {
        const { id } = req.params;

        const refeicao = await Refeicao.findByPk(id, {
            include: {
                association: 'alimentos',
                attributes: ['nome','qtd_g'],
            }
        });

        if (!refeicao) {
            return res.status(400).json({erro:"Refeicao nao encontrado"})
        }

        let qtd_cal = 0;
        let qtd_prot = 0;
        let qtd_lip = 0;
        let qtd_carb = 0;

        const options = {
            method: 'GET',
            url: 'https://calorieninjas.p.rapidapi.com/v1/nutrition',
            params: {query: ''},
            headers: {
              'X-RapidAPI-Key': '5c78918395mshc73ddfde387d928p19462bjsn7c46636e89dc',
              'X-RapidAPI-Host': 'calorieninjas.p.rapidapi.com'
            }
        };

        for (const alimento of refeicao.alimentos) {
            options.params = {query: alimento.nome};
            axios.request(options).then(function (response) {

                qtd_cal += response.data.items[0].calories * alimento.qtd_g / 100;
                qtd_prot += response.data.items[0].protein_g * alimento.qtd_g / 100;
                qtd_carb += response.data.items[0].carbohydrates_total_g * alimento.qtd_g / 100;
                qtd_lip += response.data.items[0].fat_total_g * alimento.qtd_g / 100;

            }).catch(function (error) {
                console.error(error);
            });

            console.log(qtd_cal);
        }

        return res.json({ qtd_cal, qtd_prot, qtd_lip, qtd_carb });
    }
    */
}