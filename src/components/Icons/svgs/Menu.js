import React from 'react'
import Svg, { Path } from 'react-native-svg'

import theme from 'src/theme'

const Menu = ({ width = 24, height = 24, color = theme.colors.dark, ...props }) => {
  return (
    <Svg width={width} height={height} viewBox='0 0 24 24' fill='none' {...props}>
      <Path
        d='M2.66667 19H21.3333C21.975 19 22.5 18.475 22.5 17.8333C22.5 17.1917 21.975 16.6667 21.3333 16.6667H2.66667C2.025 16.6667 1.5 17.1917 1.5 17.8333C1.5 18.475 2.025 19 2.66667 19ZM2.66667 13.1667H21.3333C21.975 13.1667 22.5 12.6417 22.5 12C22.5 11.3583 21.975 10.8333 21.3333 10.8333H2.66667C2.025 10.8333 1.5 11.3583 1.5 12C1.5 12.6417 2.025 13.1667 2.66667 13.1667ZM1.5 6.16667C1.5 6.80833 2.025 7.33333 2.66667 7.33333H21.3333C21.975 7.33333 22.5 6.80833 22.5 6.16667C22.5 5.525 21.975 5 21.3333 5H2.66667C2.025 5 1.5 5.525 1.5 6.16667Z'
        fill={color}
      />
    </Svg>
  )
}

export default Menu
