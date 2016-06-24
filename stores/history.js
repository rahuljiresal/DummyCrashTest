'use strict';

let Constants = require('../constants');
let { Actions, Events } = Constants;
let BaseStore = require('./Store');
let History = require('../models/History');

// initialize private data
let current, data;
function initializeData() {
    current = 0;
    data = [new History(Constants.History.START, {})];
}
initializeData();

// define operations
class Store extends BaseStore {
    // events
    emitChange() {
        this.emit(Events.UPDATE_HISTORY, this.current);
    }

    addChangeListener(cb) {
        this.on(Events.UPDATE_HISTORY, cb);
    }

    removeChangeListener(cb) {
        this.removeListener(Events.UPDATE_HISTORY, cb);
    }

    // access
    get data() {
        return data;
    }

    get(id) {
        let index = (id >= 0) ? id : data.length + id;
        return data[index];
    }

    get current() {
        return data[current];
    }

    get length() {
        return data.length;
    }

    get canGoBack() {
        return current > 0;
    }
}

// export a singleton instance
module.exports = new Store((store, action) => {
    switch (action.type) {
        case Actions.HISTORY_GO:
        {
            // Loads a page from the session history, identified by its relative location to the current page
            // When index is out of bounds the method doesn't do anything and doesn't raise an exception.
            let delta = action.delta,
                index = current + delta;
            if (!Number.isInteger(delta)) {
                return;
            } else if (index < 0 || index >= data.length) {
                return;
            } else {
                current = index;
            }
            break;
        }

        case Actions.HISTORY_PUSH:
            // Pushes the given data onto the session history stack
            data = data.slice(0, current + 1).concat(new History(action.id, action.opts));
            current = data.length - 1;
            break;

        case Actions.HISTORY_REPLACE:
            // Updates the current entry on the history stack
            data[current] = new History(action.id, action.opts);
            break;

        case Actions.HISTORY_RESTART:
            // Restarts history with new data as the sole element
            initializeData();
            data[current] = new History(action.id, action.opts);
            break;

        case Actions.HISTORY_CLEAR:
        case Actions.LOG_OUT:
            initializeData();
            break;

        default:
            return;
    }
    store.emitChange();
});
