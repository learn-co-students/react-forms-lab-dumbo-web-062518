import React from "react";

class LoginForm extends React.Component {
  constructor() {
    super();

    this.state = {
      username: '',
      password: '',
    };
  }


  handleChangeUsername = (e) => {
      const username = e.target.value
    this.setState({ username })
  }

  handleChangePassword = (e) => {
      const password = e.target.value
    this.setState({ password })
  }

  handleSubmitButton = (e) => {
    e.preventDefault()

    if(this.state.username.length > 0 && this.state.password.length > 0){
      this.props.onSubmit(this.state)
    }
  }



  render() {
    return (
      <form onSubmit={this.handleSubmitButton}>
        <div>
          <label>
            Username
            <input id="username" name="username" type="text" onChange={this.handleChangeUsername}/>
          </label>
        </div>
        <div>
          <label>
            Password
            <input id="password" name="password" type="password" onChange={this.handleChangePassword} />
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
