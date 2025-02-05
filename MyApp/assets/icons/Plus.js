import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
const Plus = props => (
  <Svg
    xmlns='http://www.w3.org/2000/svg'
    width={14}
    height={14}
    fill='none'
    {...props}
  >
    <Path
      stroke={props.stroke || 'rgba(33, 33, 33, 0.8)'}
      strokeWidth={0.7}
      fill='none'
      d='M7.5.5h-1v6h-6v1h6v6h1v-6h6v-1h-6v-6Z'
    />
  </Svg>
);
export default Plus;