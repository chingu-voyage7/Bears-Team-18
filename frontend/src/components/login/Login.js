import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { TextField } from '@rmwc/textfield';
import { Button } from '@rmwc/button';
import './Login.css';

class Login extends Component {

  constructor() {
    super();
    this.state = {
      username: '',
      password: '',
      message: ''
    };
  }
  onChange = (e) => {
    const state = this.state
    state[e.target.name] = e.target.value;
    this.setState(state);
  }

  onSubmit = (e) => {
    e.preventDefault();

    const { username, password } = this.state;

    axios.post('http://localhost:8000/api/v1/user/login', { 
        username: username,
        password: password })
      .then((result) => {
        if(result.data.success) {
          localStorage.setItem('jwtToken', result.data.token);
          localStorage.setItem('user', result.data.user);
          this.props.history.push('/')
        }
      })
      .catch((error) => {
        console.log(error);
        if(error.response.status === 401) {
          this.setState({ message: 'Login failed. Username or password not match' });
        }
      });
  }

  render() {
    const { username, password, message } = this.state;
    return (
      <div className="container">
        <form className="form-signin" onSubmit={this.onSubmit}>
          {message !== '' &&
            <div className="alert alert-warning alert-dismissible" role="alert">
              { message }
            </div>
          }
          <h2 className="form-signin-heading">Please sign in</h2>
          <TextField label="Email Address" type="text" name="username" onChange={this.onChange} required />
          <TextField label="Password" type="password" name="password" onChange={this.onChange} required />
          <Button unelevated type="submit">Login</Button>
          <p>
            Not a member? <Link to="/register"><span className="glyphicon glyphicon-plus-sign" aria-hidden="true"></span> Register here</Link>
          </p>
        </form>
      </div>
    );
  }
}

export default Login;
