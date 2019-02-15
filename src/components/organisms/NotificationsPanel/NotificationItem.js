import React from 'react'
import PropTypes from 'prop-types'
import styled, { css } from 'styled-components'
import { palette, size, font } from 'styled-theme'
import { absoluteMiddleCSS } from '../../themes/style-snippets'
import { notificationTooltipShow } from '../../themes/keyframes'
import { imagesPath } from '../../../config'
import { splitCapitalsJoinSpaces } from '../../../services/helpers'

const NotificationImageHolder = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  overflow: hidden;
  border: 2px solid ${palette('grey', 2)};
  position: relative;
  
  margin-right: 10px;
  
  flex-shrink: 0;
`

const NotificationImage = styled.img`
  display: inline-block;
  ${absoluteMiddleCSS};
  max-width: 100%;
  height: auto;
`

const NotificationText = styled.p`
  margin: 0;
  padding: 0;
  
  font-size: ${size('textRegular')};
  color: ${palette('text', 0)};
`

const NotificationDate = styled.p`
  margin: 4px 0 0;
  padding: 0;
  
  font-size: ${size('textRegular')};
  color: ${palette('grey', 4)};
`

const Highlighted = styled.span`
  color: ${palette('main', 0)};
`

const NotificationTextHolder = styled.div`
  flex-grow: 1;
  margin-right: 10px;
`

const ImgInline = styled.img`
  display: inline-block;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  margin: 0 4px;
  vertical-align: middle;
`

const NotificationMarkAsReadBullet = styled.div`
  width: 6px;
  height: 6px;
  border-radius: 50%;
  border: 3px solid ${palette('grey', 4)};
  position: relative;
  cursor: pointer;
  transition: border 0.3s ease;
  
  &:hover {
    border: 3px solid ${palette('main', 0)};
    & > * {
      display: block;
    }
  }
`

const NotificationMarkAsReadTooltip = styled.div`
  display: none;

  background-color: ${palette('main', 0)};
  color: ${palette('grey', 0)};
  font-size: 12px;
  padding: 5px 8px;
  border-radius: 3px;
  
  position: absolute;
  top: 50%;
  right: 15px;
  white-space: nowrap;
  //transform: translateY(-50%);
  transform: translate(12px, -100%) rotateZ(90deg);
  transform-origin: center right;
  
  animation: ${notificationTooltipShow} 0.3s ease forwards 1;
  
  &:after {
    content: '';
    width: 8px;
    height: 8px;
    position: absolute;
    top: 50%;
    right: 0;
    transform: translate(45%,-50%) rotate(45deg);
    background-color: ${palette('main', 0)};
    border-radius: 2px;  
  }
`

const unreadCSS = css`
  background-color: ${palette('main', 3)};
`
const Holder = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 8px 15px;
  box-sizing: border-box;
  width: 100%;
  cursor: pointer;
  transition: opacity 0.3s ease;
  
  &:hover {
    opacity: 0.7;
  }
  
  ${props => props.isUnread && unreadCSS};
`
Holder.propTypes = {
  isUnread: PropTypes.bool,
}

function getNotificationFormatting(n) {
  let image
  let text
  let temp
  let page
  let pageId
  let error

  switch (n.type) {
    case 'NewCommissionUser':
    case 'CommissionConfirmedUser':
      temp = n.WalletTransaction
      image = `${imagesPath}/face_temp.jpg`
      if (temp.Status.toLowerCase() === 'completed') {
        text = (
          <NotificationText>Your <Highlighted>£ {temp.Amount} {temp.Partner && temp.Partner.Name}</Highlighted> cashback
            was confirmed.</NotificationText>
        )
      } else {
        text = (
          <NotificationText>Your <Highlighted>£ {temp.Amount} {temp.Partner && temp.Partner.Name}</Highlighted> has been
            tracked and is pending.</NotificationText>
        )
      }
      page = 'credits'
      break
    case 'AcceptFriendRequest':
      text = (
        <NotificationText><Highlighted>{n.User.UserName}</Highlighted> accepted your friend request.</NotificationText>
      )
      image = n.User.ImageUrl
      page = 'public'
      pageId = n.User.UserId
      break
    case 'SendFriendRequest':
      text = (
        <NotificationText><Highlighted>{n.User.UserName}</Highlighted> sent you a friend request, would you like to
          accept it?</NotificationText>
      )
      image = n.User.ImageUrl
      page = 'public'
      pageId = n.User.UserId
      break
    case 'WinTheDrawRelatedUser':
      text = (
        <NotificationText><Highlighted>{n.Draw.Winner.UserName}</Highlighted> has just
          won <Highlighted>{n.Draw.Prize.Title.toLowerCase()}</Highlighted> in the draw.</NotificationText>
      )
      image = n.Draw.Prize.ImageUrl
      page = 'draws'
      pageId = n.Draw.DrawId
      break
    case 'WinTheDrawUser':
      text = (
        <NotificationText>Congratulations! You won the draw! Get
          your <Highlighted>{n.Draw.Prize.Title.toLowerCase()}</Highlighted></NotificationText>
      )
      image = n.Draw.Prize.ImageUrl
      page = 'draws'
      pageId = n.Draw.DrawId
      break
    case 'WinTheMatchQuizUser':
      text = (
        <NotificationText>Congratulations! You've made a correct prediction on the yield&nbsp;
          <Highlighted>
            {n.Fixture.HomeTeam.ImageUrl && <ImgInline src={n.Fixture.HomeTeam.ImageUrl} />}
            {splitCapitalsJoinSpaces(n.Fixture.HomeTeam.Name)} vs&nbsp;
            {n.Fixture.AwayTeam.ImageUrl && <ImgInline src={n.Fixture.AwayTeam.ImageUrl} />}
            {splitCapitalsJoinSpaces(n.Fixture.AwayTeam.Name)}
          </Highlighted>&nbsp;
          game.
        </NotificationText>
      )
      image = `${imagesPath}/face_temp.jpg`
      page = 'score-predictor'
      break
    case 'WinTheMatchQuizRelatedUser':
      text = (
        <NotificationText>
          <Highlighted>{n.Winner.UserName}</Highlighted> made a correct prediction on the&nbsp;
          <Highlighted>
            {n.Fixture.HomeTeam.ImageUrl && <ImgInline src={n.Fixture.HomeTeam.ImageUrl} />}
            {splitCapitalsJoinSpaces(n.Fixture.HomeTeam.Name)} vs&nbsp;
            {n.Fixture.AwayTeam.ImageUrl && <ImgInline src={n.Fixture.AwayTeam.ImageUrl} />}
            {splitCapitalsJoinSpaces(n.Fixture.AwayTeam.Name)}
          </Highlighted>&nbsp;
          game.
        </NotificationText>
      )
      image = n.Winner.ImageUrl
      page = 'public'
      pageId = n.Winner.UserId
      break
    default:
      error = true
  }

  return {
    text, image,
  }
}

const NotificationItem = ({ id, date, isUnread, onClick, onMarkAsRead, ...restParams }) => {
  const markAsRead = () => onMarkAsRead(id)
  const onItemClick = () => {
    markAsRead()
    onClick(id)
  }

  const { text, image } = getNotificationFormatting(restParams)

  const markAsReadElement = isUnread && (
    <NotificationMarkAsReadBullet onClick={markAsRead}>
      <NotificationMarkAsReadTooltip>Mark as read</NotificationMarkAsReadTooltip>
    </NotificationMarkAsReadBullet>
  )

  return (
    <Holder isUnread={isUnread} onClick={onItemClick}>
      <NotificationImageHolder>
        <NotificationImage src={image} />
      </NotificationImageHolder>
      <NotificationTextHolder>
        {text}
        <NotificationDate>{date}</NotificationDate>
      </NotificationTextHolder>
      {markAsReadElement}
    </Holder>
  )
}

// TODO: do proper types with required flags when connect to data
NotificationItem.propTypes = {
  id: PropTypes.string,
  image: PropTypes.string,
  text: PropTypes.string,
  date: PropTypes.string,
  isUnread: PropTypes.bool,
  onClick: PropTypes.func,
  onMarkAsRead: PropTypes.func,
}

export default NotificationItem
