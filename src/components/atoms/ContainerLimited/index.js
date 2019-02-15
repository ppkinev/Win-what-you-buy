import styled, { css } from 'styled-components'
import PropTypes from 'prop-types'
import { size } from 'styled-theme'

const noPaddingCSS = css`
  ${size('mobileMediaQuery')} {
    padding: 0;
  }
`
const ContainerLimited = styled.div`
  max-width: 1080px;
  max-height: 100%;
  margin: 0 auto;
  padding: 0 10px;
  position: relative;
  
  ${props => props.noMobilePadding && noPaddingCSS};
`

ContainerLimited.propTypes = {
  noMobilePadding: PropTypes.bool,
}

export default ContainerLimited
