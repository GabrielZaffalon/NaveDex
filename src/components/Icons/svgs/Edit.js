import React from 'react'
import Svg, { Path } from 'react-native-svg'

import theme from 'src/theme'

const Edit = ({ width = 24, height = 24, color = theme.colors.dark, ...props }) => {
  return (
    <Svg width={width} height={height} viewBox='0 0 24 24' fill='none' {...props}>
      <Path
        d='M3 17.25V21H6.75L17.81 9.94L14.06 6.19L3 17.25ZM21.41 6.34L17.66 2.59L15.13 5.13L18.88 8.88L21.41 6.34Z'
        fill={color}
      />
    </Svg>
  )
}

export default Edit
