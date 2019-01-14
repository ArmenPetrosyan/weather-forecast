import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { setLocation } from '../../../actions/locationActions';
import styles from './PlacesAutocomplete.scss';
import './monoicons/search.svg';
import { Icon } from 'Components';

class PlacesAutocomplete extends React.Component {
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
    const { changePlace } = this.props;
    const currentPlace = this.placesInput.current.value;
    changePlace(currentPlace);
  }

  render() {
    const { query } = this.state;

    return (
      <div className={styles.PlacesAutocomplete}>
        <form
          action="#"
          className={styles['PlacesAutocomplete--form']}
          onSubmit={this.placeSubmitHandler}
        >
          <input
            className={styles['PlacesAutocomplete--input']}
            type="text"
            ref={this.placesInput}
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
});

export default connect(mapStateToProps, mapDispatchToProps)(PlacesAutocomplete);
