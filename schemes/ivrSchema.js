
var Joi = require('joi');
var routes = require('./routes');

var ivr = {
	params: Joi.object().keys({
		"soundId": Joi.string().required(),
		"maxdigits": Joi.string().required(),
		"options": Joi.string().required()
	}),
	routes: Joi.array().items(routes.key)
};

module.exports = ivr;