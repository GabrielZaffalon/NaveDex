import React from 'react'
import Svg, { Path } from 'react-native-svg'

import theme from 'src/theme'

const Clear = ({ width = 24, height = 24, color = theme.colors.dark, ...props }) => {
  return (
    <Svg width={width} height={height} viewBox='0 0 24 24' fill='none' {...props}>
      <Path
        d='M18.6894 5.3212C18.2753 4.90709 17.6064 4.90709 17.1923 5.3212L12 10.5028L6.80774 5.31058C6.39363 4.89647 5.72469 4.89647 5.31058 5.31058C4.89647 5.72469 4.89647 6.39363 5.31058 6.80774L10.5028 12L5.31058 17.1923C4.89647 17.6064 4.89647 18.2753 5.31058 18.6894C5.72469 19.1035 6.39363 19.1035 6.80774 18.6894L12 13.4972L17.1923 18.6894C17.6064 19.1035 18.2753 19.1035 18.6894 18.6894C19.1035 18.2753 19.1035 17.6064 18.6894 17.1923L13.4972 12L18.6894 6.80774C19.0929 6.40425 19.0929 5.72469 18.6894 5.3212Z'
        fill={color}
      />
    </Svg>
  )
}

export default Clear
