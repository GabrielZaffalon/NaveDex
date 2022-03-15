import React, { useMemo } from 'react'
import PropTypes from 'prop-types'

import EditSVG from './svgs/Edit'
import TrashSVG from './svgs/Trash'
import ClearSVG from './svgs/Clear'

const EDIT = 'edit'
const TRASH = 'trash'
const CLEAR = 'clear'

const IconComponent = ({ icon, width, height, color, ...props }) => {
  const Icon = useMemo(() => {
    switch (icon) {
      case EDIT:
        return EditSVG
      case TRASH:
        return TrashSVG
      case CLEAR:
        return ClearSVG
    }
  }, [icon])

  return <Icon width={width} height={height} color={color} {...props} />
}

export default IconComponent
