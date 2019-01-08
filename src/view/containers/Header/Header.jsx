import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { withNamespaces } from 'react-i18next';
import styles from './Header.scss';
import typography from '../../styles/Typography.scss';
import base from '../../../App.scss';

import { DateWidget } from '../../components';

class Header extends React.Component {
  render() {
    const { t } = this.props;
    return (
      <header className={styles.Header}>
        <div className={base.Container}>
          <h1 className={typography.H0}>
            { t('The weather monitor') }
          </h1>
          <DateWidget dateObject={new Date()} />
        </div>
      </header>
    );
  }
}

Header.propTypes = {
  t: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => {
  return {
    name: state.name,
  };
};

export default connect(mapStateToProps)(withNamespaces()(Header));
