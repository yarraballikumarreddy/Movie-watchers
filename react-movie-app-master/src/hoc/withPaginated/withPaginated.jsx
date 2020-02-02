import React from 'react';
import PropTypes from 'prop-types';

import classes from './withPaginated.module.css';

/*eslint-disable */
const withPaginated = Component => props => (
  /*eslint-enable */
  <div>
    <Component {...props} />

    <div className={classes.ButtonBox}>
      {props.page && !props.loading && props.error && (
        <div>
          <p>Something went wrong...</p>
          <button
            className={classes.Button}
            type="button"
            onClick={props.onPaginated}
          >
            Try again
          </button>
        </div>
      )}
      {props.page && !props.loading && !props.error && props.withPaginated && (
        <button
          className={classes.Button}
          type="button"
          onClick={props.onPaginated}
        >
          More
        </button>
      )}
    </div>
  </div>
);

withPaginated.propTypes = {
  Component: PropTypes.element,
};

export default withPaginated;
