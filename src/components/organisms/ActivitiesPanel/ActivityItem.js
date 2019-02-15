import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { font, size, palette } from 'styled-theme'
import moment from 'moment'
import AvatarCircular from '../../atoms/AvatarCircular'
import { splitCapitalsJoinSpaces } from '../../../services/helpers'

const Holder = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: flex-start;
  min-height: 95px;
  position: relative;
  
  & + & {
    :after {
      content: '';
      display: block;
      width: 1px;
      height: 100px;
      border-left: 1px dashed ${palette('grey', 3)};
      
      position: absolute;
      bottom: 70%;
      left: 17px;
      z-index: 1;
    }
  }
`

const TextHolder = styled.div`
  font-family: ${font('main')};
  font-size: ${size('textSubtitle')};
  margin-left: 15px;
`

const Text = styled.p`
  margin: 0;
  padding: 0;
  color: ${palette('text', 0)};
`

const HL = styled.span`
  color: ${palette('main', 0)};
`

const DateTime = styled.p`
  margin: 0 0 8px;
  padding: 0;
  color: ${palette('grey', 3)};
`

const AvatarRestyled = styled(AvatarCircular)`
  cursor: pointer;
  position: relative;
  z-index: 5;
  border: 2px solid transparent;
  
  &:hover {
    border: 2px solid ${palette('main', 0)};
  }
`

const Name = styled.span`
  font-weight: bold;
`

const getTimeFormatted = (dateTime) => {
  // add time formatting to convert UTC timestamp to a proper format
  return moment(dateTime).fromNow()
}

function getTypeText(activity) {
  switch (activity.type) {
    case 'GamePurchase':
      if (activity.Game.Type === 'Draw') {
        return `playing the draw to win ${activity.Game[activity.Game.Type].Prize.Title}`
      } else if (activity.Game.Type === 'MatchQuiz') {
        return `for placing a bet on the ${splitCapitalsJoinSpaces(activity.Game.MatchQuiz.HomeTeam.Name)} vs ${splitCapitalsJoinSpaces(activity.Game.MatchQuiz.AwayTeam.Name)} game`
      } else if (activity.Game.Type === 'Chat') {
        return 'sending a payed message in a team chat'
      }
      break
    case 'RewardedActionReward':
      switch (activity.RewardedAction.Type) {
        case 'UserRegister':
          return 'for joining our rewarded program'
        case 'UserLevelReward':
          return 'for getting higher level'
        case 'FacebookConnect':
          return 'for connecting with Facebook'
        case 'FriendSignUp':
          return 'inviting a friend to our rewarding program'
        case 'ConnectNewApp':
          return 'connecting another app'
        case 'FacebookShare':
          return 'shouting out about us on Facebook'
        case 'TwitterShare':
          return 'tweeting about us'
        case 'CommissionConfirmed':
          return 'for making a great purchase'
        case 'MatchQuizFacebookShare':
          return 'for sharing Score Predictor results on Facebook'
        case 'MatchQuizTwitterShare':
          return 'for sharing Score Predictor results on Twitter'
        case 'ShoppingTrackingStart':
          return 'for using Rewards extension'
        default:
      }
      break
    case 'OfferActionReward':
      if (activity.OfferAction.Type.Group.Name === 'Share') {
        switch (activity.OfferAction.Type.Name) {
          case 'FacebookShare':
            return 'finishing Facebook share offer'
          case 'TwitterShare':
            return 'finishing Twitter share offer'
          default:
        }
      } else if (activity.OfferAction.Type.Group.Name === 'Watch') {
        return `watching "${activity.OfferAction.Title}" video`
      } else if (activity.OfferAction.Type.Group.Name === 'Discover') {
        if (activity.OfferAction.Type.Name === 'Learn') {
          return `for completing the tutorial "${activity.OfferAction.Title}"`
        }
        return 'downloading an app'
      } else if (activity.OfferAction.Type.Name === 'Survey') {
        return `for completing the survey "${activity.OfferAction.Title}"`
      }
      break
    case 'BadgeReward':
      return `getting a shiny new badge "${activity.BadgeReward.Title}"`
    case 'GameWinningReward':
      return `for making a correct prediction on the ${splitCapitalsJoinSpaces(activity.Game.MatchQuiz.HomeTeam.Name)} vs splitCapitalsJoinSpaces(activity.Game.MatchQuiz.AwayTeam.Name) game`
    default:
      return 'for doing something'
  }
  return 'for doing something'
}

const getActivityText = (activity) => {
  // check how activities look here after adding APIs
  // and then do in the same way as in the widget

  return (
    <Text>
      <Name>{activity.User ? activity.User.UserName : 'You'}</Name>
      &nbsp;<HL>{activity.outflow ? 'spent' : 'earned'} {activity.PointsAmount} points</HL>
      &nbsp;{getTypeText(activity)}
    </Text>
  )
}
getActivityText.propTypes = {
  type: PropTypes.string.isRequired,
  amount: PropTypes.number.isRequired,
  currency: PropTypes.string,
  outflow: PropTypes.bool,
}

const ActivityItem = ({ onUserClick, userSelfImage, userSelfId, activity }) => {
  const image = activity.User ? activity.User.ImageUrl : userSelfImage
  const userId = activity.User ? activity.User.UserId : userSelfId

  const onActivityUserClick = () => onUserClick(userId)
  return (
    <Holder>
      <AvatarRestyled forActivity image={image} onClick={onActivityUserClick} />
      <TextHolder>
        <DateTime>{getTimeFormatted(activity.date)}</DateTime>
        {getActivityText(activity)}
      </TextHolder>
    </Holder>
  )
}

ActivityItem.defaultProps = {
  date: '07.10.2018 at 12:32',
  amount: 24,
  currency: 'points',
  outflow: false,
}

ActivityItem.propTypes = {
  image: PropTypes.string,
  date: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  amount: PropTypes.number.isRequired,
  currency: PropTypes.string,
  outflow: PropTypes.bool,

  userId: PropTypes.string.isRequired,
  onUserClick: PropTypes.func.isRequired,
}

export default ActivityItem
