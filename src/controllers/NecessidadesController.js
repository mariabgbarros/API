const Usuario = require('../models/Usuario');
const Necessidades = require('../models/Necessidades');
const Objetivo = require('../models/Objetivo');

module.exports = {
    async index(req, res) {
        const  { usuario_id } = req.params;

        const usuario = await Usuario.findByPk(usuario_id);

        if (!usuario) {
            return res.status(400).json({ error: 'Usuario nao encontrado'})
        }

        const necExistente = await Necessidades.findOne({
            where: { usuario_id }
        })

        // se ja estiverem calculadas as necessidades, retorna-as
        if (!!necExistente) {
            return res.json(necExistente);
        }

        let qtd_cal = 0;
        switch (usuario.objetivo_id) {
            case 1:
                pesoIdeal = 23 * Math.pow(usuario.altura/100, 2);
                qtd_cal = eer(usuario, pesoIdeal); break;
            case 2:
                qtd_cal = eer(usuario); break;
            case 3:
                qtd_cal = eer(usuario) * 1.2 ; break;
        }

        const qtd_prot = Math.round(0.2 * qtd_cal / 4);
        const qtd_carb = Math.round(0.6 * qtd_cal / 4);
        const qtd_lip = Math.round(0.2 * qtd_cal / 9);
        qtd_cal = Math.round(qtd_cal);

        const necessidades = await Necessidades.create({
            usuario_id,
            qtd_cal,
            qtd_carb,
            qtd_prot,
            qtd_lip,
        })

        return res.json(necessidades);
    },

    async delete (req, res) {
    },

    async update (req, res) {
        /*
        const  { usuario_id } = req.params;

        const usuario = await Usuario.findByPk(usuario_id);

        if (!usuario) {
            return res.status(400).json({ error: 'Usuario nao encontrado'})
        }

        const necExistente = await Necessidades.findOne({
            where: { usuario_id }
        })

        // se ja estiverem calculadas as necessidades, retorna-as
        if (!!necExistente) {
            return res.json(necExistente);
        }

        let qtd_cal = 0;
        switch (usuario.objetivo_id) {
            case 1:
                pesoIdeal = 23 *  Math.pow(usuario.altura/100, 2);
                qtd_cal = eer(usuario, pesoIdeal); break;
            case 2:
                qtd_cal = eer(usuario); break;
            case 3:
                qtd_cal = eer(usuario) * 1.2 ; break;
        }

        const qtd_prot = Math.round(0.2 * qtd_cal / 4);
        const qtd_carb = Math.round(0.6 * qtd_cal / 4);
        const qtd_lip = Math.round(0.2 * qtd_cal / 9);
        qtd_cal = Math.round(qtd_cal);

        const necessidades = await Necessidades.create({
            usuario_id,
            qtd_cal,
            qtd_carb,
            qtd_prot,
            qtd_lip,
        })

        return res.json(necessidades);
        */
    }
}

function eer(u, peso = u.peso) {
    const nascimento = new Date(u.data_nasc);

    const idade = new Date(new Date() - nascimento).getFullYear() - 1970;

    let eer = 0;
    if (u.sexo == 'Masculino')
        eer = 662 - (9.53*idade) + 1.11*(15.91*peso + 5.396*u.altura);
    else
        eer = 354 - (6.91*idade) + 1.12*(9.36*peso + 7.26 * u.altura);
    
    return Math.round(eer);
}