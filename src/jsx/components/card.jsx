import React, { PropTypes } from 'react';

class userField extends React.Component {
	constructor(props) {
		super(props);
	}
	render() {
		return (
            <div className="userCard">
                <img className="userCard__dp" src="/images/login2/jeff-pic.png" data-at2x="/images/login2/jeff-pic@2x.png" data-at3x="/images/login2/jeff-pic@3x.png" />
                <h1 className="userCard__name">Jeffery Aramini</h1>
                <p className="userCard__email">jeff_aramini@ihealthsolutions.net</p>
            </div>
		);
	}
	
}

export default (userField);