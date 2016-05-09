import React, { PropTypes } from 'react';
import { connect } from 'react-redux'

class nextButton extends React.Component {
	constructor(props) {
		super(props);
	}
	render() {
		return (
            <input className="btn btn-default login__inputButton" type="button" value="Next"/>
		);
	}
	
}

export default connect()(nextButton);