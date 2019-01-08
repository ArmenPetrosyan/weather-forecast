import React from 'react';
import PropTypes from 'prop-types';
import { withNamespaces } from 'react-i18next';
import styles from './DateWidget.scss';

const DateWidget = (props) => {
  const { t, dateObject } = props;
  return (
    <div className={styles.DateWidget}>
      <div className={styles['DateWidget--title']}>
        { t('FormattedDate', { date: dateObject }) }
      </div>
      <div className={styles['DateWidget--subtitle']}>
        { t('Today') }
      </div>
    </div>
  );
};

DateWidget.propTypes = {
  t: PropTypes.func.isRequired,
  dateObject: PropTypes.func.isRequired,
}

export default withNamespaces()(DateWidget);
