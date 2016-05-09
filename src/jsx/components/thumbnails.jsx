import React, { PropTypes } from 'react';
import { Link } from 'react-router';

class nextButton extends React.Component {
	constructor(props) {
		super(props);
	}
	render() {
		return (
			<img className="thumbnails" src="/images/login2/logo-thumbnail.svg" />
		);
	}
}

export default (nextButton);