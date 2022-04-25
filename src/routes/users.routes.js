const route = require('express').Router();

const { getUsers, getUser, postUser, putUser, deleteUser } = require('../controllers/users.controller')

route.get('/', getUsers);
route.get('/:id', getUser);
route.post('/', postUser);
route.put('/:id', putUser);
route.delete('/', deleteUser);

module.exports = route