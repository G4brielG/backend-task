const route = require('express').Router();

const { getUsers } = require('../controllers/users.controller')

route.get('/', getUsers);

module.exports = route