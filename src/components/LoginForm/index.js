import {Component} from 'react'

import './index.css'

class LoginUser extends Component {
  state = {
    usernameInput: '',
    passwordInput: '',
  }

  onsubmitUserDetails = () => {
    const {history} = this.props
    history.replace('/')
  }

  onSubmitFormData = async event => {
    event.preventDefault()
    const {usernameInput, passwordInput} = this.state
    const url = 'https://apis.ccbp.in/login'
    const userDetails = {usernameInput, passwordInput}
    const options = {
      method: 'POST',
      body: JSON.stringify(userDetails),
    }

    const response = await fetch(url, options)
    const data = await response.json()
    console.log(data)
    if (response.ok === true) {
      this.onsubmitUserDetails()
    }
  }

  onChangeUsernameInput = event => {
    this.setState({
      usernameInput: event.target.value,
    })
  }

  onChangePasswordInput = event => {
    this.setState({
      passwordInput: event.target.value,
    })
  }

  renderUsernameInput = () => {
    const {usernameInput} = this.state
    return (
      <>
        <label htmlFor="username" className="label-name">
          USERNAME
        </label>
        <input
          id="username"
          type="text"
          value={usernameInput}
          onChange={this.onChangeUsernameInput}
          placeholder="username"
          className="username-input"
        />
      </>
    )
  }

  renderPasswordInput = () => {
    const {passwordInput} = this.state
    return (
      <>
        <label htmlFor="password" className="label-name">
          PASSWORD
        </label>
        <input
          id="password"
          type="password"
          value={passwordInput}
          onChange={this.onChangePasswordInput}
          placeholder="Password"
          className="password-input"
        />
      </>
    )
  }

  render() {
    return (
      <div className="login-page-bg-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-login-img.png"
          alt="website login"
          className="website-login"
        />

        <div className="login-card-container">
          <img
            src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-logo-img.png"
            alt="website logo"
            className="website-logo"
          />
          <form className="form-container" onSubmit={this.onSubmitFormData}>
            <div className="username-input-container">
              {this.renderUsernameInput()}
            </div>
            <div className="password-input-container">
              {this.renderPasswordInput()}
            </div>
            <button className="login-button" type="submit">
              Login
            </button>
          </form>
        </div>
      </div>
    )
  }
}

export default LoginUser
