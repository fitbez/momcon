import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import Nav from './Nav';
// TODO - add proptypes

class Home extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div className="app">
				<Nav />
				<div className="main">
					<p>Main description about the app will go here</p>
				</div>
				<div>
					<Link to="signup"><div className="signup">Sign Up</div></Link>
				</div>
	      {/*<Header *user={this.state.user} />*/}
	      {/* LINKS to our different 'pages' */}
	      {/*<DisplayLinks _logout={this._logout} loggedIn={this.state.loggedIn} />*/}
	      {/*  ROUTES */}
	      {/* <Route exact path="/" component={Home} /> */}
	      {/*<Route exact path="/" render={() => <Home user={this.state.user} />} /> */}

	      {/* <LoginForm _login={this._login} /> */}
	    </div>
		)
	}
}
/*const Home = props => {
	if (props.user) {
		return (
			<div className="Home">
				<p>Current User:</p>
				<code>
					{JSON.stringify(props)}
				</code>
			</div>
		)
	} else {
		return (
			<div className="Home">
				<p>Current User:</p>
				<code>
					{JSON.stringify(props)}
				</code>
			</div>
		)
	}
} */

export default Home
