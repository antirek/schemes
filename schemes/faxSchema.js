
var Joi = require('joi');
var routes = require('./routes');

var fax = {
	params: Joi.any(),
	routes: Joi.any()
};


module.exports = fax;