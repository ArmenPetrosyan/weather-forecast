import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { withNamespaces } from 'react-i18next';
import styles from './Header.scss';

class Header extends React.Component {
  render() {
    const { t, children, name } = this.props;
    return (
      <header className={styles.Header}>
        <h1>{ children }</h1>
        <h2>{ t('azaza') }</h2>
        <h3>{ name }</h3>
      </header>
    );
  }
}

Header.propTypes = {
  t: PropTypes.func.isRequired,
  children: PropTypes.node.isRequired,
  name: PropTypes.string.isRequired,
};

const mapStateToProps = (state) => {
  return {
    name: state.name,
  };
};

export default connect(mapStateToProps)(withNamespaces()(Header));
