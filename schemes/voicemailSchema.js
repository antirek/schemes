
var Joi = require('joi');
var routes = require('./routes');

var voicemail = {
	params: Joi.any(),
	routes: Joi.any()
};


module.exports = voicemail;