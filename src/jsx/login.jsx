import React from 'react';

class Login extends React.Component {
    render() {
        return (
        	<form id="login">
        		<div class="form-group">
        			<input type="email" class="form-control" id="login__inputEmail" placeholder="Email"/>
        		</div>
        		<div class="form-group">
	    			<input type="password" class="form-control" id="login__inputPassword" placeholder="Password"/>
	    		</div>
	    		<div class="form-group">
	    			<input class="btn btn-default" type="button" id="login__inputButton" value="Next"/>
	    		</div>
    		</form>
    	);
    }
}

export default Login;