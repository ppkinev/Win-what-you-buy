import styled from 'styled-components'
import { palette, font, size } from 'styled-theme'
import { lightGreyGradient } from '../../themes/gradients'
import { absoluteMiddleCSS } from '../../themes/style-snippets'

const PlayBtn = styled.div`
  cursor: pointer;
  width: 96px;
  height: 96px;
  border-radius: 50%;
  box-shadow: 0 0 5px rgba(0,0,0,0.4);
  ${lightGreyGradient};
  ${absoluteMiddleCSS};
  
  transition: transform 0.25s ease,
              box-shadow 0.2s ease;
  
  &:after {
    content: 'play';
    text-transform: uppercase;
    background-color: ${palette('main', 0)};
    width: 74px;
    height: 74px;
    border-radius: 50%;
    text-align: center;
    line-height: 74px;
    color: ${palette('grey', 0)};
    font-family: ${font('main')};
    font-size: ${size('menuItems')};
    ${absoluteMiddleCSS};
    box-shadow: inset 0 0 9px ${palette('main', 1)};
    
    transition: text-shadow 0.25s ease,
                box-shadow 0.25s ease,
                opacity 0.25s ease,
                background-color 0.25s ease;
  }
  
  &:hover {
    transform: translate(-50%, -50%) scale(1.03);
    &:after {
      box-shadow: inset 0 0 1px ${palette('main', 1)};
      text-shadow: 0 0 3px ${palette('grey', 0)};
      opacity: 0.9;
    }
  }
  
  &:active {
    transform: translate(-50%, -49%) scale(1);
    box-shadow: 0 0 3px rgba(0,0,0,0.5);
    
    &:after {
      background-color: ${palette('main', 1)};
      opacity: 1;
    }
  }
`

export default PlayBtn
