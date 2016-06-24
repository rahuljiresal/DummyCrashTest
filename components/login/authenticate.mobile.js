/**
 * Created by rahul on 10/22/15.
 */

'use strict';

var Colors = require('../../styles/js/colors'),
    Web = require('../../actions/web'),
    _ = require('lodash');

var { Text, TouchableOpacity, View, Alert, ScrollView, TextInput, ToolbarAndroid } = ReactNative;
let { styles, images } = React;

var VerificationView = React.createClass({

    getInitialState: function() {
        return {
            code: '',
        };
    },

    androidTopBar: function() {
        return (
            <ToolbarAndroid
                title={ 'Enter Code' }
                titleColor={ 'white' }
                style={ styles.topBar.darkTopBar }
                navIcon={ images.backWhite }
                onIconClicked={ () => {
                    History.back();
                }}
            />
        );
    },

    render_android: function () {
        return (
            <View style={ styles.authenticate.container }>
                { this.androidTopBar() }
                <View style={[{ flex: 1, padding: 8 }]}>
                    <View>
                        <Text style={ styles.authenticate.label }>{ 'Type something.' }</Text>
                        <Text style={ styles.authenticate.label }>{ 'Here' }</Text>
                        <TextInput
                            keyboardType='numeric'
                            returnKeyType={ 'go' }
                            autoFocus={ true }
                            underlineColorAndroid={ 'blue' }
                            onChangeText={ this._textChanged }
                            onSubmitEditing={ this._submitCode }
                        />
                    </View>
                </View>
            </View>
        );
    },


    _textChanged: function(text) {
        this.setState({ code: text });
        if (text.length === 6) {
            this._submitCode(text);
        }
    },

    _submitCode: function(code) {
        Web.getAccessToken().then(this._handleAuthSuccess, this._handleAuthFailure);
    },

    _handleAuthSuccess: function(token) {
        console.log('success');
    },

    _handleAuthFailure: function(xhr) {
        Alert.alert('Oops!', xhr.responseText, [
            {text: 'OK', onPress: () => console.log('OK Pressed!'), style: 'cancel'},
        ]);
    }
});

module.exports = VerificationView;
