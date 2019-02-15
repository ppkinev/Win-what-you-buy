import styled from 'styled-components'
import PropTypes from 'prop-types'
import theme from '../../themes/default'

const getDotColor = (color) => {
  switch (color) {
    case 'all':
      return theme.palette.text[0]
    case 'friends':
      return theme.palette.main[0]
    case 'connections':
      return theme.palette.main[1]
    default:
      return theme.palette.grey[3]
  }
}

const Dot = styled.div`
  width: 8px;
  height: 8px;
  border-radius: 50%;
  margin: 0 5px;
  flex-shrink: 0;
  background-color: ${props => getDotColor(props.color)};
`
Dot.propTypes = {
  color: PropTypes.string,
}

export default Dot
