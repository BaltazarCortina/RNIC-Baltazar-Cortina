import * as React from 'react';
import Svg, {SvgProps, Rect} from 'react-native-svg';
const SvgComponent = (props: SvgProps) => (
  <Svg
    width={30}
    height={30}
    fill="none"
    stroke="currentColor"
    strokeLinecap="round"
    strokeLinejoin="round"
    strokeWidth={2}
    viewBox="0 0 24 24"
    {...props}>
    <Rect width={18} height={18} x={3} y={3} rx={2} ry={2} />
  </Svg>
);
export default SvgComponent;
