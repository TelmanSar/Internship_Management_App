import React, {Component} from 'react';
import {connect} from 'react-redux';
import {startLogin} from '../actions/authentication';

class LoginPage extends Component {

    state = {
        email: "",
        password: "",
        loginDisabled: true
    };

    handleChange = event => {
        if (this.state.email.length > 0 && this.state.password.length > 0) {
            this.setState({loginDisabled: false})
        }

        this.setState({
            [event.target.name]: event.target.value
        }, () => {
            if (this.state.email.length > 0 && this.state.password.length > 0) {
                this.setState({loginDisabled: false})
            }
        });
    };

    handleSubmit = event => {
        event.preventDefault();
        this.setState({
            loginDisabled: true
        });
        this.props.startLogin({
            email: this.state.email,
            password: this.state.password
        })
    };


    render() {
        return (
            <div className="wrapper fadeInDown">
                <div id="formContent">
                    <form onSubmit={this.handleSubmit}>
                        <input
                            type="email"
                            id="login"
                            className="fadeIn second"
                            name="email"
                            placeholder="login"
                            onChange={this.handleChange}
                        />
                        <input
                            type="password"
                            id="password"
                            className="fadeIn third"
                            name="password"
                            placeholder="password"
                            onChange={this.handleChange}
                        />
                        <input
                            type="submit"
                            className="fadeIn fourth"
                            value="Log In"
                            disabled={this.state.loginDisabled}
                        />
                    </form>
                </div>
            </div>
        )
    }
}


const mapDispatchToProps = dispatch => ({
    startLogin: userCredentials => dispatch(startLogin(userCredentials))
});

export default connect(null, mapDispatchToProps)(LoginPage);
