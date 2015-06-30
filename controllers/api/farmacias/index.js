'use strict';

var farmaciasLib = require('../../../lib/farmaciasLib');
var secureApiLib = require('../../../lib/secureApiLib');

module.exports = function (router) {

  router.use('/', secureApiLib.jwtMiddleware);
  router.get('/', function (req, res) {

    farmaciasLib.getAll(function(error, results){

      res.setHeader('Access-Control-Allow-Origin','*');
      res.setHeader('x-access-token',req.body.token);
      if (error){
        return res.status(500).json(error).end();
      }

      res.status(200).json(results).end();

    });

  });

  router.get('/:id', function (req, res) {

    var id = req.params.id;

    farmaciasLib.getById(id, function(error, farmacy){

      if (error){
        if (error.message === 'NOT_FOUND'){
          return res.status(404).end();
        }
        return res.status(500).json(error).end();
      }

      res.status(200).json(farmacy).end();

    });
  });

  router.post('/', function (req, res) {

    var newFarmacia = req.body;
    console.log(req.body.token);
    res.setHeader('x-access-token',newFarmacia.token);
    farmaciasLib.create(newFarmacia, function(error){

      if (error){
        return res.status(500).json(error).end();
      }

      res.status(201).end();

    });
  });

  router.put('/:id', function (req, res) {

    var id = req.params.id;
    var newData = req.body;

    farmaciasLib.update(id, newData, function(error, farmacy){

      if (error){
        if (error.message === 'NOT_FOUND'){
          return res.status(404).end();
        }
        return res.status(500).json(error).end();
      }

      res.status(200).json(farmacy).end();

    });
  });

  router.delete('/:id', function (req, res) {

    var id = req.params.id;

    farmaciasLib.delete(id, function(error, farmacy){

      if (error){
        if (error.message === 'NOT_FOUND'){
          return res.status(404).end();
        }
        return res.status(500).json(error).end();
      }

      res.status(204).end();

    });
  });


};
