'use strict';

var userlib = require('../../../lib/userLib');

module.exports = function(router){

    router.get('/',function(req,res){
      res.status(200).end();
    });

    router.post('/',function(req,res){
      console.log('post login');
      var data = req.body;
      console.log(data);
      var username = data.username;
      var password = data.password;

      userlib.findOne(username,password,function(error,user){
        if(error && error.message === 'NOT_FOUND'){
          return res.status(401).json({message:'USER_OR_PASSWORD_NOT_FOUND'});
        }
        if(error){
          return res.status(500).json(error).end();
        }//sdf
        var secret = 'secretpass';
        userlib.getToken(user, secret, function(error,token){
          return res.status(201).json({'token':token}).end();
        });
      });
    });
};
