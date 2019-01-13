import React from 'react';
import { connect } from 'react-redux';
import { WeatherWidget } from 'Components';
import base from 'Root/App.scss';
import styles from './SearchPanel.scss';

class SearchPanel extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <section className={styles.SearchPanel}>
        <div className={base.Container}>
          <input type="text"/>
          <WeatherWidget />
        </div>
      </section>
    );
  }
}

export default connect()(SearchPanel);
