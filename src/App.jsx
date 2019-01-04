import React, { Component } from 'react';
import { Provider } from 'react-redux'
import { withNamespaces } from 'react-i18next';
import PropTypes from 'prop-types';
import Header from './templates/Header';
import ChangeName from './view/components/ConnectedComponent.jsx';
import store from './store';

class App extends Component {
  static propTypes = {
    t: PropTypes.func
  }

  constructor(props) {
    super(props);
    this.state = {
      a: 1,
    };
  }

  render() {
    const { t } = this.props;
    return (
      <Provider store={store}>
        <div className="App">
          <Header>{ t('Hello', {dev: 'Arnie'}) }</Header>
          <ChangeName />
          <main>
            <ul>
              <li>Asaldkaldkla</li>
              <li>dsdasdsad</li>
              <li>fasfsafasfasfas</li>
              <li>wretwetw</li>
              <li>reee</li>
            </ul>
          </main>
          <footer>
            <span>
              &copy;
              { t('Hello app') }
            </span>
          </footer>
        </div>
      </Provider>
    );
  }
}

export default withNamespaces()(App);
