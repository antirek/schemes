
var Joi = require('joi');
var routes = require('./routes');

var peergroup = {
	params: Joi.any(),
	routes: Joi.array().items(routes.peergroup)
};

module.exports = peergroup;