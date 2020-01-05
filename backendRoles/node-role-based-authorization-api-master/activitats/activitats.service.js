const config = require('config.json');
const jwt = require('jsonwebtoken');
const Role = require('_helpers/role');

var activitats = [
    { id: 1, id_assignatura: 1, nom: 'examen1', data: '2015-03-25', fileName: ''},
    { id: 2, id_assignatura: 1, nom: 'examen2', data: '2015-03-26',fileName: ''},
    { id: 3, id_assignatura: 2, nom: 'examen2', data: '2015-03-26', fileName: ''}
];
/*
id: number;
    codi: string;
    nom: string;
    any:string;*/

module.exports = {
    getAll,
    getById,
    getAllByIdAssignatura,
    add
};

async function getAll() {
    return activitats.map(u => {
        return u;
    });
}

async function getAllByIdAssignatura(idAssignatura) {
    const activ = activitats.filter(u =>u.id_assignatura === parseInt(idAssignatura) );
    if (!activ) return;
    return activ;

}

async function getById(id) {
    const activitat = activitats.find(u => u.id === parseInt(id));
    if (!activitat) return;
    return activitat;
}

async function add(body) {
    body.id = activitats.length ? Math.max(...activitats.map(x => x.id)) + 1 : 1;
    var activitat = body;
    //assignatura.id = assignatures.length ? Math.max(...assignatures.map(x => x.id)) + 1 : 1;
    if (!activitat) return;
    activitats.push(activitat);
    return activitat;
}
