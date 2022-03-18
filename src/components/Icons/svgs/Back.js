import React from 'react'
import Svg, { Path } from 'react-native-svg'

import theme from 'src/theme'

const Clear = ({ width = 24, height = 24, color = theme.colors.dark, ...props }) => {
  return (
    <Svg width={width} height={height} viewBox='0 0 24 24' fill='none' {...props}>
      <Path
        d='M16.6201 2.99C16.1301 2.5 15.3401 2.5 14.8501 2.99L6.54006 11.3C6.15006 11.69 6.15006 12.32 6.54006 12.71L14.8501 21.02C15.3401 21.51 16.1301 21.51 16.6201 21.02C17.1101 20.53 17.1101 19.74 16.6201 19.25L9.38006 12L16.6301 4.75C17.1101 4.27 17.1101 3.47 16.6201 2.99Z'
        fill={color}
      />
    </Svg>
  )
}

export default Clear
