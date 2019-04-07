import React, { memo } from 'react'
import PropTypes from 'prop-types'

import { ContainerStyle } from './styles'

const Container = memo(props => {
  const { children } = props

  return (
    <div css={ContainerStyle}>
      {children}
    </div>
  )
})

Container.displayName = 'Container'

Container.propTypes = {
  children: PropTypes.node.isRequired,
  classes: PropTypes.object.isRequired,
  style: PropTypes.any
}

export default Container
