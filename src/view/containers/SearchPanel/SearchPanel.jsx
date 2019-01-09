import React from 'react';
import { connect } from 'react-redux';
import base from 'Root/App.scss';
import styles from './SearchPanel.scss';

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
