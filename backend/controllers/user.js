
const bcrypt = require('bcrypt');
const User = require('../models/user');

exports.signup = (req, res, next) => {
    console.log(req.body.password);
    bcrypt.hash( req.body.password, 10 )
    .then( hash => {
        const user = User.create({
            name: req.body.name,
            password: hash
        })
        .then( () => res.status(201).json({ message: 'Utlisateur bien crée !'}))
        .catch( error => res.status(500).json({ error }));   
    })
    .catch( error => res.status(500).json({ error }));
};