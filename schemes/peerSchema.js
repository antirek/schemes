var Joi = require('joi');

var peer = {
	params: Joi.object().keys({
		"peername": Joi.string().required(),
		"secret": Joi.string().required(),
		"record": Joi.string().required().valid('yes', 'no')
	}),
	routes: Joi.object().keys({
		"default": Joi.object().keys({
			type: Joi.string(),
			id: Joi.string()
		})
	})
};

module.exports = peer;