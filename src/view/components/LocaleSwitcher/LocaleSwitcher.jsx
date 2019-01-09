import React from 'react';
import { connect } from 'react-redux'
import i18n from '../../../i18n';
import styles from './LocaleSwitcher.scss';
import languages from '../../../languages';
import { setLocale } from '../../../actions/userActions';

class LocaleSwitcher extends React.Component {
  constructor(props) {
    super(props);
  }

  onLocaleChange = ({ target }) => {
    const { setLocale } = this.props;
    const locale = target.value;
    i18n.changeLanguage(locale);
    setLocale(locale);
  };

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
            )
          })
        }
      </nav>
    )
  };
}

const mapStateToProps = state => ({
  locale: state.locale
});

const mapDispatchToProps = dispatch => ({
  setLocale: locale => { dispatch(setLocale(locale)) }
});

export default connect(mapStateToProps, mapDispatchToProps)(LocaleSwitcher);
