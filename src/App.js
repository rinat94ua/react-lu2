import React, { Component, Fragment, createContext } from 'react';
import logo from './logo.svg';
import './App.css';
import { Transition } from 'react-spring';

import { Toggle } from 'Utilities';
import { Modal, Card } from 'Elements';

import UserProvider from './UserProvider';
import User from './User';

class App extends Component {
  render() {
    return (
      <UserProvider>
        <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <h1 className="App-title">Welcome to React</h1>
          </header>
          <User />
          <section>
            <Toggle>
              {({ on, toggle }) => (
                <Fragment>
                  <button onClick={toggle}>Show / Hide</button>
                  <Transition
                    from={{ opacity: 0, bg: '#82d8d8', height: 0 }}
                    to={{ opacity: 1, bg: '#524763', height: 200 }}
                    leave={{ opacity: 0, bg: '#82d8d8', height: 0 }}
                  >
                    {on && Header}
                  </Transition>
                </Fragment>
              )}
            </Toggle>
          </section>

          <Toggle>
            {({ on, toggle }) => (
              <Fragment>
                <button onClick={toggle}>Login</button>
                <Modal on={on} toggle={toggle}>
                  <h1>From AppJS</h1>
                </Modal>
              </Fragment>
            )}
          </Toggle>
        </div>
      </UserProvider>
    );
  }
}

const Header = ( styles ) => (
  <Card style={{
    opacity: styles.opacity,
    backgroundColor: styles.bg,
    overflow: 'hidden',
    height: styles.height
  }}>
    <h1>Show me</h1>
  </Card>
);

export default App;
