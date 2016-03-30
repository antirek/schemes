
var Joi = require('joi');
var routes = require('./routes');

var timeday = {
	params: Joi.any(),
	routes: Joi.array().items(routes.interval)
};

module.exports = timeday;