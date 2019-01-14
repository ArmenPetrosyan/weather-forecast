import React from 'react';
import { connect } from 'react-redux';
import { WeatherWidget } from 'Components';
import base from 'Root/App.scss';
import styles from './SearchPanel.scss';
import PlacesAutocomplete from './../PlacesAutocomplete';

class SearchPanel extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <section className={styles.SearchPanel}>
        <div className={base.Container}>
          <PlacesAutocomplete />
          <WeatherWidget />
        </div>
      </section>
    );
  }
}

export default connect()(SearchPanel);
