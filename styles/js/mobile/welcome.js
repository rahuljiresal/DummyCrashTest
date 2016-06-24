'use strict';

let Colors = require('../colors');

module.exports = {
    mainContainer: {
        flex: 1
    },
    titleContent: {
        alignItems: 'center'
    },
    aeroimText: {
        fontSize: 28,
        marginTop: 100
    },
    descriptionText: {
        fontSize: 16,
        marginTop: 15
    },
    continueContent: {
        flex: 1,
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'flex-end'
    },
    continueText: {
        color: Colors.defaultIOSTintColor,
        fontSize: 24,
        marginBottom: 100
    },
};