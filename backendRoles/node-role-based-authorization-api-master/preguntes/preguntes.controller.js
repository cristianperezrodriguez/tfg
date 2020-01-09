const express = require('express');
const router = express.Router();
const preguntesService = require('./preguntes.service');
const authorize = require('_helpers/authorize')
const Role = require('_helpers/role');
const multipart = require('connect-multiparty');
const multipartMiddleware = multipart({
    uploadDir: './uploads'
});

router.get('/', authorize(Role.Admin), getAll); // admin only
router.get('/:id', authorize(), getById);   
router.post('/update', authorize(), update); 
router.get('/byAssignatura/:idAssignatura', authorize(), getAllByIdAssignatura);     // all authenticated users


module.exports = router;



function getAll(req, res, next) {
    preguntesService.getAll()
        .then(preguntes => res.json(preguntes))
        .catch(err => next(err));
}

function getById(req, res, next) {
    preguntesService.getById(req.params.id)
        .then(assignatura => assignatura ? res.json(assignatura) : res.sendStatus(404))
        .catch(err => next(err));
}

function getAllByIdAssignatura(req, res, next) {
    preguntesService.getAllByIdAssignatura(req.params.idAssignatura)
        .then(preguntes => res.json(preguntes))
        .catch(err => next(err));
}

function update(req, res, next) {
    preguntesService.update(req.body)
        .then(user => user ? res.json(user) : res.status(400).json({ message: 'Username or password is incorrect' }))
        .catch(err => next(err));
}




