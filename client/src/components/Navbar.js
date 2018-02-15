import React from 'react';
import { Navbar, NavItem, Icon } from 'react-materialize';

const render = props => (
	<Navbar style={{paddingLeft: '1rem', paddingRight: '1rem',}} brand={<span>MomCon</span>} right fixed>
		<NavItem><Icon>forum</Icon></NavItem>
		<NavItem><Icon>people</Icon></NavItem>
		<NavItem><Icon>help</Icon></NavItem>
		<NavItem divider></NavItem>
		<NavItem><Icon>notifications</Icon></NavItem>
		<NavItem><Icon>account_circle</Icon></NavItem>
	</Navbar>
);

export default render;