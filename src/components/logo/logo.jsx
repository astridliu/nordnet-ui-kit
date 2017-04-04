import React, { PropTypes } from 'react';
import { createStyleSheet } from 'jss-theme-reactor';
import defaultLogo from './nordnet-logo-default.svg';

const styleSheet = createStyleSheet('Logo', () => (
  {
    logo: {
      display: 'inline-flex',
    },
  }
));

function Logo(props, { styleManager }) {
  const classes = styleManager.render(styleSheet);
  const logos = {
    default: defaultLogo,
  };
  const NordnetLogo = logos[props.type];
  const logoStyle = {
    width: props.width,
  };
  const svgStyle = {
    display: 'block',
    height: '100%',
    width: '100%',
  };
  return (
    <span {...props} className={classes.logo} style={logoStyle}>
      <NordnetLogo style={svgStyle} />
    </span>
  );
}

Logo.defaultProps = {
  type: 'default',
  width: 130,
};

Logo.propTypes = {
  type: PropTypes.oneOf(['default']),
  width: PropTypes.number,
};

Logo.contextTypes = {
  styleManager: PropTypes.object.isRequired,
};

export default Logo;
