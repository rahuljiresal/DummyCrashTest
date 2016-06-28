'use strict';

let React = require('react');
let Test = require('./components/test');
let ReactNative = require('react-native');

var dummy = React.createClass({
    render: function() {
        return <Test/>;
    }
});

ReactNative.AppRegistry.registerComponent('DummyCrashTest', () => dummy);
