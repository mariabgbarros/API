const usuario = {
    nome: 'rafael',
    email: 'rafael.dosso@gmail.com',
    senha: '1234',
    data_nasc: '2004-11-14T00:00:00',
    peso: 68,
    altura: 175,
    sexo: 'Masculino',
    objetivo_id: 3,
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

let qtd_cal = 0;
if (usuario.objetivo_id == 1) {
    pesoIdeal = 23 *  Math.pow(usuario.altura/100, 2);

    qtd_cal = eer(usuario, pesoIdeal);
} 

else if (usuario.objetivo_id == 2) {
    qtd_cal = eer(usuario)
}

else {
    qtd_cal = eer(usuario) + 500;
}

const qtd_prot = Math.round(0.2 * qtd_cal / 4);
const qtd_carb = Math.round(0.6 * qtd_cal / 4);
const qtd_lip = Math.round(0.2 * qtd_cal / 9);

// const necessidades = await Necessidades.create({
//     usuario_id,
//     qtd_cal,
//     qtd_prot,
//     qtd_carb,
//     qtd_lip,
// })

// return res.json(necessidades);

// console.log(qtd_cal, qtd_prot, qtd_carb, qtd_lip);