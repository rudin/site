import styled from 'styled-components'
import { space, fontSize, color } from 'styled-system'

const Heading = styled.h2`
  ${space}
  ${fontSize}
  ${color}
  box-sizing: border-box;
  font-weight: bold;
  line-height: 1.25;
`

Heading.defaultProps = {
  fontSize: 5,
  m: 0
}

Heading.displayName = 'Heading'

export default Heading
