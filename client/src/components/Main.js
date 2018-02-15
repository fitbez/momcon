import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';

class Main extends Component {
  render() {
    if (!this.props.user) {
			return <Redirect to="/" />;
		}
		return (
			<div className="app">
        {
          (this.props.user && this.props.user.local) ? (
						<div className="main">
							<p>Welcome, {this.props.user.local.username}</p>
						</div>
					) : 'Loading'
        }
	    </div>
		);
	}
}


export default Main;
