import React from 'react';
import PropTypes from 'prop-types';
import { withNamespaces } from 'react-i18next';
import styles from './Header.scss';

class Header extends React.Component {
  render() {
    const { t, children } = this.props;
    return (
      <header className={styles.Header}>
        <h1>{ children }</h1>
        <h2>{ t('azaza') }</h2>
      </header>
    );
  }
}

Header.propTypes = {
  t: PropTypes.func.isRequired,
  children: PropTypes.node.isRequired,
};

export default withNamespaces()(Header);
