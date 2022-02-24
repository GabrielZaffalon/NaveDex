import React, { useMemo } from 'react'
import PropTypes from 'prop-types'

import EditSVG from './svgs/Edit'
import TrashSVG from './svgs/Trash'

const EDIT = 'edit'
const TRASH = 'trash'

const IconComponent = ({ icon, width, height, color, ...props }) => {
  const Icon = useMemo(() => {
    switch (icon) {
      case EDIT:
        return EditSVG
      case TRASH:
        return TrashSVG
    }
  }, [icon])

  return <Icon width={width} height={height} color={color} {...props} />
}

export default IconComponent
