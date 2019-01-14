import React from 'react';
import PropTypes from 'prop-types';

const Icon = (props) => {
  const {
    icon, width, height, className, ...rest
  } = props;

  return (
    <svg
      width={width}
      height={height}
      className={`${className} Icon Icon-${icon}`}
      {...rest}
    >
      <use xlinkHref={`#${icon}`} />
    </svg>
  );
};

Icon.propTypes = {
  icon: PropTypes.string.isRequired,
  width: PropTypes.number,
  height: PropTypes.number,
  className: PropTypes.string,
};

Icon.defaultProps = {
  width: 32,
  height: 32,
  className: '',
};

export default Icon;
