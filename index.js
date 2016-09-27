var Joi = require('joi');
var baseSchema = require('./schemes/baseSchema');
var vpbxSettingsSchema = require('./schemes/vpbxSettingsSchema');
var blacklistSchema = require('./schemes/blacklistSchema');
var trunkSchema = require('./schemes/trunkSchema');


var validate = function (object, schema, options, cb) {
    if(!cb && typeof options === 'function'){
        cb = options;
        options = {};
    }

    if (cb) {
        Joi.validate(object, schema, options, cb);
    } else {
        return new Promise(function (resolve, reject) {
            Joi.validate(object, schema, options, function (err, res) {
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
    validate: validate,...
    base: baseSchema,
    vpbxSettings: vpbxSettingsSchema,
    blacklist: blacklistSchema,
    trunk: trunkSchema
};



