import React, { Component } from 'react';
import { UserContext } from './UserContext';

export default class UserProvider extends Component {
  state = ({
    id: '1',
    name: 'rinat',
    email: 'rinat@gmail.com'
  })

  toggle = () => {
    this.setState({
      id: null,
      name: '',
      email: ''
    })
  }

  render() {
    return (
      <UserContext.Provider
        value={{
          user: this.state,
          toggle: this.toggle
        }}
      >
        {this.props.children}
      </UserContext.Provider>
    )
  }
}