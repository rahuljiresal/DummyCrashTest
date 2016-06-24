'use strict';

let Colors = require('../colors');

module.exports = {
    container: {
        flex: 1,
        flexDirection: 'column',
        alignItems: 'stretch'
    },
    label: {
        fontSize: 12,
        color: Colors.lightTextColor,
    },
    footerView: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    footerText: {
        color: Colors.lightTextColor,
        marginTop: 20,
        marginLeft: 16,
        fontSize: 13,
        alignSelf: 'center'
    },
    requestNewCode: {
        color: Colors.defaultIOSTintColor,
        fontSize: 13,
    },

};