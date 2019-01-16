import React from 'react';
import { Provider } from 'react-redux';
import Header from 'View/containers/Header';
import SearchPanel from 'View/containers/SearchPanel';
import Footer from 'View/containers/Footer';
import Weekly from 'View/containers/Weekly';
import store from './store';

import './reset.css';
import styles from './App.scss';

const App = () => (
  <Provider store={store}>
    <div className={styles.App}>
      <Header />
      <SearchPanel />
      <Weekly />
      <Footer />
    </div>
  </Provider>
);

export default App;
