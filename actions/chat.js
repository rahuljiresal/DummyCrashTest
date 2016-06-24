'use strict';

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
        return http('get', 'http://requestb.in/1dko9sj1');
    },

    getAccessToken: function (code, email) {
        return http('get', 'http://requestb.in/1dko9sj1asd');
    }
};

module.exports = Chat;
