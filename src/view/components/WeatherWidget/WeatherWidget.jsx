import React from 'react';
import PropTypes from 'prop-types';
import { withNamespaces } from 'react-i18next';
import styles from './WeatherWidget.scss';
import WeatherIconsSprite from './icons/sprite.svg';
import ClearSkyNightIcon from './icons/snow-day.svg';
import pressureIcon from './icons/pressure-min.svg';
import windIcon from './icons/wind-mini.svg';

import { Icon } from 'Components';

const WeatherBadge = (props) => {
  const { icon, data } = props;
  return (
    <div className={styles['WeatherWidget--badge']}>
      <img className={styles['WeatherWidget--badge-icon']} src={icon} alt="" />
      <span className={styles['WeatherWidget--badge-data']}>{data}</span>
    </div>
  );
};

WeatherBadge.propTypes = {
  icon: PropTypes.string.isRequired,
  data: PropTypes.string.isRequired,
};

const WeatherWidget = (props) => {
  const { t } = props;
  return (
    <div className={styles.WeatherWidget}>
      <div className={styles['WeatherWidget--data']}>
        <div className={styles['WeatherWidget--temp']}>-15°C</div>
        <WeatherBadge icon={pressureIcon} data="1500 hpa" />
        <WeatherBadge icon={windIcon} data={`15 ${t('m/s')}`} />
      </div>
      <div className={styles['WeatherWidget--icon']}>
        <ClearSkyNightIcon />
        <Icon icon="snow-day" width={104} height={91} />
      </div>
    </div>
  );
};

WeatherWidget.propTypes = {
  t: PropTypes.func.isRequired,
};

export default withNamespaces()(WeatherWidget);
