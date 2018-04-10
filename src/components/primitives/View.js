import styled from 'styled-components'
import {
  space,
  width,
  fontSize,
  textAlign,
  color,
  borders,
  borderRadius
} from 'styled-system'

const View = styled.div`
  ${space}
  ${width}
  ${fontSize}
  ${color}
  ${textAlign}
  ${borders}
  ${borderRadius}
  box-sizing: border-box;
`

View.defaultProps = {
  w: 1
}

View.displayName = 'View'

export default View
