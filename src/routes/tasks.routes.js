const route = require('express').Router();

const { getTasks, getTask, postTask, putTask, deleteTask } = require('../controllers/tasks.controller')

route.get('/', getTasks);
route.get('/:id', getTask)
route.post('/', postTask);
route.put('/:id', putTask);
route.delete('/:id', deleteTask);

module.exports = route