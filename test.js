
var Joi = require('joi');

var baseSchema = require('./schemes/baseSchema');

var peer1 = require('./objects/valid/peer/peer1.json');
var user1 = require('./objects/valid/user/user1.json');


var validate = function (object, schema) {
    return new Promise(function (resolve, reject) {
        Joi.validate(object, schema, function (err, res) {
            if (err) {
                reject(err);
            } else {
                resolve(res);
            }
        })
    });
};


var arr = [
    validate(peer1, baseSchema),
    validate(user1, baseSchema),
];

Promise.all(arr)
    .then(function (res) {
        console.log('all good');
    })
    .catch(console.log);