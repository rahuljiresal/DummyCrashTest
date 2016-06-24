'use strict';

var React = require('./util/react.android');
//     HistoryStore = require('./stores/history'),
//     Login = require('./components/login/login'),
//     Constants = require('./constants'),
//     _ = require('lodash');
//
// let Chat = require('./actions/chat');
let Authenticate = require('./components/login/authenticate.mobile');

var dummy = React.createClass({
    // getInitialState: function () {
    //     return {
    //         page: HistoryStore.current
    //     };
    // },
    //
    // componentDidMount: function () {
    //     HistoryStore.addChangeListener(this.handleUpdateHistory);
    // },
    //
    // componentWillUnmount: function () {
    //     HistoryStore.removeChangeListener(this.handleUpdateHistory);
    // },

    render_android: function() {
        return <Authenticate />;
        // let view;
        // switch (this.state.page.id) {
        //     case Constants.History.START:
        //     case Constants.History.LOADING:
        //     case Constants.History.LOGIN_WELCOME:
        //     case Constants.History.LOGIN_SETHOST:
        //     case Constants.History.LOGIN_IDENTIFY:
        //     case Constants.History.LOGIN_AUTHENTICATE:
        //         view = <Login page={ this.state.page } />;
        //         break;
        //     default:
        //         view = <View/>;
        //         break;
        // }
        // return view;
    },

    // handleUpdateHistory: function (page) {
    //     this.setState({ page: page });
    // },
});

ReactNative.AppRegistry.registerComponent('DummyCrashTest', () => dummy);
