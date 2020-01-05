const express = require('express');
const router = express.Router();
const activitatService = require('./activitats.service');
const authorize = require('_helpers/authorize')
const Role = require('_helpers/role');
const multipart = require('connect-multiparty');
const multipartMiddleware = multipart({
    uploadDir: './uploads'
});

router.get('/', authorize(Role.Admin), getAll); // admin only
router.get('/:id', authorize(), getById);   
router.post('/add', authorize(), add); 
router.get('/byAssignatura/:idAssignatura', authorize(), getAllByIdAssignatura);     // all authenticated users


module.exports = router;



function getAll(req, res, next) {
    activitatService.getAll()
        .then(assignatures => res.json(assignatures))
        .catch(err => next(err));
}

function getAllByIdAssignatura(req, res, next) {
    activitatService.getAllByIdAssignatura(req.params.idAssignatura)
        .then(assignatures => res.json(assignatures))
        .catch(err => next(err));
}

function getById(req, res, next) {
    /*
    const currentUser = req.user;
    const id = parseInt(req.params.id);

    // only allow admins to access other user records
    if (id !== currentUser.sub && currentUser.role !== Role.Admin) {
        return res.status(401).json({ message: 'Unauthorized' });
    }*/

    activitatService.getById(req.params.id)
        .then(assignatura => assignatura ? res.json(assignatura) : res.sendStatus(404))
        .catch(err => next(err));
}

function add(req, res, next) {

    const currentUser = req.user;
    const id = parseInt(req.params.id);
    // only allow admins to access other user records
    if (id !== currentUser.sub && currentUser.role !== Role.Admin) {
        return res.status(401).json({ message: 'Unauthorized' });
    }

    activitatService.add(req.body)
        .then(user => user ? res.json(user) : res.status(400).json({ message: 'Username or password is incorrect' }))
        .catch(err => next(err));
}




