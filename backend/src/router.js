const express = require('express')
const tasksController = require('./controllers/tasksController')
const tasksMiddleware = require('./middlewares/tasksMiddleware')

const router = express.Router()

// Sistemas de rotas
router.get('/tasks', tasksController.getAll)
router.post('/tasks', tasksMiddleware.validateBody, tasksController.createTask)   /* As funções middleware ficaram no meio do caminho */
router.delete('/tasks/:id', tasksController.deleteTask)
router.put('/tasks/:id',
        tasksMiddleware.validateBody,
        tasksMiddleware.validateStatus,
        tasksController.updateTask
        )

// Modularização
module.exports = router