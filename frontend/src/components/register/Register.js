import React, { Component } from 'react';
import axios from 'axios';
import { TextField } from '@rmwc/textfield';
import { Button } from '@rmwc/button';

class Register extends Component {

  constructor() {
    super();
    this.state = {
      username: '',
      password: ''
    };
  }

  onChange = (e) => {
    const state = this.state;
    state[e.target.name] = e.target.value;
    this.setState(state);
  }

  onSubmit = (e) => {
    e.preventDefault();
    const { username, password } = this.state;
    axios.post('http://localhost:8000/api/v1/user/register', { 
        username: username,
        password: password })
      .then(result => {
        console.log(result);
        if(result.data.success) {
          this.props.history.push("/login")
        } else {
          this.printMessage(result.data.msg);
        }
      }).catch(err => {
        console.log(err);
      });
  }

  printMessage(message) {
    console.log(message)
  }

  render() {
    const { username, password } = this.state;
    return (
      <div className="container">
        <form className="form-signin" onSubmit={this.onSubmit}>
          <h2 className="form-signin-heading">Register</h2>
          <TextField label="Username" type="text" name="username" onChange={this.onChange} required />
          <TextField label="Password" type="password" name="password" onChange={this.onChange} required />
          <Button unelevated type="submit">Register</Button>
        </form>
      </div>
    );
  }
}

export default Register;
