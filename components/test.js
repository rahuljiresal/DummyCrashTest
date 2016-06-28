/**
 * Created by rahul on 6/28/16.
 */

let React = require('react');
let ReactNative = require('react-native');
var { Text, TouchableOpacity, View, Alert, ScrollView, TextInput, ToolbarAndroid, StyleSheet } = ReactNative;
let Web = require('../actions/web');

let Test = React.createClass({
    render: function() {
        return (
            <View style={styles.container}>
                <Text style={styles.welcome}>
                    Welcome to React Native!
                </Text>
                <TouchableOpacity onPress={ this.pressed }>
                    <Text style={styles.instructions}>
                        Press this
                    </Text>
                </TouchableOpacity>
                <Text style={styles.instructions}>
                    Press Cmd+R to reload,{'\n'}
                    Cmd+D or shake for dev menu
                </Text>
            </View>
        );
    },

    pressed: function() {
        Web.getAccessToken().then(this._handleAuthSuccess, this._handleAuthFailure);
    },

    _handleAuthSuccess: function(token) {
        console.log('success');
        Web.getAccessToken().then(this._handleAuthSuccess, this._handleAuthFailure);
    },

    _handleAuthFailure: function(xhr) {
        Alert.alert('Oops!', xhr.responseText, [
            {text: 'OK', onPress: () => Web.getAccessToken().then(this._handleAuthSuccess, this._handleAuthFailure), style: 'cancel'},
        ]);
    }
});

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    },
    instructions: {
        textAlign: 'center',
        color: '#333333',
        marginBottom: 5,
    },
});

module.exports = Test;