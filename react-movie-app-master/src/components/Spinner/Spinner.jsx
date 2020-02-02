import React from 'react';
import PropTypes from 'prop-types';

import styles from './Spinner.module.css';

export const Spinner = ({ type, className }) => {
  return (
    <div className={styles.Container}>
      <span className={[styles.Spinner, styles[type], className].join(' ')} />
    </div>
  );
};

Spinner.propTypes = {
  type: PropTypes.string,
  className: PropTypes.string,
};

Spinner.defaultProps = {
  type: 'big',
  className: '',
};

export default Spinner;
