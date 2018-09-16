import React, { Component, Fragment } from 'react';
import { UserContext } from './UserContext';

export default class User extends Component {
  render() {
    return (
      <UserContext.Consumer>
        {(context) => (
          <Fragment>
            <h1>User {context.user.name}</h1>
            <h2>{context.user.id}</h2>
            <button onClick={context.toggle}>Logout</button>
          </Fragment>
        )}
      </UserContext.Consumer>
    )
  }
}
