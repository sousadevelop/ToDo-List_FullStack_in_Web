const connection = require('./connection')

// Pega todas as tasks
const getAll = async () => {
    // É preciso validar e evitar concatenação na query para evitar SQLi
    const tasks = await connection.execute('SELECT * FROM tasks')
    return tasks[0]
}

// Cadastra todas as tasks
const createTask = async (task) => {
    const { title } = task
    const dateUTC = new Date(Date.now()).toUTCString()

    const query = 'INSERT INTO tasks(title, status, created_at) VALUES (?, ?, ?)'

    const [createdTask] = await connection.execute(query, [title, 'pendente', dateUTC])

    return {insertId: createdTask.insertId}
}

// Deleta a task cujo id for passado
const deleteTask = async (id) => {
    const [removedTask] = await connection.execute('DELETE FROM tasks WHERE id=?', [id])
    return removedTask 
}

// Atualiza a task cujo id for passado
const updateTask = async (id, task) => {
    const { title, status } = task
    
    const query = 'UPDATE tasks SET title=?, status=? WHERE id=?'

    const [updatedTask] = await connection.execute(query, [title, status, id])
    return updatedTask 
}

module.exports = {
    getAll,
    createTask,
    deleteTask,
    updateTask,
}