const validateBody = (req, res, next) => {
    const { body } = req

    if(body.title == undefined) {
        return res.status(400).json({ message: 'O campo "title" é obrigatório' })
    }
    if(body.title == '') {
        return res.status(400).json({ message: 'O title não pode ser vazio' })
    }

    next()
}

const validateStatus = (req, res, next) => {
    const { body } = req

    if(body.status == undefined) {
        return res.status(400).json({ message: 'O campo "status" é obrigatório' })
    }
    if(body.status == '') {
        return res.status(400).json({ message: 'O status não pode ser vazio' })
    }

    next()
}

module.exports = {
    validateBody,
    validateStatus,
}