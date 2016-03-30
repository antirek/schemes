
var Joi = require('joi');
var routes = require('./routes');

var incoming = {
	params: Joi.object().keys({
		record: Joi.string().required().valid(['true', 'false']),
		lines: Joi.string().required()
	}),
	routes: Joi.object().keys({
		"default": routes.standard
	})
};


module.exports = incoming;