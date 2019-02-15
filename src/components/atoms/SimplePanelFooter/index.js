import styled from 'styled-components'
import { palette, font, size } from 'styled-theme'

const SimplePanelFooter = styled.div`
  font-family: ${font('main')};
  color: ${palette('text', 0)};
  font-size: ${size('textRegular')};
  text-align: center;
  cursor: pointer;
`

export default SimplePanelFooter
