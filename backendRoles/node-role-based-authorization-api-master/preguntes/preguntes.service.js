const config = require('config.json');
const jwt = require('jsonwebtoken');
const Role = require('_helpers/role');

var preguntes = [
    { id: 1, id_assignatura: 1, id_activitat: 1, numero_pregunta: 1, valoracio_minima: 0, valoracio_maxima: 1, percentatge_correccio: 0.8},
    { id: 2, id_assignatura: 1, id_activitat: 1, numero_pregunta: 2, valoracio_minima: 0, valoracio_maxima: 1.5, percentatge_correccio: 0.4},
    { id: 3, id_assignatura: 1, id_activitat: 1, numero_pregunta: 3, valoracio_minima: 0, valoracio_maxima: 3, percentatge_correccio: 0.2},
    { id: 4, id_assignatura: 1, id_activitat: 1, numero_pregunta: 4, valoracio_minima: 0, valoracio_maxima: 1.5, percentatge_correccio: 0.2},
    { id: 5, id_assignatura: 1, id_activitat: 1, numero_pregunta: 5, valoracio_minima: 0, valoracio_maxima: 3, percentatge_correccio: 0.1},
    { id: 6, id_assignatura: 2, id_activitat: 1, numero_pregunta: 1, valoracio_minima: 0, valoracio_maxima: 1.5, percentatge_correccio: 0},
    { id: 7, id_assignatura: 2, id_activitat: 1, numero_pregunta: 2, valoracio_minima: 0, valoracio_maxima: 3, percentatge_correccio: 0.4},
    { id: 8, id_assignatura: 2, id_activitat: 1, numero_pregunta: 3, valoracio_minima: 0, valoracio_maxima: 1.5, percentatge_correccio: 0.7},
    { id: 9, id_assignatura: 2, id_activitat: 1, numero_pregunta: 4, valoracio_minima: 0, valoracio_maxima: 3, percentatge_correccio: 0.7}
];
/*
id: number;
    codi: string;
    nom: string;
    any:string;*/

module.exports = {
    getAll,
    getById,
    getAllByIdActivitat,
    update
};

async function getAll() {
    return preguntes.map(u => {
        return u;
    });
}

async function getById(id) {
    const activitat = preguntes.find(u => u.id === parseInt(id));
    if (!activitat) return;
    return activitat;
}

async function getAllByIdActivitat(idActivitat) {
    const activ = preguntes.filter(u =>u.id_activitat === parseInt(idActivitat) );
    if (!activ) return;
    return activ;
}

async function update(body) {
    var pregunta = getById(body.id);
    if (!pregunta) return;
    preguntes = body;
    return activitat;
}