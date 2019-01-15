import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { withNamespaces } from 'react-i18next';
import base from 'Root/App.scss';
import styles from './Weekly.scss';
import { getForecast } from 'Root/actions/weatherActions';
import { getFilteredForecast } from 'Root/selectors/weatherSelectors';
import { WeatherCard } from 'Components';

class Weekly extends React.Component {
  constructor(props) {
    super(props);

    const { location, setForecast } = this.props;
    setForecast(location);
  }

  static propTypes = {
    t: PropTypes.func.isRequired,
    forecast: PropTypes.arrayOf(PropTypes.any).isRequired,
  }

  render() {
    const { t, forecast } = this.props;

    return (
      <section className={`${styles.Weekly} ${base.Main}`}>
        <div className={base.Container}>
          <h2 className={styles['Weekly--heading']}>
            { t('Weekly forecast') }
          </h2>
        </div>
        <div className={`${base.Container} ${styles['Weekly--container']}`}>
          {
            forecast.map((day, index) => {
              return (
                <WeatherCard
                  key={index}
                  dateObject={day.date}
                  temperature={day.temperature}
                  min={day.min}
                  max={day.max}
                  pressure={day.pressure}
                  wind={day.wind}
                  icon={day.icon}
                />
              )
            })
          }
        </div>
      </section>
    );
  }
}


const mapStateToProps = state => ({
  location: state.location.city,
  forecast: getFilteredForecast(state),
});

const mapDispatchToProps = dispatch => ({
  setForecast: (city) => { dispatch(getForecast(city)); },
});

export default connect(mapStateToProps, mapDispatchToProps)(withNamespaces()(Weekly));
