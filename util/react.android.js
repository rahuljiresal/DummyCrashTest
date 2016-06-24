'use strict';

let React = global.React = require('react'),
    ReactNative = global.ReactNative = require('react-native'),
    _createClass = React.createClass,
    _ = require('lodash');

let noRenderMethod = function (displayName) {
    throw new Error(`Invariant Violation: Component "${ displayName }" must implement a "render_android" method.`);
};

try {
    global.location = {};
} catch(err) {
    console.log('We tried to set global location in Chrome Debugging, and failed. This is okay. And expected. :)')
}

// react native considers a console.error to be fatal, and stops the world
console.error = console.warn;

module.exports = Object.assign(React, {
    createClass: function(obj) {
        obj.render = obj.render_android || obj.render_mobile || obj.render || noRenderMethod.bind(this, obj.displayName);
        return _createClass(obj);
    },

    images: _.defaultsDeep(require('../styles/js/images.android'), require('../styles/js/images.mobile')),

    styles: _()
        .defaultsDeep(require('../styles/js/styles.android'), require('../styles/js/styles.mobile'))
        .mapValues(ReactNative.StyleSheet.create)
        .value()
});
