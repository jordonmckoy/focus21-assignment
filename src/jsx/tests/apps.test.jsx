import React, { PropTypes } from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';

import Apps from './../components/apps.jsx';


describe('Enzyme Shallow', function() {
	it('Apps should contain 3 rows of app boxes', function() {
		let apps = shallow(<Apps/>);
		expect(apps.find('row').length).to.equal(3);
	});
});