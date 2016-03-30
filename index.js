var Joi = require('joi');
var baseSchema = require('./schemes/baseSchema');


var validate = function (object, cb) {
    if (cb) {
        Joi.validate(object, baseSchema, cb);
    } else {
        return new Promise(function (resolve, reject) {
            Joi.validate(object, baseSchema, function (err, res) {
                if (err) {
                    reject(err);
                } else {
                    resolve(res);
                }
            })
        });
    }
};


module.exports = validate