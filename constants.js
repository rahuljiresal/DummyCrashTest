'use strict';

let _ = require('lodash');

let mirror = function (arr) {
    return _.zipObject(arr, arr);
};

module.exports = {
    Actions: mirror([
        'HISTORY_CLEAR',
        'HISTORY_GO',
        'HISTORY_PUSH',
        'HISTORY_REPLACE',
        'HISTORY_RESTART',
    ]),
    Events: mirror([
        'UPDATE_HISTORY',
    ]),
    History: mirror([
        'LOADING',
        'LOGIN_AUTHENTICATE',
        'LOGIN_IDENTIFY',
        'LOGIN_SETHOST',
        'LOGIN_WELCOME',
        'START',
    ])
};
