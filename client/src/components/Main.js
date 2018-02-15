import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { Row, Col, Card, CardPanel, Button, Icon } from 'react-materialize';
import Navbar from './Navbar.js';

class Main extends Component {
  render() {
    if (!this.props.user) {
			return <Redirect to="/" />;
		}
		return (
			<div className="App">
				<Navbar />
        {
          (this.props.user && this.props.user.local) ? (
						<Row className="Main">
							<Col>
								<p>Welcome, {this.props.user.local.username}</p>
							</Col>
						</Row>
					) : (
						<Row>
							<Col s={12} m={6} l={4}>
								<CardPanel>
									<span>I am a very simple card. I am good at containing small bits of information. I am convenient because I require little markup to use effectively. I am similar to what is called a panel in other frameworks.</span>
								</CardPanel>
							</Col>
							<Col s={12} m={6} l={4}>
								<Card title='Test Card'>
									I am a slightly less simple card.
								</Card>
							</Col>
							<Col s={12} m={6} l={4}>
								<Card
									title='Test Card'
									actions={[
										<Button flat className='blue' waves='light' key='1'>button<Icon left>all_inclusive</Icon></Button>
									]}
								>
									I am a less slightly less simple card than the slightly less simple card.
								</Card>
							</Col>
						</Row>
					)
        }
	    </div>
		);
	}
}

export default Main;
