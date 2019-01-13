import React from 'react';

const Icon = ({ icon, width = 32, height = 32 }) => (
  <svg width={width} height={height} className={`icon icon-${icon}`}>
    <use xlinkHref={`#${icon}`} />
  </svg>
);

export default Icon;
