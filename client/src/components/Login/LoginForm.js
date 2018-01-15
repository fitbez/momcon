import React, { Component } from 'react'
import { Redirect, Link } from 'react-router-dom';
import Nav from '../Nav';
// import googleButton from './google_signin_buttons/web/1x/btn_google_signin_dark_disabled_web.png'
import googleButton from './google_signin_buttons/web/1x/btn_google_signin_dark_pressed_web.png'
class LoginForm extends Component {
	constructor() {
		super()
		this.state = {
			username: '',
			password: '',
			redirectTo: null
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
		event.preventDefault()
		console.log('handleSubmit')
		this.props._login(this.state.username, this.state.password)
		this.setState({
			redirectTo: '/'
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
						<Link to="/auth/google">
							{/* <GoogleButton /> */}
							<img src={googleButton} alt="sign into Google Button" />
						</Link>
					</div>
				</div>
				</div>
			</div>
		)
	}
}

export default LoginForm
