import React, { Component } from 'react'
import './style.css'

import axios from 'axios'

import Popup from '../Popup'

export default class Filters extends Component {

  state = {
    login: false,
    signinShow: false,
    user: '',
    pass: '',
  }

	componentDidMount() {

	}

  handleSignin = () => {
    console.log(this.state.user, this.state.pass);
		axios.post('/test_api.php?action=login', {
      user: this.state.user,
      pass: this.state.pass
    })
			.then(response => {
        console.log(response.data)
        response.data === "success"
          ? this.setState({login: true, signinShow: false})
          : this.setState({signinShow: false})
        }
      )
			.catch(err => console.log(err))
  }

  render() {
    return (
      <div className="user">

        { this.state.login ?
          <div className="profile">
            <div className="profile_user">user@gmail.com</div>
            <ul className="profile_menu">
              <li>Personal</li>
              <li>Orders</li>
              <li>Exit</li>
            </ul>
          </div>
          :
          <div className="login">
            <div className="login_link" onClick={() => this.setState({signinShow: true})}>Sign in</div>
          </div>
        }

        <Popup
          opened={this.state.signinShow}
          onClose={() => this.setState({signinShow: false})}
          icon="key"
          title="Sign in"
          bottom={[
            {title: "Sign up", href: "/"},
            {title: "Lost password", href: "/"}
          ]}
        >
          <div className="signin">
            <div className="signin_row">
              <input type="text" placeholder="User" value={this.state.user} onChange={(event) => this.setState({user: event.target.value})}/>
              <span className="signin_input-icon fa fa-envelope-o"></span>
            </div>
            <div className="signin_row">
              <input type="password" placeholder="Password" value={this.state.pass} onChange={(event) => this.setState({pass: event.target.value})}/>
              <span className="signin_input-icon fa fa-lock"></span>
            </div>
            <div className="signin_submit">
              <button className="btn" onClick={() => this.handleSignin()}>Enter</button>
            </div>
          </div>
        </Popup>

      </div>
    )
  }
}
