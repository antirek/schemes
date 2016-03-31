
var Joi = require('joi');
var routes = require('./routes');

var voicemail = {
	params: Joi.object().keys({
		number: Joi.string().required(),
		keys: Joi.string().required(),
		password: Joi.string().required()
	}),
	routes: Joi.any()
};


module.exports = voicemail;