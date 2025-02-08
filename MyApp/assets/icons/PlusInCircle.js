import * as React from 'react';
import Svg, { Circle, Path } from 'react-native-svg';
import { colors } from '../../styles/global';

const PlusInCircle = props => (
  <Svg
    xmlns='http://www.w3.org/2000/svg'
    width={25}
    height={25}
    fill={props.fill || colors.white}
    {...props}
  >
    <Circle
      cx={12.5}
      cy={12.5}
      r={12}
      fill={props.fill || colors.white}
      stroke={props.stroke || colors.orange}
    />
    <Path
      fill={props.plusColor || colors.orange}
      fillRule='evenodd'
      d='M13 6h-1v6H6v1h6v6h1v-6h6v-1h-6V6Z'
      clipRule='evenodd'
    />
  </Svg>
);
export default PlusInCircle;
