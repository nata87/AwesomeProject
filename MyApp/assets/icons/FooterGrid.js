import * as React from "react";
import Svg, { Path } from "react-native-svg";
const footerGrid = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={40}
    height={40}
    fill="none"
    {...props}
  >
    <Path
      stroke={props.stroke || "#212121"} // Чорний контур за замовчуванням
      fill="none" // Без заливки
      d="M11 11h7v7h-7v-7ZM22 11h7v7h-7v-7ZM22 22h7v7h-7v-7ZM11 22h7v7h-7v-7Z"
    />
  </Svg>
);

export default footerGrid;
