/**
 * Created by rahul on 10/22/15.
 */

'use strict';

var Colors = require('../../styles/js/colors'),
    History = require('../../actions/history'),
    Chat = require('../../actions/chat'),
    _ = require('lodash');

var { Text, TouchableOpacity, View, Alert, ScrollView, TextInput, ToolbarAndroid } = ReactNative;
let { styles, images } = React;

var VerificationView = React.createClass({

    getInitialState: function() {
        let email = this.props.email;
        return {
            code: '',
            showLoadingOverlay: false,
            email: email
        };
    },

    androidTopBar: function() {
        return (
            <ToolbarAndroid
                title={ 'Enter Verification Code' }
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
                        <Text style={ styles.authenticate.label }>{ 'Look for your one-time authorization code in your email.' }</Text>
                        <Text style={ styles.authenticate.label }>{ 'Authorization Code' }</Text>
                        <TextInput
                            keyboardType='numeric'
                            returnKeyType={ 'go' }
                            autoFocus={ true }
                            underlineColorAndroid={ 'blue' }
                            onChangeText={ this._textChanged }
                            onSubmitEditing={ this._submitCode }
                        />
                        <View style={styles.authenticate.footerView}>
                            <Text style={styles.authenticate.footerText}>{'Did not receive the email?'}</Text>
                            <TouchableOpacity underlayColor={ Colors.clearColor }
                                              activeOpacity={.2}
                                              onPress={this._newCodeRequested }>
                                <Text style={styles.authenticate.requestNewCode}>{'Request a new code.'}</Text>
                            </TouchableOpacity>
                        </View>
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

    _newCodeRequested: function() {
        Chat.sendEmailVerificationCode(this.state.email);
    },

    _submitCode: function(code) {
        Chat.getAccessToken(code, this.state.email).then(this._handleAuthSuccess, this._handleAuthFailure);
    },

    _handleAuthSuccess: function(token) {
        Chat.getUser(this.props.email)
            .then(() => console.log('success'), () => console.log('failure'));
    },

    _handleAuthFailure: function(xhr) {
        Alert.alert('Oops!', xhr.responseText, [
            {text: 'OK', onPress: () => console.log('OK Pressed!'), style: 'cancel'},
        ]);
    }
});

module.exports = VerificationView;
