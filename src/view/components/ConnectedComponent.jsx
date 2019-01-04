import React from 'react';
import { connect } from 'react-redux';
import setUserName from '../../actions/userActions';

class ConnectedComponent extends React.Component {
  constructor(props) {
    super(props);

    const { name } = props;

    this.state = {
      name: name || 'TEST',
    };

    this.inputChangeHandler = this.inputChangeHandler.bind(this);
    this.buttonClickHandler = this.buttonClickHandler.bind(this);
  }

  inputChangeHandler({ target }) {
    this.setState(() => ({ name: target.value }));
  }

  buttonClickHandler() {
    const { changeName } = this.props;
    const { name } = this.state;
    changeName(name);
  }


  render() {
    const { name } = this.state;

    return (
      <form action="#">
        <input
          className="name"
          type="text"
          placeholder="Change name"
          onChange={this.inputChangeHandler}
          value={name}
        />
        <button type="submit" onClick={this.buttonClickHandler}>Change Name</button>
      </form>
    );
  }
}

const mapStateToProps = state => ({
  name: state.name,
});

const mapDispatchToProps = dispatch => ({
  changeName: name => dispatch(setUserName(name)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ConnectedComponent);
