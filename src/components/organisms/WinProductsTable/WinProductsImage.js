import React from 'react'
import PropTypes from 'prop-types'
import styled, { css } from 'styled-components'
import { size } from 'styled-theme'

import { imagesPath } from '../../../config'
import { absoluteMiddleCSS } from '../../themes/style-snippets'

const WinImage = styled.img`
  width: auto;
  max-height: 100%;
  
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`

const imageSelectedCSS = css`
  &:after {
    content: '';
    width: 50px;
    height: 50px;
    
    background: url('${imagesPath}/star_gold.png') no-repeat;
    background-position: center;
    background-size: 85%;
    opacity: 0.8;
    
    ${absoluteMiddleCSS};
  }
`

const WinProductsHolder = styled.div`
  width: ${props => props.size}px;
  height: ${props => props.size}px;
  overflow: hidden;
  position: relative;
  box-shadow: 3px 0 8px -1px rgba(0,0,0,0.4);
  margin-right: 10px;
  
  border-top-right-radius: 6px;
  border-bottom-right-radius: 6px;
  
  ${size('mobileMediaQuery')} {
    border-radius: 6px;
  }
  
  flex-shrink: 0;
  
  ${props => props.isSelected && imageSelectedCSS};
`

const WinProductsImage = ({ src, size, isSelected }) => (
  <WinProductsHolder isSelected={isSelected} size={size}><WinImage src={src} /></WinProductsHolder>
)

WinProductsImage.propTypes = {
  src: PropTypes.string,
  size: PropTypes.number,
  isSelected: PropTypes.bool,
}

export default WinProductsImage
