import React, { Component } from 'react';
import { Link, Redirect } from 'react-router-dom';
import Nav from './Nav';

class Main extends Component {
  render() {
    if (!this.props.user) {
			return <Redirect to="/" />
		}
		return (
			<div className="app">
				<Nav user={this.props.user} />
        {
          this.props.user && this.props.user.local
            ? <div className="main">
      					<p>Welcome {this.props.user.local.username}</p>
      				</div> : 'Loading'
        }

	    </div>
		)
	}
}
// try it again now

export default Main;
