const config = require('config.json');
const jwt = require('jsonwebtoken');
const Role = require('_helpers/role');

var assignatures = [
    { id: 1, codi: '1111', nom: 'alemany', any: '2019'},
    { id: 2, codi: '2222', nom: 'anglès', any: '2019'},
    { id: 3, codi: '3333', nom: 'català', any: '2019'}
];
/*
id: number;
    codi: string;
    nom: string;
    any:string;*/

module.exports = {
    getAll,
    getById,
    add
};

async function getAll() {
    return assignatures.map(u => {
        return u;
    });
}

async function getById(id) {
    const assignatura = assignatures.find(u => u.id === parseInt(id));
    if (!assignatura) return;
    return assignatura;
}

async function add(body) {
    body.id = assignatures.length ? Math.max(...assignatures.map(x => x.id)) + 1 : 1;
    var assignatura = body;
    //assignatura.id = assignatures.length ? Math.max(...assignatures.map(x => x.id)) + 1 : 1;
    if (!assignatura) return;
    assignatures.push(assignatura);
    return assignatura;
}

