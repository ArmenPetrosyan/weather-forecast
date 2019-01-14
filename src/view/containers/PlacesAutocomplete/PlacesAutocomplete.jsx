import React from 'react';
import PropTypes from 'prop-types';
import styles from './PlacesAutocomplete.scss';
import './monoicons/search.svg';
import { Icon } from 'Components';

class PlacesAutocomplete extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      query: '',
    };

    this.placeChangeHandler = this.placeChangeHandler.bind(this);
  }

  placeChangeHandler({ target }) {
    this.setState({
      query: target.value,
    });
  }

  render() {
    const { query } = this.state;

    return (
      <div className={styles.PlacesAutocomplete}>
        <input
          className={styles['PlacesAutocomplete--input']}
          type="text"
          value={query}
          onChange={this.placeChangeHandler}
          autoFocus // eslint-disable-line
        />
        <Icon
          className={styles['PlacesAutocomplete--icon']}
          icon="search"
          height={26}
          width={29}
        />
      </div>
    );
  }
}

export default PlacesAutocomplete;
