import React, { PropTypes } from 'react';
import { connect } from 'react-redux'

import EmailField from './email-field.jsx';
import UserCard from './card.jsx';
import NextButton from './next-button.jsx';
import SigninButton from './signin-button.jsx';

class Login extends React.Component {
	constructor(props) {
		super(props);
	}
    render() {
        return (
        	<form data-toggle="validator" role="form" id="login">
        		<div className="form-group">
                    {this.props.userCard}
                </div>
        		<div className="form-group">
	    			<input type="password" id="password" className="form-control login__inputPassword" placeholder="PASSWORD" data-minlength="6" required/>
                </div>
	    		<div className="form-group">
                    {this.props.signIn}
                </div>
    		</form>
    	);
    }
}

const getUserCardState = (filter) => {
    switch (filter) {
        case 'email':
            return <EmailField />
        case 'card':
            return <UserCard />
    }
}

const getSignInState = (filter) => {
    switch (filter) {
        case 'email':
            return <NextButton />
        case 'card':
            return <SigninButton />
    }
}

const mapStateToProps = (state) => {
    console.log('User reducer ' + state.userReducer);
    return {
        userCard: getUserCardState(state.userReducer.filter),
        signIn: getSignInState(state.userReducer.filter)
    }
}

export default connect(mapStateToProps)(Login);