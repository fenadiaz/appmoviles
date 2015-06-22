'use strict';

var mongoose = require('mongoose');

var farmaciaSchema = new mongoose.Schema({
	nombre: {type: String, required:true},
  	direccion:  {type: String, required:true},
  	numero: {type: String, required:true},
  	comuna: {type: String, required:true},
  	latitud: {type: Number, required:true},
  	longitud: {type: Number, required:true},
  	productos: [],
});

module.exports = mongoose.model('farmacias', farmaciaSchema );
