import React, { Component } from 'react';
import { Provider } from 'react-redux'
import { withNamespaces } from 'react-i18next';
import PropTypes from 'prop-types';
import Header from './view/containers/Header';
import SearchPanel from './view/containers/SearchPanel';
import Footer from './view/containers/Footer';
import store from './store';

import './base.css';
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
