import React, { Component } from 'react';
import { withNamespaces } from 'react-i18next';
import PropTypes from 'prop-types';
import Header from './templates/Header';

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
      <div className="App">
        <Header>{ t('Hello', {dev: 'Arnie'}) }</Header>
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
    );
  }
}

export default withNamespaces()(App);
