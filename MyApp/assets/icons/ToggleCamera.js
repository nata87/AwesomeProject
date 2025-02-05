import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
const ToggleCamera = props => (
  <Svg
    xmlns='http://www.w3.org/2000/svg'
    width={24}
    height={24}
    fill='none'
    {...props}
  >
    <Path
      fill='#fff'
      fillOpacity={0.45}
      d='M3.937 11.817A8.045 8.045 0 0 1 6.295 6.3a8.021 8.021 0 0 1 5.702-2.362A8.005 8.005 0 0 1 17.695 6.3c.232.232.45.478.651.736l-1.41 1.101a.187.187 0 0 0 .07.331l4.118 1.008a.188.188 0 0 0 .232-.18l.019-4.24a.186.186 0 0 0-.303-.148L19.75 5.94a9.817 9.817 0 0 0-7.755-3.785c-5.37 0-9.738 4.303-9.84 9.652a.188.188 0 0 0 .188.192H3.75a.187.187 0 0 0 .187-.183ZM21.656 12H20.25a.187.187 0 0 0-.188.183 8.008 8.008 0 0 1-.63 2.953 8.02 8.02 0 0 1-1.728 2.564 8.028 8.028 0 0 1-5.702 2.363 8.022 8.022 0 0 1-6.352-3.099l1.411-1.101a.187.187 0 0 0-.07-.331l-4.118-1.008a.188.188 0 0 0-.232.18l-.016 4.243c0 .157.18.246.302.148l1.322-1.034a9.822 9.822 0 0 0 7.755 3.783c5.372 0 9.739-4.306 9.84-9.652a.187.187 0 0 0-.188-.192Z'
    />
  </Svg>
);
export default ToggleCamera;
