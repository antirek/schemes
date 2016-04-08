var Joi = require('joi');
var baseSchema = require('./schemes/baseSchema');
var vpbxSettingsSchema = require('./schemes/vpbxSettingsSchema');
var blacklistSchema = require('./schemes/blacklistSchema');

var validate = function (object, schema, cb) {
    if (cb) {
        Joi.validate(object, schema, cb);
    } else {
        return new Promise(function (resolve, reject) {
            Joi.validate(object, schema, function (err, res) {
                if (err) {
                    reject(err);
                } else {
                    resolve(res);
                }
            })
        });
    }
};


module.exports = {
    validate: validate,   
    base: baseSchema,
    vpbxSettings: vpbxSettingsSchema,
    blacklist: blacklistSchema  
};