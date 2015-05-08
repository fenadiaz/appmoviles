'use strict';

var farmaciasLib = require('../../../lib/farmaciasLib');

module.exports = function (router) {

  router.get('/', function (req, res) {

    farmaciasLib.getAll(function(error, results){

      res.setHeader('Access-Control-Allow-Origin','*');

      if (error){
        return res.status(500).json(error).end();
      }

      res.status(200).json(results).end();

    });

  });

  router.get('/:id', function (req, res) {

    var id = req.params.id;

    farmaciasLib.getById(id, function(error, product){

      if (error){
        if (error.message === 'NOT_FOUND'){
          return res.status(404).end();
        }
        return res.status(500).json(error).end();
      }

      res.status(200).json(product).end();

    });
  });

  router.post('/', function (req, res) {

    var newFarmacia = req.body;

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

    farmaciasLib.update(id, newData, function(error, product){

      if (error){
        if (error.message === 'NOT_FOUND'){
          return res.status(404).end();
        }
        return res.status(500).json(error).end();
      }

      res.status(200).json(product).end();

    });
  });

  router.delete('/:id', function (req, res) {

    var id = req.params.id;

    farmaciasLib.delete(id, function(error, product){

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
