/**
 * Created by rahul on 10/22/15.
 */

'use strict';

let History = require('../../actions/history'),
    Pages = require('../../constants').History,
    _ = require('lodash');

let { Text, ScrollView, View, TextInput, Alert, ToolbarAndroid } = ReactNative;
let { styles, images } = React;

var LoginView = React.createClass({

    getInitialState: function() {
        return {
            hostname: '',
        };
    },

    androidTopBar: function() {
        return (
            <ToolbarAndroid
                title={ 'Set Server Address' }
                titleColor={ 'white' }
                style={ styles.topBar.darkTopBar }
                navIcon={ images.backWhite }
                onIconClicked={ () => {
                    History.back();
                }}
                actions={[ {title: 'Next', show: 'always'} ]}
                onActionSelected={ this.submitHostname }
            />
        );
    },

    render_android: function () {
        return (
            <View style={ styles.setHost.container }>
                { this.androidTopBar() }
                <View style={[ { flex: 1, padding: 8 }]}>
                    <View>
                        <Text style={ styles.setHost.label }>{ 'Please enter the address of your server.' }</Text>
                        <View style={ { flexDirection: 'row', alignItems: 'flex-end' } }>
                            <TextInput
                                style={{ flex: 1, alignItems: 'flex-end' }}
                                keyboardType='url'
                                autoCapitalize={ 'none' }
                                autoCorrect={ false }
                                placeholder='acme'
                                underlineColorAndroid={ 'blue' }
                                returnKeyType={ 'next' }
                                value={ this.state.hostname }
                                onChangeText={ this.changeText }
                                onSubmitEditing={ this.submitHostname }
                            />
                            <Text style={{ marginBottom: 6 }}>.amium.com</Text>
                        </View>
                    </View>
                </View>
            </View>
        );
    },

    changeText: function(text) {
        this.setState({ hostname: text })
    },

    submitHostname: function() {
            History.push(Pages.LOGIN_IDENTIFY);
    }
});

module.exports = LoginView;