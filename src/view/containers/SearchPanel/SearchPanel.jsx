import React from 'react';
import { connect } from 'react-redux';
import { WeatherWidget, LocationWidget } from 'Components';
import SearchField from './../SearchField';
import base from 'Root/App.scss';
import styles from './SearchPanel.scss';
import { getInstantWeather } from 'Root/actions/weatherActions';
import {
  getCurrentTemperature,
  getCurrentWind,
  getCurrentPressure
} from 'Root/selectors/weatherSelectors';

class SearchPanel extends React.Component {
  constructor(props) {
    super(props);

    const { location, setInstantWeater } = props;
    setInstantWeater(location);
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
  setInstantWeater: (city) => { dispatch(getInstantWeather(city)); },
});

export default connect(mapStateToProps, mapDispatchToProps)(SearchPanel);
