import React from 'react';
import { connect } from 'react-redux';
import styles from './SearchPanel.scss';
import base from '../../../App.scss';

class SearchPanel extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <section className={styles.SearchPanel}>
        <div className={base.Container}>
          <form action="#">
            <input type="text" />
          </form>
        </div>
      </section>
    );
  }
}

export default connect()(SearchPanel);
