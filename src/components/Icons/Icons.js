import React, { useMemo } from 'react'
import PropTypes from 'prop-types'

import EditSVG from './svgs/Edit'
import TrashSVG from './svgs/Trash'
import ClearSVG from './svgs/Clear'
import LogoSVG from './svgs/Logo'
import MenuSVG from './svgs/Menu'
import BackSVG from './svgs/Back'

const EDIT = 'edit'
const TRASH = 'trash'
const CLEAR = 'clear'
const LOGO = 'logo'
const MENU = 'menu'
const BACK = 'back'

const IconComponent = ({ icon, width, height, color, ...props }) => {
  const Icon = useMemo(() => {
    switch (icon) {
      case EDIT:
        return EditSVG
      case TRASH:
        return TrashSVG
      case CLEAR:
        return ClearSVG
      case LOGO:
        return LogoSVG
      case MENU:
        return MenuSVG
      case BACK:
        return BackSVG
    }
  }, [icon])

  return <Icon width={width} height={height} color={color} {...props} />
}

export default IconComponent
