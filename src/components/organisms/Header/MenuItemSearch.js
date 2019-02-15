import styled from 'styled-components'
import { iconsPath } from '../../../config'

const MenuItemSearch = styled.div`
  display: inline-block;
  width: 35px;
  height: 35px;
  cursor: pointer;
  background: url('${iconsPath}/icon-search.svg') no-repeat;
  background-position: center bottom;
  background-size: 80%;
  transition: opacity 0.2s ease;
  
  &:hover {
    opacity: 0.5;
  }
`

export default MenuItemSearch
