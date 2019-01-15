import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { setLocation } from 'Root/actions/locationActions';
import { getInstantWeather } from 'Root/actions/weatherActions';
import { saveQuery } from 'Root/actions/rootActions';
import { Icon } from 'Components';
import styles from './SearchField.scss';
import './monoicons/search.svg';

class SearchField extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      query: props.location || '',
    };

    this.placeChangeHandler = this.placeChangeHandler.bind(this);
    this.placeSubmitHandler = this.placeSubmitHandler.bind(this);

    this.placesInput = React.createRef();
  }

  static propTypes = {
    changePlace: PropTypes.func.isRequired,
    location: PropTypes.string.isRequired,
  }

  placeChangeHandler({ target }) {
    this.setState({
      query: target.value,
    });
  }

  placeSubmitHandler(event) {
    event.preventDefault();
    const { changePlace, setInstantWeather, saveQuery } = this.props;
    const currentPlace = this.placesInput.current.value;
    changePlace(currentPlace);
    setInstantWeather(currentPlace);
    saveQuery(currentPlace);
  }

  render() {
    const { query } = this.state;

    return (
      <div className={styles.SearchField}>
        <form
          action="#"
          className={styles['SearchField--form']}
          onSubmit={this.placeSubmitHandler}
        >
          <input
            className={styles['SearchField--input']}
            type="text"
            ref={this.placesInput}
            value={query}
            onChange={this.placeChangeHandler}
            pattern="^[a-zA-Zа-яА-Я-\s]+$"
            autoFocus // eslint-disable-line
            required
          />
          <Icon
            className={styles['SearchField--icon']}
            icon="search"
            height={26}
            width={29}
          />
        </form>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  location: state.location.city,
});

const mapDispatchToProps = dispatch => ({
  changePlace: (newLocation) => { dispatch(setLocation(newLocation)); },
  setInstantWeather: (city) => { dispatch(getInstantWeather(city)); },
  saveQuery: (queryString) => { dispatch(saveQuery(queryString)); },
});

export default connect(mapStateToProps, mapDispatchToProps)(SearchField);
