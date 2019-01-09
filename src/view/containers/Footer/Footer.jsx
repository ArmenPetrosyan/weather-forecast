import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { withNamespaces } from 'react-i18next';
import styles from './Footer.scss';
import base from '../../../App.scss';

import { LocaleSwitcher } from '../../components';
import OpenWeatherMapImage from './images/OpenWeatherMap.svg';

class Footer extends React.Component {
  static propTypes = {
    t: PropTypes.func.isRequired,
    locale: PropTypes.string.isRequired,
  };

  render() {
    const { t, locale } = this.props;
    return (
      <footer className={styles.Footer}>
        <div className={base.Container}>
          <div className={styles['Footer--copyright']}>
            <span className={styles['Footer--copyright-text']}>
              {t('© 2018 Armen Petrosian. Data provided by')}
            </span>
            <img
              src={OpenWeatherMapImage}
              alt="OpenWeatherMap"
              className={styles['Footer--copyright-image']}
            />
          </div>
          <LocaleSwitcher locale={locale} />
        </div>
      </footer>
    );
  }
}

const mapStateToProps = state => ({
  locale: state.locale,
});

export default connect(mapStateToProps)(withNamespaces()(Footer));
