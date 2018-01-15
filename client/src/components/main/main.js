import react, { Component } from 'react';
import { Link } from 'react-router-dom';

class Main extends Component {
  render() {
    <div className="App">
      <h1>This is the main App component</h1>
      <Header user={this.state.user} />
      {/* LINKS to our different 'pages' */}
      <DisplayLinks _logout={this._logout} loggedIn={this.state.loggedIn} />
      {/*  ROUTES */}
      {/* <Route exact path="/" component={Home} /> */}
      <Route exact path="/" render={() => <Home user={this.state.user} />} />
      <Route
        exact
        path="/login"
        render={() =>
          <LoginForm
            _login={this._login}
            _googleSignin={this._googleSignin}
          />}
      />
      <Route exact path="/signup" component={SignupForm} />
      {/* <LoginForm _login={this._login} /> */}
    </div>
  }
}
