const jwt = require('jsonwebtoken');
const User = require('../models/userModel');




module.exports = (req, res, next) => {

    try {
        //for verifcation token
        //take a token from headers and check 
        const token = req.headers.authorization.split(" ")[1];
        
        const decoded = jwt.verify(token,process.env.JWT_KEY);
        req.userData = decoded;
        
        next();

    } catch (error) {
        return res.status(401).json({
            message: "auth failed"
        });
    }

}