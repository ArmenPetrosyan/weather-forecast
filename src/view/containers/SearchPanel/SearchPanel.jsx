import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { WeatherWidget, LocationWidget } from 'Components';
import { getInstantWeather } from 'Root/actions/weatherActions';
import SearchField from './../SearchField';
import base from 'Root/App.scss';
import {
  getCurrentTemperature,
  getCurrentWind,
  getCurrentPressure,
  getWeatherIcon,
} from 'Root/selectors/weatherSelectors';
import styles from './SearchPanel.scss';

class SearchPanel extends React.Component {
  constructor(props) {
    super(props);

    const { location, setInstantWeather } = props;
    setInstantWeather(location);
  }

  static propTypes = {
    location: PropTypes.string.isRequired,
    weatherIcon: PropTypes.string.isRequired,
    currentTemp: PropTypes.number.isRequired,
    currentWind: PropTypes.number.isRequired,
    currentPressure: PropTypes.number.isRequired,
  }

  render() {
    const { location, currentTemp, currentWind, currentPressure, weatherIcon } = this.props;

    return (
      <section className={styles.SearchPanel}>
        <div className={base.Container}>
          <SearchField />
          <WeatherWidget
            temperature={currentTemp}
            wind={currentWind}
            pressure={currentPressure}
            icon={weatherIcon}
          />
          <LocationWidget city={location} />
        </div>
      </section>
    );
  }
}

const mapStateToProps = state => ({
  location: state.location.city,
  currentTemp: getCurrentTemperature(state),
  currentWind: getCurrentWind(state),
  currentPressure: getCurrentPressure(state),
  weatherIcon: getWeatherIcon(state),
});

const mapDispatchToProps = dispatch => ({
  setInstantWeather: (city) => { dispatch(getInstantWeather(city)); },
});

export default connect(mapStateToProps, mapDispatchToProps)(SearchPanel);
