import styled from 'styled-components'
import PropTypes from 'prop-types'
import { imagesPath } from '../../../config'

function getLogoPath(props) {
  if (props.white) return `${imagesPath}/logo_white.png`
  return `${imagesPath}/logo.png`
}

const Logo = styled.img.attrs({
  src: props => getLogoPath(props),
})`
  height: auto;
  max-width: 100%;
`

Logo.propTypes = {
  white: PropTypes.bool,
}

export default Logo
