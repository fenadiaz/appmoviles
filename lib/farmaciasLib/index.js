'use strict';

var FarmaciasModel = require('../../models/farmacias');
var logger = require('../logger');

var FarmaciasLib = function(){
  var self = this;

  self.getAll = function(callback){
    FarmaciasModel.find().exec(function(error, data){
        callback(error, data);
    });
  };

  self.getById = function(id, callback){
    FarmaciasModel.findOne({_id: id}).exec(function(error, data){
      if(!data){
        return callback(new Error('NOT_FOUND'));
      }
      callback(error, data);
    });
  };

  self.create = function(farmaciasData, callback){
    var newFarmacias = new FarmaciasModel(farmaciasData);

    newFarmacias.save(function(error, farmacias, numAffected){
        callback(error, farmacias);
    });
  };

  self.update = function(id, newData, callback){
    delete newData._id;

    FarmaciasModel.findOneAndUpdate({ _id: id }, newData, function(error, result){
      if(!result){
        return callback(new Error('NOT_FOUND'));
      }
      callback(error, result);
    });
  };

  self.delete = function(id, callback){
    FarmaciasModel.remove({_id: id}, function(error){
      callback(error, id);
    });
  };
};

module.exports = new FarmaciasLib();
