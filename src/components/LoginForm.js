import React from 'react';

class LoginForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      username: '',
      password: '',
    };
  }

  handleInputChange = (event) => {
    const name = event.target.name
    const value = event.target.value
    this.setState({
        [name]: value,
      });
  }

  handleSubmit = (event) => {
    event.preventDefault();
    const username = this.state.username
    const password = this.state.password
    if (username !== "" && password !== ""){
      this.props.onSubmit(username, password)
    }
    alert("Submitted!");

  }


  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <div>
          <label>
            Username
            <input id="test-username" name="username" type="text" value={this.state.username} onChange={this.handleInputChange}/>
          </label>
        </div>
        <div>
          <label>
            Password
            <input id="test-password" name="password" type="password" value={this.state.password} onChange={this.handleInputChange}/>
          </label>
        </div>
        <div>
          <button type="submit" >Log in</button>
        </div>
      </form>
    );
  }
}

export default LoginForm;
