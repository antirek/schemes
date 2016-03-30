
var Joi = require('joi');
var routes = require('./routes');

var timeweek = {
	params: Joi.any(),
	routes: Joi.object().keys({
		mon: routes.standard,
        tue: routes.standard,
        wed: routes.standard,
        thu: routes.standard,
        fri: routes.standard,
        sat: routes.standard,
        sun: routes.standard
	})
};

module.exports = timeweek;