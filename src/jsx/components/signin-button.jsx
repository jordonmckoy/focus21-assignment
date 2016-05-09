import React, { PropTypes } from 'react';
import { render } from 'react-dom';
import { connect } from 'react-redux'
import { Link } from 'react-router';
import { browserHistory } from 'react-router';
import $ from 'jquery';

class nextButton extends React.Component {
	constructor(props) {
		super(props);
		this.validate = this.validate.bind(this);
	}
	validate(e) {
		console.log('Sign in validate');
		if ($('#password').val() == "focus21") {
			this.props.dispatch ({
				type: 'VALID_LOGIN'
			});
			browserHistory.push('/');
		} else {
			console.log("wrong password: " + $('#password').val());
			var pass = $('#password').val();
			var duration = 50;
			var distance = 10;
			for (var i = 0; i < 6; i++) {
				$('#password').animate({
					'margin-left': "+=" + (distance = -distance) + "px",
					'margin-right': "-=" + distance + "px"
				},duration);
			}
			$('#password').val('');
		}
	}
	render() {
		return (
        	<input className="btn btn-default login__inputButton" type="button" onClick={this.validate} value="Sign In"/>
		);
	}
}

export default connect()(nextButton);