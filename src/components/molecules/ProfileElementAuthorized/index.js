import React from 'react'
import PropTypes from 'prop-types'
import styled, { css } from 'styled-components'
import { palette, size, font } from 'styled-theme'
import { AvatarCircular } from 'components'
import { imagesPath } from '../../../config'

const getTextColorCSS = ({isPrimary, lightSkin} = {}) => {
  if (isPrimary && lightSkin) return css`color: ${palette('grey', 0)};`
  if (isPrimary) return css`color: ${palette('text', 0)};`
  if (lightSkin) return css`color: ${palette('grey', 2)};`
  return css`color: ${palette('main', 0)};`
}

const AvatarCircularRestyled = styled(AvatarCircular)`
  transition: opacity 0.2s ease;
  &:hover {
    opacity: 0.6;
  }
`

const AvatarHolder = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-end;
  justify-content: flex-start;
  cursor: pointer;
`

const InfoHolder = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  
  margin-left: 10px;
`

const BottomInfoHolder = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
`

const AvatarText = styled.h4`
  font-family: ${font('main')};
  font-size: ${size('menuItemsProfile')};
  margin: 0;
  padding: 0;
  line-height: 18px;
  
  ${props => getTextColorCSS(props)};
  
  transition: opacity 0.2s ease;
  &:hover {
    opacity: 0.6;
  }
  
  & + & {
    margin-left: 4px;
  }
`

const ProfileElementAuthorized = ({ className, name, image, points, credits, onMenuItemClick, lightSkin }) => {
  const onUserClick = () => onMenuItemClick('profile')
  const onPointsClick = () => onMenuItemClick('points')
  const onCreditsClick = () => onMenuItemClick('credits')

  return (
    <AvatarHolder className={className}>
      <AvatarCircularRestyled big image={image} onClick={onUserClick} />
      <InfoHolder>
        <AvatarText lightSkin={lightSkin} isPrimary onClick={onUserClick}>{name}</AvatarText>
        <BottomInfoHolder>
          <AvatarText lightSkin={lightSkin} onClick={onCreditsClick}>{credits} credits</AvatarText>
          <AvatarText lightSkin={lightSkin}>|</AvatarText>
          <AvatarText lightSkin={lightSkin} onClick={onPointsClick}>{points} points</AvatarText>
        </BottomInfoHolder>
      </InfoHolder>
    </AvatarHolder>
  )
}

ProfileElementAuthorized.propTypes = {
  className: PropTypes.string,
  name: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  points: PropTypes.number.isRequired,
  credits: PropTypes.number.isRequired,
  onMenuItemClick: PropTypes.func,

  lightSkin: PropTypes.bool,
}

ProfileElementAuthorized.defaultProps = {
  image: `${imagesPath}/face_temp.jpg`,
}

export default ProfileElementAuthorized
