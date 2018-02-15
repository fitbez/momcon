import React, { Component } from 'react';
import { Link } from 'react-router-dom';
// TODO - add proptypes

class Home extends Component {

	render() {
		return (
			<div className="App">
				<div className="main">
					<p>Main description about the app will go here</p>
				</div>
				<div>
					<Link to="signup"><div className="signup">Sign Up</div></Link>
				</div>
	    </div>
		);
	}
	
}

export default Home;
