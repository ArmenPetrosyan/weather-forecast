import React, { Component } from 'react';
import { Provider } from 'react-redux'
import { withNamespaces } from 'react-i18next';
import PropTypes from 'prop-types';
import Header from './view/containers/Header';
import store from './store';

import styles from './App.scss';

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
        <div className={styles.App}>
          <Header />
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
