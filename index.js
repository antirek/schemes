
var Joi = require('joi');

var baseSchema = require('./schemes/baseSchema');

var peerTestObj = require('./objects/peerTest.json');
var userTestObj = require('./objects/userTest.json');

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
    validate(peerTestObj, baseSchema),
    validate(userTestObj, baseSchema),
];

Promise.all(arr)
.then(function (res) {
    console.log('all good');
})
.catch(console.log);