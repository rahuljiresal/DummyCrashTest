/**
 * Created by rahul on 10/22/15.
 */

'use strict';

var SetHostView = require('./set-host.mobile'),
    History = require('../../actions/history'),
    Pages = require('../../constants').History;

var { Text, TouchableOpacity, View } = ReactNative;
let { styles } = React;

var WelcomeView = React.createClass({

    getInitialState: function() {
        return {
        };
    },

    render: function() {
        return (
            <View style={styles.welcome.mainContainer}>
                <View style={styles.welcome.titleContent}>
                    <Text style={styles.welcome.aeroimText}>Amium</Text>
                    <Text style={styles.welcome.descriptionText}>{ 'Files and Chat' }</Text>
                </View>
                <View  style={styles.welcome.continueContent}>
                    <TouchableOpacity
                        onPress={this._onPressContinue}>
                        <Text style={styles.welcome.continueText}>{ 'Continue' }</Text>
                    </TouchableOpacity>
                </View>
            </View>
        );
    },

    _onPressContinue: function() {
        this.props.navigator && this.props.navigator.push({
            component: SetHostView
        });
        History.push(Pages.LOGIN_SETHOST, {});
    }
});


module.exports = WelcomeView;
