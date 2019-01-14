import React from 'react';
import PropTypes from 'prop-types';
import { withNamespaces } from 'react-i18next';
import styles from './LocationWidget.scss';

const LocationWidget = (props) => {
  const { t, city } = props;
  return (
    <div className={styles.LocationWidget}>
      <div className={styles['LocationWidget--title']}>
        { t('City') }
      </div>
      <div className={styles['LocationWidget--city']}>
        { city }
      </div>
    </div>
  );
};

LocationWidget.propTypes = {
  t: PropTypes.func.isRequired,
  city: PropTypes.string.isRequired,
};

export default withNamespaces()(LocationWidget);
