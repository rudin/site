// http://dmfrancisco.github.io/react-icons/

import React from 'react'

const renderGraphic = icon => {
  switch (icon) {
    case 'keyboard-arrow-down':
      return (
        <g>
          <path d="M7.41 7.84l4.59 4.58 4.59-4.58 1.41 1.41-6 6-6-6z" />
        </g>
      )
    case 'keyboard-arrow-right':
      return (
        <g>
          <path d="M8.59 16.34l4.58-4.59-4.58-4.59 1.41-1.41 6 6-6 6z" />
        </g>
      )
    default:
      return null
  }
}

const styles = size => ({
  fill: 'currentcolor',
  verticalAlign: 'middle',
  width: size,
  height: size
})

export default ({ icon, size, style, active, ...rest }) => (
  <svg
    viewBox="0 0 24 24"
    preserveAspectRatio="xMidYMid meet"
    style={{ ...styles(size ? size : 24), ...style }}
    {...rest}
  >
    {renderGraphic(icon)}
  </svg>
)
