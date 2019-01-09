import React, { Component } from 'react';
import { Provider } from 'react-redux'
import { withNamespaces } from 'react-i18next';
import PropTypes from 'prop-types';
import Header from 'View/containers/Header';
import SearchPanel from 'View/containers/SearchPanel';
import Footer from 'View/containers/Footer';
import store from './store';

import './reset.css';
import styles from './App.scss';

class App extends Component {
  static propTypes = {
    t: PropTypes.func
  };

  constructor(props) {
    super(props);
  }

  render() {
    const { t } = this.props;
    return (
      <Provider store={store}>
        <div className={styles.App}>
          <Header />
          <SearchPanel />
          <Footer />
        </div>
      </Provider>
    );
  }
}

export default withNamespaces()(App);
