
var Joi = require('joi');
var routes = require('./routes');

var fax = {
	params: Joi.object().keys({
        email:Joi.string()
    }),
	routes: Joi.any()
};


module.exports = fax;