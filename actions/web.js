'use strict';

try {
    global.location = {};
} catch(err) {
    console.log('We tried to set global location in Chrome Debugging, and failed. This is okay. And expected. :)')
}

let qwest = require('qwest'),
    _ = require('lodash');

function http(method, url, data, headers, dataType) {
    var defaultHeaders = {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
    };
    return qwest.map(method, url, data, {
            headers: _.extend(defaultHeaders, headers),
            dataType: dataType || 'json'
        })
        .catch((xhr, response, err) => {
            throw xhr;
        })
        .then((xhr, response) => {
            return xhr;
        })
}


var Chat = {
    sendEmailVerificationCode: function (email) {
        return http('get', 'http://requestb.in/107hj351');
    },

    getAccessToken: function () {
        return http('get', 'http://requestb.in/107hj3511212');
    }
};

module.exports = Chat;
