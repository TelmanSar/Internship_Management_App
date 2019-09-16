import React, {Component} from 'react'
import {connect} from 'react-redux'
import {startLogin} from '../ations/authentication'

 class LoginPage extends Component {
    state = {
        userCredentials:{
            email: "",
            password: ""
        },
        loginDisabled: !(this.userCredentials.email && this.userCredentials.email),
    };

    handleChange = event => {
        this.setState({
            userCredentials: {
                [event.target.name]: event.target.value
            }

        });
    };

    handleSubmit = event => {
        event.preventDefault();
        this.setState({
            loginDisabled: true
        });
        this.props.startLogin(this.state.userCredentials)
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
    startLogin: userInfo => dispatch(startLogin(userInfo))
});

export default connect(null, mapDispatchToProps)(LoginPage);
