'use strict';

let Colors = require('../colors');

module.exports = {
    container: {
        flex: 1,
        flexDirection: 'column',
        alignItems: 'stretch'
    },
    topBar: {
        backgroundColor: Colors.medBlueGrey,
        height: 56,
        flex: 0,
        flexDirection: 'row',
    },
    error: {
        backgroundColor: Colors.importantColor,
        padding: 4,
    },
    errorText: {
        color: 'black',
        opacity: 0.8,
    },
    label: {
        fontSize: 12,
        color: Colors.lightTextColor,
    },
};