'use strict';

var usersLib = require('../../../lib/usersLib');

module.exports = function(router){

    router.get('/', function (req,res){
      res.status(200).end();
    });

     router.post('/', function (req, res) {

        var userData = req.body;    

        usersLib.findOne(userData.username, userData.password, function(error, user){

            if (error && error.message === 'NOT_FOUND'){
                return res.status(401).json({message: 'USER_OR_PASSWORD_NOT_FOUND'}).end();
            }

            if (error){
                return res.status(500).json(error).end();
            }
            console.log(user);
            usersLib.getToken(user.id, function(error, token){
                return res.status(201).json({'token': token}).end();  
            });      

        });

    });

};
