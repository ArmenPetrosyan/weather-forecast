import React from 'react';
import { connect } from 'react-redux';
import { WeatherWidget, LocationWidget } from 'Components';
import PlacesAutocomplete from './../PlacesAutocomplete';
import base from 'Root/App.scss';
import styles from './SearchPanel.scss';

class SearchPanel extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { location } = this.props;

    return (
      <section className={styles.SearchPanel}>
        <div className={base.Container}>
          <PlacesAutocomplete />
          <WeatherWidget />
          <LocationWidget city={location} />
        </div>
      </section>
    );
  }
}

const mapStateToProps = state => ({
  location: state.location.city,
});

export default connect(mapStateToProps)(SearchPanel);
