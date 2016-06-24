/**
 * Created by rahul on 10/22/15.
 */

'use strict';

let Chat = require('../../actions/chat'),
    History = require('../../actions/history'),
    Pages = require('../../constants').History,
    _ = require('lodash');

let { Text, ScrollView, View, TextInput, Alert, ToolbarAndroid } = ReactNative;
let { styles, images } = React;

var LoginView = React.createClass({

    getInitialState: function() {
        return {
            email: 'rahul@aerofs.com',
        };
    },

    androidTopBar: function() {
        return (
            <ToolbarAndroid
                title={ 'Login' }
                titleColor={ 'white' }
                style={ styles.topBar.darkTopBar }
                navIcon={ images.backWhite }
                onIconClicked={ () => {
                    History.back();
                }}
                actions={[ {title: 'Next', show: 'always'} ]}
                onActionSelected={ this._submitEmail }
            />
        );
    },

    render_android: function () {
        return (
            <View style={ styles.identify.container }>
                { this.androidTopBar() }
                <View style={[ { flex: 1, padding: 8 }]}>
                    <View>
                        <Text style={ styles.identify.label }>{ 'Email Address' }</Text>
                        <TextInput
                            keyboardType='email-address'
                            autoCapitalize={ 'none' }
                            autoCorrect={ false }
                            underlineColorAndroid={ 'blue' }
                            returnKeyType={ 'next' }
                            onChangeText={(text) => this.setState({ email: text })}
                            onSubmitEditing={ this._submitEmail }
                        />
                    </View>
                </View>
            </View>
        );
    },

    _submitEmail: function() {
        Chat.sendEmailVerificationCode(this.state.email).then(this._handleEmailSendSuccess, this._handleEmailSendFailure);
    },

    _handleEmailSendSuccess: function() {
        History.push(Pages.LOGIN_AUTHENTICATE, { email: 'rahul@aerofs.com' });
    },

    _handleEmailSendFailure: function(xhr) {
        Alert.alert(
            'Oops!',
            xhr.responseText,
            [
                { text: 'OK', onPress: () => console.log('OK Pressed!') },
            ]
        );
    }
});

module.exports = LoginView;