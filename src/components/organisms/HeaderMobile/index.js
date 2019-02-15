import React from 'react'
import PropTypes from 'prop-types'
import styled, { css } from 'styled-components'
import { size, palette } from 'styled-theme'

const HEADER_HEIGHT = 60

const MenuBtnLine = styled.div`
  width: 100%;
  height: 4px;
  background-color: ${palette('main', 0)};
  border-radius: 3px;
`

const HeaderHolder = styled.div`
  position: relative;
  height: ${HEADER_HEIGHT}px;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  
  display: none;
  
  ${size('mobileMediaQuery')} {
    display: flex;
  }
`

const MenuBtn = styled.div`
  width: 40px;
  height: 40px;
  
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  
  box-sizing: border-box;
  
  padding: 8px 6px;
`

const MenuItemsHolder = styled.div`
  display: flex;
  flex-grow: 1;
  justify-content: space-around;
  margin: 0 10px -5px;
  
  & > * {
    padding: 0 5px;
  }
`

const HeaderMobile = ({ notificationIcon, onMenuClick, menuItems }) => {
  return (
    <HeaderHolder>
      <MenuBtn onClick={onMenuClick}>
        <MenuBtnLine />
        <MenuBtnLine />
        <MenuBtnLine />
      </MenuBtn>
      <MenuItemsHolder>{menuItems}</MenuItemsHolder>
      {notificationIcon}
    </HeaderHolder>
  )
}

HeaderMobile.propTypes = {
  notificationIcon: PropTypes.node,
  onMenuClick: PropTypes.func.isRequired,
  menuItems: PropTypes.array,
}

export default HeaderMobile
