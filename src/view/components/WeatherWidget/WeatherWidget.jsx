import React from 'react';
import PropTypes from 'prop-types';
import { withNamespaces } from 'react-i18next';
import { Icon } from 'Components';

import styles from './WeatherWidget.scss';

import './monoicons/pressure.svg';
import './monoicons/wind.svg';

import './icons/broken-clouds-day.svg';
import './icons/broken-clouds-night.svg';
import './icons/clear-sky-day.svg';
import './icons/clear-sky-night.svg';
import './icons/few-clouds-day.svg';
import './icons/few-clouds-night.svg';
import './icons/mist-day.svg';
import './icons/rain-day.svg';
import './icons/rain-night.svg';
import './icons/scattered-clouds-night.svg';
import './icons/shower-rain-day.svg';
import './icons/shower-rain-night.svg';
import './icons/snow-day.svg';
import './icons/snow-day-1.svg';
import './icons/thunderstorm-day.svg';
import './icons/thunderstorm-night.svg';


const WeatherBadge = (props) => {
  const { icon, data, ...rest } = props;
  return (
    <div className={styles['WeatherWidget--badge']}>
      <Icon
        className={styles['WeatherWidget--badge-icon']}
        icon={icon}
        width={16}
        height={16}
        {...rest}
      />
      <span className={styles['WeatherWidget--badge-data']}>{data}</span>
    </div>
  );
};

WeatherBadge.propTypes = {
  icon: PropTypes.string.isRequired,
  data: PropTypes.string.isRequired,
};

const WeatherWidget = (props) => {
  const { t, temperature, wind, pressure } = props;
  return (
    <div className={styles.WeatherWidget}>
      <div className={styles['WeatherWidget--data']}>
        <div className={styles['WeatherWidget--temp']}>{`${temperature}°C`}</div>
        <WeatherBadge icon="pressure" data={`${pressure} hpa`} />
        <WeatherBadge icon="wind" data={`${wind} ${t('m/s')}`} />
      </div>
      <div className={styles['WeatherWidget--icon']}>
        <Icon icon="clear-sky-day" width={104} height={91} />
      </div>
    </div>
  );
};

WeatherWidget.propTypes = {
  t: PropTypes.func.isRequired,
};

export default withNamespaces()(WeatherWidget);
