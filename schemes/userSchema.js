
var Joi = require('joi');

var user = {
	params: Joi.object().keys({
		"peername": Joi.string().required(),
		"secret": Joi.string().required(),
		"record": Joi.string().required().valid('yes', 'no')
	}),
	routes: Joi.object().keys({

	})
};


module.exports = user;