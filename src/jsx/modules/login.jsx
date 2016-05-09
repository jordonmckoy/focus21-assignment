import React, { PropTypes } from 'react';
import { render } from 'react-dom';
import { connect } from 'react-redux'

import Logo from './../components/logo.jsx';
import LoginForm from './../components/login-form.jsx';
import HelpLink from './../components/help-link.jsx';
import Thumbnails from './../components/thumbnails.jsx';
import Footer from './../components/footer.jsx';

class Login extends React.Component {
	constructor(props) {
		super(props);
	}
  	render () {
	    return (
	    	<div id="app">
				<Logo/>
				<LoginForm/>
				<HelpLink/>
				{this.props.thumbnails}
				<Footer/>
			</div>
		);
  	}
}

const getThumbnailState = (filter) => {
    switch (filter) {
        case 'email':
            return <div></div>
        case 'card':
            return <Thumbnails />
    }
}

const mapStateToProps = (state) => {
    console.log('User reducer ' + state.userReducer);
    return {
        thumbnails: getThumbnailState(state.userReducer.filter)
    }
}

export default connect(mapStateToProps)(Login);