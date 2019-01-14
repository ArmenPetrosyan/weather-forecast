import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import i18n from '../../../i18n';
import styles from './LocaleSwitcher.scss';
import languages from '../../../languages';
import { setLocale } from '../../../actions/rootActions';

class LocaleSwitcher extends React.Component {
  constructor(props) {
    super(props);
    this.onLocaleChange = this.onLocaleChange.bind(this);
  }

  onLocaleChange({ target }) {
    const { changeLocale } = this.props; // eslint-ignore-line
    const locale = target.value;
    i18n.changeLanguage(locale);
    changeLocale(locale);
  }

  render() {
    const locales = Object.keys(languages);
    const { locale } = this.props;

    return (
      <nav className={styles.LocaleSwithcer}>
        {
          locales.map((value, index) => {
            const isActiveLocale = (locale === value) ? true : null;

            return (
              <button
                key={index}
                className={styles['LocaleSwithcer--link']}
                onClick={this.onLocaleChange}
                value={value}
                data-active={isActiveLocale}
              >
                { value }
              </button>
            );
          })
        }
      </nav>
    );
  }
}

LocaleSwitcher.propTypes = {
  locale: PropTypes.string.isRequired,
  changeLocale: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  locale: state.root.locale,
});

const mapDispatchToProps = dispatch => ({
  changeLocale: (locale) => { dispatch(setLocale(locale)); },
});

export default connect(mapStateToProps, mapDispatchToProps)(LocaleSwitcher);
