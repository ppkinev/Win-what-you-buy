import styled from 'styled-components'
import { palette, size } from 'styled-theme'

const WinProductsButton = styled.button`
  -webkit-appearance: none;
  cursor: pointer;
  text-transform: uppercase;
  
  background: ${palette('buttonGradient', 0)};
  background: -moz-linear-gradient(top, ${palette('buttonGradient', 0)} 0%, ${palette('buttonGradient', 1)} 100%);
  background: -webkit-gradient(left top, left bottom, color-stop(0%, ${palette('buttonGradient', 0)}), color-stop(100%, ${palette('buttonGradient', 1)}));
  background: -webkit-linear-gradient(top, ${palette('buttonGradient', 0)} 0%, ${palette('buttonGradient', 1)} 100%);
  background: -o-linear-gradient(top, ${palette('buttonGradient', 0)} 0%, ${palette('buttonGradient', 1)} 100%);
  background: -ms-linear-gradient(top, ${palette('buttonGradient', 0)} 0%, ${palette('buttonGradient', 1)} 100%);
  background: linear-gradient(to bottom, ${palette('buttonGradient', 0)} 0%, ${palette('buttonGradient', 1)} 100%);
  filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='${palette('buttonGradient', 0)}', endColorstr='${palette('buttonGradient', 1)}', GradientType=0 );
  
  height: 100%;
  border-radius: 6px;
  font-size: ${size('textRegular')};
  color: ${palette('grey', 0)};
  width: 100%;
  outline: 0;
  border: 0;
  border-bottom: 5px solid ${palette('buttonGradient', 2)};
  
  transition: background 0.2s ease,
              border-bottom 0.2s ease;
  
  &:hover {
    background: ${palette('buttonGradient', 1)};
    background: -moz-linear-gradient(top, ${palette('buttonGradient', 1)} 0%, ${palette('buttonGradient', 1)} 100%);
    background: -webkit-gradient(left top, left bottom, color-stop(0%, ${palette('buttonGradient', 1)}), color-stop(100%, ${palette('buttonGradient', 1)}));
    background: -webkit-linear-gradient(top, ${palette('buttonGradient', 1)} 0%, ${palette('buttonGradient', 1)} 100%);
    background: -o-linear-gradient(top, ${palette('buttonGradient', 1)} 0%, ${palette('buttonGradient', 1)} 100%);
    background: -ms-linear-gradient(top, ${palette('buttonGradient', 1)} 0%, ${palette('buttonGradient', 1)} 100%);
    background: linear-gradient(to bottom, ${palette('buttonGradient', 1)} 0%, ${palette('buttonGradient', 1)} 100%);
    filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='${palette('buttonGradient', 1)}', endColorstr='${palette('buttonGradient', 1)}', GradientType=0 );
    
    border-bottom: 0 solid ${palette('buttonGradient', 2)};
  }
  
  &:active {
    background: ${palette('buttonGradient', 2)};
    background: -moz-linear-gradient(top, ${palette('buttonGradient', 2)} 0%, ${palette('buttonGradient', 2)} 100%);
    background: -webkit-gradient(left top, left bottom, color-stop(0%, ${palette('buttonGradient', 2)}), color-stop(100%, ${palette('buttonGradient', 2)}));
    background: -webkit-linear-gradient(top, ${palette('buttonGradient', 2)} 0%, ${palette('buttonGradient', 2)} 100%);
    background: -o-linear-gradient(top, ${palette('buttonGradient', 2)} 0%, ${palette('buttonGradient', 2)} 100%);
    background: -ms-linear-gradient(top, ${palette('buttonGradient', 2)} 0%, ${palette('buttonGradient', 2)} 100%);
    background: linear-gradient(to bottom, ${palette('buttonGradient', 2)} 0%, ${palette('buttonGradient', 2)} 100%);
    filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='${palette('buttonGradient', 2)}', endColorstr='${palette('buttonGradient', 2)}', GradientType=0 );
    
    border-bottom: 0 solid ${palette('buttonGradient', 2)};
  }
  
  ${size('mobileMediaQuery')} {
    box-sizing: border-box;
    padding: 6px 12px;
    margin-bottom: 4px;
  }
`

export default WinProductsButton
