// Importando a tasksModels
const tasksModels = require('../models/tasksModels')

// Middleware chamado no router
const getAll = async (_req, res) => {
    // Usando a função da models ele vai pegar os dados do DB e armazenar na var
    // tasks que será retornada se tudo der OK
    const tasks = await tasksModels.getAll()

    return res.status(200).json(tasks)
}

// Criando uma Task na camada acima da models
const createTask = async (req, res) => {
    const createdTask = await tasksModels.createTask(req.body)
    return res.status(201).json(createdTask)
}

// Deletando uma Task na camada acima da models
const deleteTask = async (req, res) => {
    const { id } = req.params

    await tasksModels.deleteTask(id)
    return res.status(204).json()
}

// Atualizando uma Task na camada acima da models
const updateTask = async (req, res) => {
    const { id } = req.params

    await tasksModels.updateTask(id, req.body)
    return res.status(204).json()
}

module.exports = {
    getAll,
    createTask,
    deleteTask,
    updateTask,
}