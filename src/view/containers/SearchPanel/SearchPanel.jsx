import React from 'react';
import { connect } from 'react-redux';
import { WeatherWidget, LocationWidget } from 'Components';
import PlacesAutocomplete from './../PlacesAutocomplete';
import base from 'Root/App.scss';
import styles from './SearchPanel.scss';
import { getInstantWeather } from 'Root/actions/weatherActions';

class SearchPanel extends React.Component {
  constructor(props) {
    super(props);

    const { location, setInstantWeater } = props;
    setInstantWeater(location);
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

const mapDispatchToProps = dispatch => ({
  setInstantWeater: (city) => { dispatch(getInstantWeather(city)); },
});

export default connect(mapStateToProps, mapDispatchToProps)(SearchPanel);
