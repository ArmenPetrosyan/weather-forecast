import React from 'react';
import PropTypes from 'prop-types';
import { withNamespaces } from 'react-i18next';
import styles from './WeatherCard.scss';
import { Icon } from 'Components';

const WeatherCard = (props) => {
  const {
    t,
    dateObject,
    temperature,
    min,
    max,
    wind,
    pressure,
    icon,
  } = props;

  return (
    <div className={styles.WeatherCard}>
      <h3 className={styles['WeatherCard--title']}>
        { t('__formattedDate__', { date: dateObject }) }
      </h3>
      <div className={styles['WeatherCard--temp']}>
        {temperature}
      </div>
      <div className={styles['WeatherCard--data']}>
        <div className={styles['WeatherCard--data-column']}>
          <div className={styles['WeatherCard--data-info']}>
            { `${t('Minimum')}: ${min}°C` }
          </div>
          <div className={styles['WeatherCard--data-info']}>
            { `${t('Maximum')}: ${max}°C` }
          </div>
        </div>
        <div className={styles['WeatherCard--data-column']}>
          <div className={styles['WeatherCard--data-info']}>
            <Icon
              className={styles['WeatherCard--data-icon']}
              icon="wind"
              width={16}
              height={16}
            />
            <div className={styles['WeatherCard--data-text']}>
              { `${wind} m/s`}
            </div>
          </div>
          <div className={styles['WeatherCard--data-info']}>
            <Icon
              className={styles['WeatherCard--data-icon']}
              icon="pressure"
              width={16}
              height={16}
            />
            <div className={styles['WeatherCard--data-text']}>
              { `${pressure} hpa`}
            </div>
          </div>
        </div>
      </div>
      <div className={styles['WeatherCard--icon']}>
        <Icon icon={icon} width={133} height={88} />
      </div>
    </div>
  );
};

WeatherCard.propTypes = {
  t: PropTypes.func.isRequired,
  dateObject: PropTypes.instanceOf(Date).isRequired,
  temperature: PropTypes.number.isRequired,
  min: PropTypes.number.isRequired,
  max: PropTypes.number.isRequired,
  wind: PropTypes.number.isRequired,
  pressure: PropTypes.number.isRequired,
  icon: PropTypes.string.isRequired,
};

export default withNamespaces()(WeatherCard);
