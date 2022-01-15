const Sequelize = require('sequelize')
const sequelize = require('../config/config.json').sequelize;
const model = require('../models')


exports.insertUser = async (req, res) => {
    try {
        const { user_name, user_email, user_password, user_image } = req.body
        let user = await model.user.create({ user_name, user_email, user_password, user_image: req.file.filename })

        return res.status(200).json({ message: 'User created successfully', user_details: [{ user }] })
    }
    catch (err) {
        console.log(err);
        res.status(500).json({
            error: err
        })
    }
}

exports.getSingleUser = async (req, res, next) => {
    try {
        const { id } = req.query
        let user = await model.user.findByPk(id)
        return res.status(200).json({ user_details: [{ user }] })
    }
    //Error handling
    catch (err) {
        console.log(err);
        res.status(500).json({
            error: err
        })
    }

}

exports.getSingleUserImage = async (req, res, next) => {
    try {
        const { id } = req.query
        let user = await model.user.findByPk(id)
        user.dataValues.imageUrl = `${process.env.BASE_URL}/${user.user_image}`
        return res.status(200).json({ user_details: [{ user }] })
    }
    //Error handling
    catch (err) {
        console.log(err);
        res.status(500).json({
            error: err
        })
    }

}

exports.deleteUser = async (req, res, next) => {
    try {
        const { id } = req.query
        let user = await model.user.destroy({ where: { user_id: id } })
        return res.status(200).json({ message: 'User deleted Successfully' })
    }
    //Error handling
    catch (err) {
        console.log(err);
        res.status(500).json({
            error: err
        })
    }

}

exports.updateUser = async (req, res, next) => {
    try {
        const { user_name, user_email, user_password } = req.body
        const { id } = req.query
        let user = await model.user.update({ user_name, user_email, user_password }, { where: { user_id: id } })
        console.log(user)
        return res.status(200).json({ message: 'User updated' })
    }
    //Error handling
    catch (err) {
        console.log(err);
        res.status(500).json({
            error: err
        })
    }

}


