import React, { Component } from 'react';
import Header from './templates/Header';

class App extends Component {
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
        <Header>{t('Hello')}</Header>
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

export default App;
