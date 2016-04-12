
var Joi = require('joi');
var routes = require('./routes');

var incoming = {
	params: Joi.object().keys({
		record: Joi.boolean().required().default(false),
		lines: Joi.string().required(),
		checkBlacklist: Joi.boolean().required().default(false)
	}),
	routes: Joi.object().keys({
		"default": routes.standard
	})
};


module.exports = incoming;