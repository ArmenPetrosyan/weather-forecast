import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { withNamespaces } from 'react-i18next';
import styles from './Header.scss';
import base from 'Root/App.scss';

import { DateWidget } from 'Components';

class Header extends React.Component {
  static propTypes = {
    t: PropTypes.func.isRequired,
  };

  render() {
    const { t } = this.props;
    return (
      <header className={styles.Header}>
        <div className={base.Container}>
          <h1 className={styles['Header--title']}>
            { t('The weather monitor') }
          </h1>
          <DateWidget dateObject={new Date()} />
        </div>
      </header>
    );
  }
}

export default connect()(withNamespaces()(Header));
