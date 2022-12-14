const Usuario = require('../models/Usuario');
const Refeicao = require('../models/Refeicao');
const Alimento = require('../models/Alimento');

const axios = require('axios')

const requisicao = (opcoes) => {
    return new Promise((resolve, reject) => {
        axios.request(opcoes).then(function (response) {
            resolve(response);
        })
        .catch(function (error) {
            console.error(error);
        });
    })
}

module.exports = {
    async index(req, res) {
        const { id } = req.params;

        const refeicao = await Refeicao.findByPk(id, {
            include: {
                association: 'alimentos',
                attributes: [ 'nome', 'qtd_g']
            }
        });

        return res.json(refeicao);
    },

    async getByUser(req, res) {
        const { usuario_id } = req.params;

        const usuario = await Usuario.findByPk(usuario_id, {
            include: {
                association: 'refeicoes',
                attributes: [ 'id', 'data' ],
                include: {
                    association: 'alimentos',
                    attributes: [ 'nome', 'qtd_g' ]
                }
            }
        });

        if (!usuario) {
            return res.status(400).json({error: 'Usuario nao encontrado'});
        }

        // Pega a refeicao mais recente
        let refeicao = usuario.refeicoes[0];
        for (const r of usuario.refeicoes) {
            if (new Date(r.data)[Symbol.toPrimitive]('number') > new Date(refeicao.data)[Symbol.toPrimitive]('number'))
                refeicao = r;
        }

        const date = new Date(refeicao.data);
        const hoje = new Date();

        const s =date.toString();
        const s2 =hoje.toString();

        if (!(date.getFullYear() == hoje.getFullYear() &&
            date.getMonth() == hoje.getMonth() &&
            date.getDate()+1 == hoje.getDate())) {

            refeicao = await Refeicao.create({
                data: hoje.getFullYear() + "-" + (hoje.getMonth()+1) + "-" + hoje.getDate(),
                usuario_id,
            });
        }
            
        let lista_alimentos = "";

        if (!!refeicao.alimentos)
            for (const a of refeicao.alimentos) {
                lista_alimentos += a.nome + ", " + a.qtd_g + "g\n";
            }

        return res.json({id: refeicao.id, alimentos: lista_alimentos, s: s, s2: s2});
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

    async getConsumo(req, res) {
        const { id } = req.params;

        const usuario = await Usuario.findByPk(id, {
            include: {
                association: 'refeicoes',
                attributes: [ 'id', 'data' ],
                include: {
                    association: 'alimentos',
                    attributes: [ 'nome', 'qtd_g' ]
                }
            }
        });

        if (!usuario) {
            return res.status(400).json({error: 'Usuario nao encontrado'});
        }

        // Pega a refeicao mais recente
        let refeicao = usuario.refeicoes[0];
        for (const r of usuario.refeicoes) {
            if (new Date(r.data)[Symbol.toPrimitive]('number') > new Date(refeicao.data)[Symbol.toPrimitive]('number'))
                refeicao = r;
        }

        if (!refeicao) {
            return res.status(400).json({erro:"Refeicao nao encontrado"})
        }
        
        // configuracoes de requisicao da API de alimentos
        const options = {
            method: 'GET',
            url: 'https://calorieninjas.p.rapidapi.com/v1/nutrition',
            params: {query: ''},
            headers: {
                'X-RapidAPI-Key': '5c78918395mshc73ddfde387d928p19462bjsn7c46636e89dc',
                'X-RapidAPI-Host': 'calorieninjas.p.rapidapi.com'
            }
        };
        
        var qtd_cal = 0;
        var qtd_prot = 0;
        var qtd_lip = 0;
        var qtd_carb = 0;

        for (const alimento of refeicao.alimentos) {
            options.params = {query: alimento.nome};

            const response = await requisicao(options)

            // atualiza os valores
            qtd_cal += response.data.items[0].calories * alimento.qtd_g / 100;
            qtd_prot += response.data.items[0].protein_g * alimento.qtd_g / 100;
            qtd_lip += response.data.items[0].fat_total_g * alimento.qtd_g / 100;
            qtd_carb += response.data.items[0].carbohydrates_total_g * alimento.qtd_g / 100;
        }

        return res.json({
            qtd_cal,
            qtd_prot,
            qtd_lip,
            qtd_carb
        });
    }
}