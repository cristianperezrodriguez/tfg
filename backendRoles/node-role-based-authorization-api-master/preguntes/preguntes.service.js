const config = require('config.json');
const jwt = require('jsonwebtoken');
const Role = require('_helpers/role');

var preguntes = [
    { id: 1, id_assignatura: 1, id_activitat: 1, numero_pregunta: 1, valoracio_minima: 0, valoracio_maxima: 1, percentatge_correccio: 0.8, fileName: ''},
    { id: 2, id_assignatura: 1, id_activitat: 1, numero_pregunta: 2, valoracio_minima: 0, valoracio_maxima: 1.5, percentatge_correccio: 0.4, fileName: ''},
    { id: 3, id_assignatura: 1, id_activitat: 1, numero_pregunta: 3, valoracio_minima: 0, valoracio_maxima: 3, percentatge_correccio: 0.2, fileName: ''},
    { id: 4, id_assignatura: 1, id_activitat: 1, numero_pregunta: 4, valoracio_minima: 0, valoracio_maxima: 1.5, percentatge_correccio: 0.3, fileName: ''},
    { id: 5, id_assignatura: 1, id_activitat: 1, numero_pregunta: 5, valoracio_minima: 0, valoracio_maxima: 3, percentatge_correccio: 0.1, fileName: ''},
    { id: 6, id_assignatura: 1, id_activitat: 2, numero_pregunta: 1, valoracio_minima: 0, valoracio_maxima: 1.5, percentatge_correccio: 0, fileName: ''},
    { id: 7, id_assignatura: 1, id_activitat: 2, numero_pregunta: 2, valoracio_minima: 0, valoracio_maxima: 3, percentatge_correccio: 0.4, fileName: ''},
    { id: 8, id_assignatura: 1, id_activitat: 2, numero_pregunta: 3, valoracio_minima: 0, valoracio_maxima: 1.5, percentatge_correccio: 0.7, fileName: ''},
    { id: 9, id_assignatura: 1, id_activitat: 2, numero_pregunta: 4, valoracio_minima: 0, valoracio_maxima: 3, percentatge_correccio: 0.7, fileName: ''},
    { id: 10, id_assignatura: 2, id_activitat: 1, numero_pregunta: 1, valoracio_minima: 0, valoracio_maxima: 1, percentatge_correccio: 0.8, fileName: ''},
    { id: 11, id_assignatura: 2, id_activitat: 1, numero_pregunta: 2, valoracio_minima: 0, valoracio_maxima: 1.5, percentatge_correccio: 0.4, fileName: ''},
    { id: 12, id_assignatura: 2, id_activitat: 1, numero_pregunta: 3, valoracio_minima: 0, valoracio_maxima: 3, percentatge_correccio: 0.2, fileName: ''},
    { id: 13, id_assignatura: 2, id_activitat: 1, numero_pregunta: 4, valoracio_minima: 0, valoracio_maxima: 1.5, percentatge_correccio: 0.2, fileName: ''},
    { id: 14, id_assignatura: 2, id_activitat: 1, numero_pregunta: 5, valoracio_minima: 0, valoracio_maxima: 3, percentatge_correccio: 0.1, fileName: ''}
];

module.exports = {
    getAll,
    getById,
    getAllByIdActivitatAndAssignatura,
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

async function getAllByIdActivitatAndAssignatura(id_assignatura, id_activitat) {
    const activ = preguntes.filter(u =>u.id_assignatura === parseInt(id_assignatura) && u.id_activitat === parseInt(id_activitat));
    if (!activ) return;
    return activ;
}

async function update(body) {
    var pregunta = getById(body.id);
    if (!pregunta) return;
    preguntes = body;
    return activitat;
}