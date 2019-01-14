import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { withNamespaces } from 'react-i18next';
import styles from './Footer.scss';
import base from 'Root/App.scss';

import { LocaleSwitcher } from 'Components';
import OpenWeatherMapImage from './images/OpenWeatherMap.svg';

class Footer extends React.Component {
  static propTypes = {
    t: PropTypes.func.isRequired,
  };

  render() {
    const { t } = this.props;
    return (
      <footer className={styles.Footer}>
        <div className={base.Container}>
          <div className={styles['Footer--copyright']}>
            <span className={styles['Footer--copyright-text']}>
              {t('© 2018 Armen Petrosian. Data provided by')}
            </span>
            < OpenWeatherMapImage className={styles['Footer--copyright-image']} />
          </div>
          <LocaleSwitcher/>
        </div>
      </footer>
    );
  }
}

export default withNamespaces()(Footer);
