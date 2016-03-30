
var Joi = require('joi');
var routes = require('./routes');

var queue = {
	params: Joi.object().keys({
		name: Joi.string().required()
	}),
	routes: Joi.any()
};


module.exports = queue;