import React from 'react';
import Svg, { Path } from 'react-native-svg';

const SvgInformationSolid = props => (
  <Svg
    {...props}
    viewBox="0 0 20 20"
    style={{
      color: '#242134',
      ...props.style
    }}
  >
    <Path
      d="M2.93 17.07A10 10 0 1 1 17.07 2.93 10 10 0 0 1 2.93 17.07zM9 11v4h2V9H9v2zm0-6v2h2V5H9z"
      fill="currentColor"
    />
  </Svg>
);

export default SvgInformationSolid;