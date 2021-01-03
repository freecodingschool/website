import React from 'react';

const Logo = (props) => {
  return (
    <img
      alt="Logo"
      width="150"
      src="/static/freecoding.png"
      {...props}
    />
  );
};

export default Logo;
