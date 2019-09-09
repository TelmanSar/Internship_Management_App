import React, {Component} from 'react'
import {connect} from 'react-redux'


export default class LoginPage extends Component {


    render() {
        return (
            <div className="wrapper fadeInDown">
                <div id="formContent">
                    <form>
                        <input type="text" id="login" className="fadeIn second" name="login" placeholder="login"/>
                        <input type="text" id="password" className="fadeIn third" name="login" placeholder="password"/>
                        <input type="submit" className="fadeIn fourth" value="Log In"/>
                    </form>
                </div>
            </div>
        )
    }
}