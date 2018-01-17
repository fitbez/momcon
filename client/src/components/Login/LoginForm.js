import React, { Component } from 'react'
import { Redirect, Link } from 'react-router-dom';
import axios from 'axios';
import Nav from '../Nav';
import googleButton from './google_signin_buttons/web/1x/btn_google_signin_red_pressed_web.png';

const host = "http://localhost:8080";

class LoginForm extends Component {
	constructor() {
		super()
		this.state = {
			username: '',
			password: '',
			redirectTo: null,
			message: ''
		}
		// this.googleSignin = this.googleSignin.bind(this)
		this.handleSubmit = this.handleSubmit.bind(this)
		this.handleChange = this.handleChange.bind(this)
	}

	handleChange(event) {
		this.setState({
			[event.target.name]: event.target.value
		})
	}

	handleSubmit(event) {
		event.preventDefault();
		const { username, password } = this.state;
		axios
			.post(`${host}/auth/login`, {
				username,
				password
			})
			.then(response => {
				if (response.status === 200 && response.data.user) {
					// update the state
					this.setState({
						message: 'Login successful'
					});
					setTimeout(() => {
						this.props._saveUser(response.data.user)
					}, 3000);
				} else {
					this.setState({
						message: 'Invalid login username or password'
					});
				}
			}).catch(() => {
				this.setState({
					message: 'Invalid username or password'
				});
			})
	}
	render() {
		if (this.props.user && this.props.user._id) {
			return <Redirect to="main" />
		}
		return (
			<div className="app">
				<Nav />
				<div className="main">
				<div className="SignupForm">
					<h1>Login form</h1>

					<div className="field-row">
						<label htmlFor="username">Username: </label>
						<input
							type="text"
							name="username"
							value={this.state.username}
							onChange={this.handleChange}
						/>
					</div>

					<div className="field-row">
						<label htmlFor="password">Password: </label>
						<input
							type="password"
							name="password"
							value={this.state.password}
							onChange={this.handleChange}
						/>
					</div>

					<div className="field-row">
						{this.state.message}
					</div>

					<div className="field-row">
						<button className="btn" onClick={this.handleSubmit}>Login</button>
					</div>

					<div>
						<a href="http://localhost:8080/auth/google">
							{/*<GoogleButton /> */}
							<img src={googleButton} alt="sign into Google Button" />
						</a>
					</div>
				</div>
			</div>
		</div>
		)
	}
}

export default LoginForm
