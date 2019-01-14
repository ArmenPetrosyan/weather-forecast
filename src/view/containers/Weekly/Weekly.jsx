import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { withNamespaces } from 'react-i18next';
import base from 'Root/App.scss';
import styles from './Weekly.scss';
import { getInstantWeather } from 'Root/actions/weatherActions';


class Weekly extends React.Component {
  constructor(props) {
    super(props);
  }

  static propTypes = {
    t: PropTypes.func.isRequired,
  }

  render() {
    const { t } = this.props;

    return (
      <section className={styles.Weekly}>
        <div className={base.Container}>
          <h2 className={styles['Weekly--heading']}>{ t('Weekly forecast') }</h2>
        </div>
      </section>
    );
  }
}


const mapStateToProps = state => ({
  location: state.location.city,
});

const mapDispatchToProps = dispatch => ({
  setInstantWeater: (city) => { dispatch(getInstantWeather(city)); },
});

export default connect(mapStateToProps, mapDispatchToProps)(withNamespaces()(Weekly));
