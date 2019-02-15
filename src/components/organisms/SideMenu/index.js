import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { palette, size, font } from 'styled-theme'
import { fadeIn, sideMenuReveal } from '../../themes/keyframes'

import Logo from '../../atoms/Logo'
import Button from '../../atoms/ButtonMain'
import ProfileElementAuthorized from '../../molecules/ProfileElementAuthorized'

const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0,0,0,0.4);
  
  animation: ${fadeIn} 0.3s ease forwards 1;
  
  z-index: 20000;
`

const Deck = styled.div`
  background-color: ${palette('main', 0)};
  height: 100%;
  width: 70%;
  max-width: 320px;
  min-width: 160px;
  box-shadow: 0 2px 6px rgba(0,0,0,0.7);
  
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  
  box-sizing: border-box;
  
  animation: ${sideMenuReveal} 0.4s ease forwards 1;
`

const TopPart = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px;
  & > *:not(:first-child) {
    margin-top: 20px;
  }
`

const BottomPart = styled.div`
  flex-grow: 1;
  
  border-top: 2px solid rgba(255,255,255,0.3);
  
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-around; 
`

const MenuItem = styled.div`
  font-size: ${size('textTitle')};
  font-family: ${font('main')};
  color: ${palette('grey', 0)};
  
  width: 100%;
  flex-grow: 1;
  display: flex;
  align-items: center;
  
  box-sizing: border-box;
  padding: 0 20px;
  
  &:nth-of-type(2n) {
    background-color: rgba(0,0,0,0.1);
  }
`

const StyledLogo = styled(Logo)`
  max-width: 50%;
`

const SideMenu = ({ onMenuClose, onMenuItemClick, menuItems, user, isUserAuthorized }) => {
  const onAnyMenuItemClick = (item) => {
    onMenuClose()
    onMenuItemClick(item)
  }
  const onLogoClick = () => onAnyMenuItemClick('/')
  const onSideMenuClick = ev => ev.currentTarget === ev.target && onMenuClose()
  const menuItemsElements = menuItems.map(item => (
    <MenuItem key={item.name} onClick={() => onAnyMenuItemClick(item.link)}>{item.name}</MenuItem>
  ))

  const userElement = isUserAuthorized ? (
    <ProfileElementAuthorized
      onMenuItemClick={onAnyMenuItemClick}
      lightSkin
      {...user}
    />
  ) : (
    <Button inverted onClick={() => onAnyMenuItemClick('profile')}>Log in</Button>
  )

  return (
    <Overlay onClick={onSideMenuClick}>
      <Deck>
        <TopPart>
          <StyledLogo white onClick={onLogoClick} />
          {userElement}
        </TopPart>
        <BottomPart>
          {menuItemsElements}
        </BottomPart>
      </Deck>
    </Overlay>
  )
}

SideMenu.propTypes = {
  onMenuClose: PropTypes.func.isRequired,
  onMenuItemClick: PropTypes.func.isRequired,
  menuItems: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string,
    link: PropTypes.string,
  })),
  user: PropTypes.objectOf(PropTypes.shape({
    name: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    credits: PropTypes.number,
    points: PropTypes.number,
  })),
  isUserAuthorized: PropTypes.bool,
}

export default SideMenu
