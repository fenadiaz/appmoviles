'use strict';

var mongoose = require('mongoose');

var farmaciaSchema = new mongoose.Schema({
	id: {type: Number, required:true},
	nombre: {type: String, required:true},
  	direccion:  {type: String, required:true},
  	numero: {type: String, required:true},
  	comuna: {type: String, required:true},
  	productos: [],
});

module.exports = mongoose.model('farmacias', farmaciaSchema );
