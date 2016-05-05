import React from 'react';
import {render} from 'react-dom';

import Logo from './logo.jsx';
import Login from './login.jsx';
import HelpLink from './help-link.jsx';
import Footer from './footer.jsx';

class App extends React.Component {
  render () {
    return (
    	<div>
    		<Logo/>
    		<Login/>
    		<HelpLink/>
    		<Footer/>
    	</div>
	);
  }
}

render(<App/>, document.getElementById('app'));
