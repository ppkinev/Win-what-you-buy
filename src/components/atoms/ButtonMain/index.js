import PropTypes from 'prop-types'
import styled, { css } from 'styled-components'
import { palette, size, font } from 'styled-theme'
import { ctaGradient } from '../../themes/gradients'

const mainCSS = css`
  ${ctaGradient};
  color: ${palette('grey', 0)};
  &:hover {
    background: ${palette('main', 1)};
  }
`

const invertedCSS = css`
  background-color: ${palette('grey', 0)};
  color: ${palette('main', 0)};
  transition: background-color 0.3s ease;
  &:hover {
    background: ${palette('grey', 2)};
  }
`

const ButtonMain = styled.div`
  display: inline-block;
  cursor: pointer;
  
  font-family: ${font('main')};
  text-align: center;
  font-size: ${size('text-regular')};
  text-shadow: 1px 1px 3px rgba(0,0,0,0.4);
  padding: 12px 24px;
  
  border-radius: 4px;
  
  ${props => props.inverted ? invertedCSS : mainCSS};
`

ButtonMain.propTypes = {
  inverted: PropTypes.bool,
}

export default ButtonMain
