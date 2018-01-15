import React, { Component } from 'react'
import axios from 'axios'
import { Route, Link, BrowserRouter, Switch } from 'react-router-dom'
import './App.css'
import LoginForm from './components/Login/LoginForm'
import SignupForm from './components/SignupForm'
import Header from './components/Header'
import Home from './components/Home'
import Main from './components/Main';
const host = "http://localhost:8080";
/*const DisplayLinks = props => {
	if (props.loggedIn) {
		return (
			<nav className="navbar">
				<ul className="nav">
					<li className="nav-item">
						<Link to="/" className="nav-link">
							Home
						</Link>
					</li>
					<li>
						<Link to="#" className="nav-link" onClick={props._logout}>
							Logout
						</Link>
					</li>
				</ul>
			</nav>
		)
	} else {
		return (
			<nav className="navbar">
				<ul className="nav">
					<li className="nav-item">
						<Link to="/" className="nav-link">
							Home
						</Link>
					</li>
					<li className="nav-item">
						<Link to="/login" className="nav-link">
							login
						</Link>
					</li>
					<li className="nav-item">
						<Link to="/signup" className="nav-link">
							sign up
						</Link>
					</li>
				</ul>
			</nav>
		)
	}
} */

class App extends Component {
	constructor() {
		super()
		this.state = {
			loggedIn: false,
			user: 'loading'
		}
		this._logout = this._logout.bind(this);
		this._saveUser = this._saveUser.bind(this);
	}
	componentDidMount() {
		axios.get(`${host}/auth/user`).then(response => {
			console.log(response.data)
			if (!!response.data.user) {
				console.log('THERE IS A USER')
				this.setState({
					loggedIn: true,
					user: response.data.user
				})
			} else {
				this.setState({
					loggedIn: false,
					user: null
				})
			}
		})
	}

	_logout(event) {
		event.preventDefault()
		console.log('logging out')
		axios.post(`${host}/auth/logout`).then(response => {
			console.log(response.data)
			if (response.status === 200) {
				this.setState({
					loggedIn: false,
					user: null
				})
			}
		})
	}



	_saveUser(user) {
		this.setState({
			loggedIn: true,
			user
		})
	}

	render() {
		return (
			<BrowserRouter>
				<Switch>
					<Route exact path="/" component={Home} />
					<Route exact path="/signup" render={() =>
						<SignupForm
							_saveUser={this._saveUser}
							user={this.state.user}
							/>
					} />
					<Route
		        exact
		        path="/login"
		        render={() =>
		          <LoginForm
								_saveUser={this._saveUser}
								user={this.state.user}
		            _googleSignin={this._googleSignin}
		          />}
		      />
					<Route
						path="/main"
						render={() =>
							<Main
								user={this.state.user}
								/>
						} />
				</Switch>

			</BrowserRouter>
		)
	}
}

export default App
