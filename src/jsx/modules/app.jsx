import React, { PropTypes } from 'react';
import { render } from 'react-dom';
import { connect } from 'react-redux'
import { browserHistory } from 'react-router';

import Logo from './../components/logo.jsx';
import Apps from './../components/apps.jsx';
import Footer from './../components/footer.jsx';

class App extends React.Component {
	constructor(props) {
		super(props);
	}
  	render () {
	    return (
	    	<div id="app">
				<Logo/>
				<Apps />
				<Footer/>
			</div>
		);
  	}
}

const getLoginCred = (status) => {
	if (status != 'VALID_LOGIN') {
		console.log ('You are not authorized to view this content. Please sign in first.');
		browserHistory.push('/login');
	}
}

const mapStateToProps = (state) => {
	return {
		checkLogin: getLoginCred(state.userReducer.status)
	}
}

export default connect(mapStateToProps)(App);