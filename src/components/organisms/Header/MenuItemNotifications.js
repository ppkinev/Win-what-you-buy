import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { font, palette } from 'styled-theme'
import { iconsPath } from '../../../config'

const ItemBase = styled.div`
  display: inline-block;
  width: 35px;
  height: 35px;
  cursor: pointer;
  background: url('${iconsPath}/icon-notification.svg') no-repeat;
  background-position: center bottom;
  background-size: 70%;
  position: relative;
  transition: opacity 0.2s ease;
  
  &:hover {
    opacity: 0.5;
  }
`

const ItemCounter = styled.div`
  position: absolute;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  border: 1px solid ${palette('main', 0)};
  color: ${palette('main', 0)};
  font-family: ${font('main')};
  font-size: 12px;
  line-height: 20px;
  text-align: center;
  background-color: ${palette('grey', 0)};
  
  top: -1px;
  right: -2px;
`

const MenuItemNotifications = ({ onClick, counter = 0 }) => {
  return (
    <ItemBase onClick={onClick}>
      <ItemCounter>{counter}</ItemCounter>
    </ItemBase>
  )
}

MenuItemNotifications.propTypes = {
  counter: PropTypes.number.isRequired,
  onClick: PropTypes.func.isRequired,
}

export default MenuItemNotifications
