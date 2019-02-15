import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { palette, size } from 'styled-theme'
import { ContainerLimited, ProfileElementAuthorized, HeaderMobile } from 'components'
import MenuItemNotifications from './MenuItemNotifications'
import MenuItemSearch from './MenuItemSearch'
import NotificationsContainer from '../../../containers/NotificationsContainer'
import SideMenu from '../../organisms/SideMenu'
import { iconsPath } from '../../../config'
import { fadeIn } from '../../themes/keyframes'

const HEADER_HEIGHT = 115
const SIDE_MARGIN = 24


const Logo = styled.img`
  width: auto;
  display: inline-block;
  max-height: 100%;
  max-width: 90%;
  
  cursor: pointer;
`

const LogoHolder = styled.div`
  padding-bottom: 20px;
`

const MenuItem = styled.div`
  font-size: ${size('menuItems')};
  text-transform: uppercase;
  font-weight: 900;
  padding: 0 15px 20px;
  color: ${palette('main', 0)};
  cursor: pointer;
  transition: border-bottom 0.2s ease;
  
  border-bottom: 4px solid ${props => props.isActive ? palette('main', 0) : 'transparent'};
  
  &:hover {
    border-bottom: 4px solid ${palette('main', 2)};
  }
`

MenuItem.propTypes = {
  isActive: PropTypes.bool,
}

const SignInItem = styled(MenuItem)`
  padding-bottom: 0;
  transition: opacity 0.3s ease;
  
  &:hover {
    border-bottom: 4px solid transparent;
    opacity: 0.6;
  }
`

const Menu = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  
  padding: 0;
  margin: 0;
  list-style: none;
  
  & > * {
    margin-left: ${SIDE_MARGIN}px;
  }
`

const HeaderOuter = styled.header`
  background-color: ${palette('grey', 0)};
  box-shadow: 2px 0 5px rgba(0,0,0,0.4);
  width: 100%;
  position: relative;
  z-index: 16000;
`

const DesktopHeader = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-end;
  justify-content: space-between;
  height: ${HEADER_HEIGHT}px;
  position: relative;
  
  ${size('mobileMediaQuery')} {
    display: none;
  }
`

const RightItemsHolder = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: flex-end;
  padding-bottom: 26px;
  
  & > *:not(:last-child) {
    margin-right: ${SIDE_MARGIN}px;
  }
`

const LeftItemsHolder = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: flex-end;
`

const NotificationsPanel = styled(NotificationsContainer)`
    position: absolute;
    top: 100%;
    right: 0;
`

const ShowMoreMenuItem = styled.div`
  position: relative;
  width: 60px;
  height: 45px;
  background: url('${iconsPath}/icon-caret-down-rounded.svg') no-repeat center;
  background-size: 32px;
  background-position-x: center;
  background-position-y: -4px;
  cursor: pointer;
  margin-left: 10px;
  
  border-bottom: 4px solid ${props => props.isActive ? palette('main', 0) : 'transparent'};
  
  &:hover {
    border-bottom: 4px solid ${palette('main', 2)};
    
    & > * {
      display: block;
    }
  }
`

const ShowMoreDropDown = styled.div`
  display: none;
  
  position: absolute;
  background-color: ${palette('grey', 0)};
  padding: 14px 30px 5px;
  border-radius: 8px;
  top: 0;
  left: 50%;
  transform: translate(-50%, 63px);
  box-shadow: 2px 3px 6px rgba(0,0,0,0.3);
  
  animation: ${fadeIn} 0.3s ease forwards 1;
  
  &:before {
    content: '';
    position: absolute;
    top: 0;
    left: 50%;
    transform: translate(-50%, -50%) rotateZ(45deg);
    width: 20px;
    height: 20px;
    border-radius: 4px;
    background-color: ${palette('grey', 0)};
  }
  
  &:after {
    content: '';
    position: absolute;
    top: -20px;
    height: 30px;
    width: 100%;
    left: 0;
  }
  
  & > * {
    font-size: 16px;
    padding: 10px 0 4px;
    display: inline-block;
    margin-bottom: 9px;
  }
`

const MENU_ITEMS = [
  { name: 'Dashboard', link: '/' },
  { name: 'Shop', link: 'shop', isMainHeader: true, isMobileHeader: true },
  { name: 'Play', link: 'play', isMainHeader: true, isMobileHeader: true },
  { name: 'Earn', link: 'earn', isMainHeader: true, isMobileHeader: true },
  { name: 'Earn points', link: 'earn' },
  { name: 'Collect', link: 'collect' },
  { name: 'Draws', link: 'draws' },
  { name: 'Leaderboard', link: 'leaderboard' },
  { name: 'Score Predictor', link: 'score-predictor' },
  // { name: 'Activities', link: 'activities' },
]

const DROPDOWN_MENU_ITEMS = [
  { name: 'Earn points', link: 'earn' },
  { name: 'Collect', link: 'collect' },
  { name: 'Draws', link: 'draws' },
  { name: 'Activities', link: 'activities' },
  { name: 'Leaderboard', link: 'leaderboard' },
  { name: 'Score Predictor', link: 'score-predictor' },
]

const getMenuItems = ({ activeMenuItem, onMenuItemClick, isDesktop }) => (
  MENU_ITEMS.filter(item => isDesktop ? item.isMainHeader : item.isMobileHeader).map(item => (
    <MenuItem
      key={item.name}
      isActive={activeMenuItem === item.link}
      onClick={() => {
        onMenuItemClick(item.link)
      }}
    >{item.name}</MenuItem>),
  )
)

const getMenuDropDownItems = ({ activeMenuItem, onMenuItemClick }) => (
  DROPDOWN_MENU_ITEMS.map(item => (
    <MenuItem
      key={item.name}
      isActive={activeMenuItem === item.link}
      onClick={() => {
        onMenuItemClick(item.link)
      }}
    >{item.name}</MenuItem>),
  )
)

const Header = ({
                  brandLogo,
                  userAuthorized: user,

                  activeMenuItem,
                  onMenuItemClick,

                  onMobileMenuOpen,
                  onMobileMenuClose,
                  isMobileMenuOpened,

                  unreadNotifications,
                  onNotificationsClick,
                  isNotificationsPopupShown,

                  isUserAuthorized,
                }) => {
  const userElement = user ? (
    <ProfileElementAuthorized
      name={user.name}
      image={user.image}
      points={user.points}
      credits={user.credits}
      onMenuItemClick={onMenuItemClick}
    />
  ) : null

  const onLogoClick = () => onMenuItemClick('/')

  const notifications = isNotificationsPopupShown && (
    <NotificationsPanel />
  )

  const notificationElement = (
    <MenuItemNotifications
      counter={unreadNotifications}
      onClick={onNotificationsClick}
    />
  )

  const desktopRightHolder = isUserAuthorized ? (
    <RightItemsHolder>
      <MenuItemSearch />
      {notificationElement}
      {userElement}
    </RightItemsHolder>
  ) : (
    <RightItemsHolder>
      <MenuItemSearch />
      <SignInItem
        onClick={() => {
          onMenuItemClick('profile')
        }}
      >Sign In</SignInItem>
    </RightItemsHolder>
  )

  const desktopHeader = () => (
    <DesktopHeader>
      <LeftItemsHolder>
        <LogoHolder>
          <Logo src={brandLogo} onClick={onLogoClick} />
        </LogoHolder>
        <Menu>
          {getMenuItems({ activeMenuItem, onMenuItemClick, isDesktop: true })}
          <ShowMoreMenuItem>
            <ShowMoreDropDown>
              {getMenuDropDownItems({ activeMenuItem, onMenuItemClick })}
            </ShowMoreDropDown>
          </ShowMoreMenuItem>
        </Menu>
      </LeftItemsHolder>
      {desktopRightHolder}
    </DesktopHeader>
  )

  const mobileHeader = () => (
    <HeaderMobile
      notificationIcon={notificationElement}
      onMenuClick={onMobileMenuOpen}
      menuItems={getMenuItems({ activeMenuItem, onMenuItemClick })}
    />
  )

  return (
    <HeaderOuter>
      <ContainerLimited>
        {desktopHeader()}
        {mobileHeader()}
        {notifications}
      </ContainerLimited>

      {isMobileMenuOpened && (
        <SideMenu
          onMenuClose={onMobileMenuClose}
          user={user}
          menuItems={MENU_ITEMS.filter(item => !item.isMobileHeader)}
          onMenuItemClick={onMenuItemClick}
          isUserAuthorized={isUserAuthorized}
        />
      )}
    </HeaderOuter>
  )
}

Header.propTypes = {
  brandLogo: PropTypes.string,
  userAuthorized: PropTypes.object,
  activeMenuItem: PropTypes.string,
  onMenuItemClick: PropTypes.func,

  onMobileMenuOpen: PropTypes.func.isRequired,
  onMobileMenuClose: PropTypes.func.isRequired,
  isMobileMenuOpened: PropTypes.bool,

  unreadNotifications: PropTypes.number,
  onNotificationsClick: PropTypes.func,
  isNotificationsPopupShown: PropTypes.bool,

  isUserAuthorized: PropTypes.bool,
}

export default Header
