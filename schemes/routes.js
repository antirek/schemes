
var Joi = require('joi');
var types = require('./types');

var route = {
	standard: Joi.object().keys({
		type: Joi.string().required().valid(types),
		id: Joi.string().required()
	}),
	interval: Joi.object().keys({
		type: Joi.string().required().valid(types),
		id: Joi.string().required(),
		begin: Joi.string().required(),
		end: Joi.string().required()
	}),
	group: Joi.object().keys({
		type: Joi.string().required().valid(types),
		id: Joi.string().required(),
		wait: Joi.string().required(),
		duration: Joi.string().required()
	}),
	key: Joi.object().keys({
		type: Joi.string().required().valid(types),
		id: Joi.string().required(),
		key: Joi.string().required()
	}),
	free: Joi.object().keys({
		type: Joi.string().required().valid(types)
	}),
	custom: Joi.object().keys({
		type: Joi.string().required().valid(types),
		id: Joi.string().required()
	})
};

module.exports = route;