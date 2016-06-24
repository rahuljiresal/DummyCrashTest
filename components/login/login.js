'use strict';

let Authenticate = require('./authenticate.mobile'),
    Identify = require('./identify.mobile'),
    Constants = require('../../constants'),
    Welcome = require('../../components/login/welcome.mobile'),
    SetHost = require('../../components/login/set-host.mobile'),
    History = require('../../models/History');

var Login = React.createClass({
    propTypes: {
        page: React.PropTypes.instanceOf(History).isRequired
    },

    render_android: function () {
        let page = this.props.page,
            view;
        switch (this.props.page.id) {
            case Constants.History.LOGIN_SETHOST:
                view = <SetHost />;
                break;
            case Constants.History.LOGIN_AUTHENTICATE:
                view = <Authenticate email={ page.opts.email } />;
                break;
            case Constants.History.LOGIN_IDENTIFY:
                view = <Identify />;
                break;
            case Constants.History.LOGIN_WELCOME:
            default:
                view = <Welcome />;
                break;
        }
        return view;
    }
});

module.exports = Login;
