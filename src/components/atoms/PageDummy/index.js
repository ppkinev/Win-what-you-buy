import styled from 'styled-components'
import { palette } from 'styled-theme'

const PageDummy = styled.div`
  width: 100%;
  height: calc(100vh - 283px);
  background-color: ${palette('main', 0)};
  
  display: flex;
  align-items: center;
  justify-content: center;
  
  font-size: 50px;
  color: ${palette('grey', 0)};
  font-weight: 100;
`

export default PageDummy
