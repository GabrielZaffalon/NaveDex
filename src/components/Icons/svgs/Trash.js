import React from 'react'
import Svg, { Path } from 'react-native-svg'

import theme from 'src/theme'

const Trash = ({ width = 25, height = 24, color = theme.colors.dark, ...props }) => {
  return (
    <Svg width={width} height={height} viewBox='0 0 25 24' fill='none' {...props}>
      <Path d='M6.5 21H18.5V7H6.5V21ZM19.5 4H16L15 3H10L9 4H5.5V6H19.5V4Z' fill={color} />
    </Svg>
  )
}

export default Trash
