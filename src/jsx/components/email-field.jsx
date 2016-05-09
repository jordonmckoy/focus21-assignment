import React, { PropTypes } from 'react';
import { connect } from 'react-redux'

class userField extends React.Component {
	constructor(props) {
		super(props);
		this.validate = this.validate.bind(this);
	}
	validate(e) {
        // check if valid
        var regex = /(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))/;
        if (regex.test(e.target.value)) {
            console.log('Valid Email');
            if (e.target.value == "jeff_aramini@ihealthsolutions.next" || e.target.value == "test@test.com") {
                // call redux action
                this.props.dispatch({
                    type: 'VALID_EMAIL',
                    filter: 'card'
                });
            }
        } else {
            console.log('Invalid Email');
        }
    }
	render() {
		return (
			<input type="email" className="form-control login__inputEmail" placeholder="EMAIL" onChange={this.validate} required/>
		);
	}
}

export default connect()(userField);