'use strict';

let Dispatcher = require('../dispatcher'),
    EventEmitter = require('events').EventEmitter,
    _ = require('lodash');

//Set this value for now, knowing that
//Large conversations will complain until we limit
//the amount of monologues in the conversation
EventEmitter.defaultMaxListeners = 50;

class Store extends EventEmitter {
    constructor(cb) {
        super();
        // NOTE: cb.bind(this) is not working as expected: within the callback 'this' is still undefined
        this.dispatchToken = Dispatcher.register(cb instanceof Function ? cb.bind(this, this) : _.noop);
        Object.freeze(this);
    }
}

module.exports = Store;