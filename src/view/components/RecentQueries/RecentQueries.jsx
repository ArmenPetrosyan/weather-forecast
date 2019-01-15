import React from 'react';
import PropTypes from 'prop-types';
import { withNamespaces } from 'react-i18next';
import styles from './RecentQueries.scss';

const RecentQueries = (props) => {
  const { t, queries } = props;
  return (
    <section className={styles.RecentQueries}>
      <div className={styles['RecentQueries--title']}>
        { t('Recent queries') }
      </div>
      <ul className={styles['RecentQueries--list']}>
        {
          queries.map(query => (
            <li className={styles['RecentQueries--item']}>{query}</li>
          ))
        }
      </ul>
    </section>
  );
};

RecentQueries.propTypes = {
  t: PropTypes.func.isRequired,
  queries: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default withNamespaces()(RecentQueries);
