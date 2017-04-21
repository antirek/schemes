
var Joi = require('joi');
var routes = require('./routes');

var group = {
	params: Joi.any(),
	routes: Joi.array().items(routes.group)
};

module.exports = group;