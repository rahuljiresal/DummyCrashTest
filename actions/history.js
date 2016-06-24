'use strict';

// Emulates the Web History API
// https://developer.mozilla.org/en-US/docs/Web/API/History

let Dispatcher = require('../dispatcher'),
    Constants = require('../constants'),
    Actions = Constants.Actions,
    _ = require('lodash');

let dispatch = function (payload) {
    if (Dispatcher.isDispatching()) {
        _.defer(Dispatcher.dispatch.bind(Dispatcher), payload);
    } else {
        Dispatcher.dispatch(payload);
    }
};

module.exports = {
    clear: function () {
        dispatch({
            type: Actions.HISTORY_CLEAR
        });
    },

    // Goes to the previous page in session history.
    // Calling this method to go back beyond the first page in the session history has no effect and doesn't raise an exception.
    back: function () {
        dispatch({
            type: Actions.HISTORY_GO,
            delta: -1
        });
    },

    // Goes to the next page in session history.
    // Calling this method to go forward beyond the most recent page in the session history has no effect and doesn't raise an exception.
    forward: function () {
        dispatch({
            type: Actions.HISTORY_GO,
            delta: +1
        });
    },

    // Loads a page from the session history, identified by its relative location to the current page.
    // When index is out of bounds the method doesn't do anything and doesn't raise an exception.
    go: function (delta) {
        dispatch({
            type: Actions.HISTORY_GO,
            delta: delta
        });
    },

    // Pushes the given data onto the session history stack
    push: function (id, opts) {
        dispatch({
            type: Actions.HISTORY_PUSH,
            id: id,
            opts: opts
        });
    },

    // Updates the current entry on the history stack
    replace: function (id, opts) {
        dispatch({
            type: Actions.HISTORY_REPLACE,
            id: id,
            opts: opts
        });
    },

    restart: function (id, opts) {
        dispatch({
            type: Actions.HISTORY_RESTART,
            id: id,
            opts: opts
        });
    }
};
