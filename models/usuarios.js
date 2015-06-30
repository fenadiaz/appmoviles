'use strict';

var mongoose = require('mongoose');

var usuariosSchema = new mongoose.Schema({
	usuario: {type: String, required:true},
	password: {type: String, required:true},
	fecha: {type: String, required:true},
});

module.exports = mongoose.model('usuarios', usuariosSchema );
