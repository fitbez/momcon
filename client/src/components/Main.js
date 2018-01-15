import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Nav from './Nav';

class Main extends Component {
  render() {
		return (
			<div className="app">
				<Nav user={this.props.user} />
        {
          this.props.user
            ? <div className="main">
      					<p>Welcome {this.props.user.local.name}</p>
      				</div> : 'Loading'
        }

	    </div>
		)
	}
}


export default Main;
