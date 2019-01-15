import React from 'react';
import { connect } from 'react-redux';
import { WeatherWidget, LocationWidget } from 'Components';
import { getInstantWeather } from 'Root/actions/weatherActions';
import SearchField from './../SearchField';
import base from 'Root/App.scss';
import {
  getCurrentTemperature,
  getCurrentWind,
  getCurrentPressure,
} from 'Root/selectors/weatherSelectors';
import styles from './SearchPanel.scss';

class SearchPanel extends React.Component {
  constructor(props) {
    super(props);

    const { location, setInstantWeather } = props;
    setInstantWeather(location);
  }

  render() {
    const { location, currentTemp, currentWind, currentPressure } = this.props;

    return (
      <section className={styles.SearchPanel}>
        <div className={base.Container}>
          <SearchField />
          <WeatherWidget
            temperature={currentTemp}
            wind={currentWind}
            pressure={currentPressure}
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
});

const mapDispatchToProps = dispatch => ({
  setInstantWeather: (city) => { dispatch(getInstantWeather(city)); },
});

export default connect(mapStateToProps, mapDispatchToProps)(SearchPanel);
