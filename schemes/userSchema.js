
var Joi = require('joi');
var routes = require('./routes');

var user = {
	params: Joi.any(),
	routes: Joi.any()
};


module.exports = user;
