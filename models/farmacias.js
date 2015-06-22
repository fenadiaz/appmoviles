'use strict';

var mongoose = require('mongoose');

var farmaciaSchema = new mongoose.Schema({
	nombre: {type: String, required:true},
  	direccion:  {type: String, required:true},
  	numero: {type: String, required:true},
  	comuna: {type: String, required:true},
  	latitud: {type: String, required:true},
  	longitud: {type: String, required:true},
  	productos: [],
});

module.exports = mongoose.model('farmacias', farmaciaSchema );
