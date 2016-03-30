
var Joi = require('joi');
var types = require('./types');

var user = {
	params: Joi.any(),
	routes: Joi.any()
};


module.exports = user;
