import React from 'react'
import PropTypes from 'prop-types'
import styled, { css } from 'styled-components'
import { palette, font, size } from 'styled-theme'

import DashboardPanel from '../../molecules/DashboardPanel'
import ButtonMain from '../../atoms/ButtonMain'
import SimplePanelFooter from '../../atoms/SimplePanelFooter'
import Badge from '../../molecules/Badge'
import BadgePopup from '../../organisms/BadgePopup'

import { absoluteMiddleCSS } from '../../themes/style-snippets'

const AVATAR_SIZE = 64
const BASE_PADDING = 16

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding-top: ${(BASE_PADDING * 2) + (AVATAR_SIZE / 4)}px;
`

const baseHolderCenterCSS = css`
  align-items: center;
  text-align: center;
`
const baseHolderLeftCSS = css`
  align-items: flex-start;
  text-align: left;
`

const BaseHolder = styled.div`
  display: flex;
  flex-direction: column;
  padding: ${BASE_PADDING - 4}px ${BASE_PADDING}px;
  margin: 6px 0;

  ${props => props.leftAligned ? baseHolderLeftCSS : baseHolderCenterCSS};  
`
BaseHolder.propTypes = {
  leftAligned: PropTypes.bool,
}

const BadgesHolder = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  padding: ${BASE_PADDING}px;
  margin: 8px 0;
  
  ${baseHolderLeftCSS};
  
  & > * {
    margin-right: 5px;
    margin-bottom: 5px;
  }
`

const ButtonsHolder = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  
  padding: ${BASE_PADDING}px;
`

const TopImagesHolder = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  margin-top: -${(AVATAR_SIZE / 2) + BASE_PADDING}px;
  margin-bottom: 20px;
  
  & > * {
    margin: 0 10px;
  }
`

const AvatarHolder = styled.div`
  position: relative;
  width: ${AVATAR_SIZE}px;
  height: ${AVATAR_SIZE}px;
  border-radius: 50%;
  overflow: hidden;
  box-sizing: border-box;
  border: 3px solid ${palette('grey', 0)};
  box-shadow: 1px 1px 5px rgba(0,0,0,0.4);
`

const Avatar = styled.img`
  display: block;
  max-width: 100%;
  height: auto;
  
  ${absoluteMiddleCSS};
`
const getCircImageSize = props => props.inline ? 28 : AVATAR_SIZE
const CircularImage = styled.img`
  width: ${props => getCircImageSize(props)}px;
  height: ${props => getCircImageSize(props)}px;
  border-radius: 50%;
  overflow: hidden;
  
  ${props => props.inline && 'margin-right: 10px;'}
`
CircularImage.propTypes = {
  inline: PropTypes.bool,
}

const Title = styled.h3`
  margin: 0;
  padding: 0;
  display: flex;
  align-items: center;
  color: ${palette('text', 0)};
  font-weight: 400;
  font-size: ${size('textTitle')};
`

const Subtitle = styled.h5`
  margin: 10px 0 0;
  padding: 0;
  color: ${palette('main', 0)};
  font-weight: 400;
  font-size: ${size('textSubtitle')};
`

const Text = styled.p`
  margin: 0;
  padding: 0;
  color: ${palette('text', 0)};
  font-weight: 400;
  font-size: ${size('textSubtitle')};
  line-height: 22px;
`

const Highlighted = styled.span`
  color: ${palette('main', 0)};
`


const DashboardUserPanel = ({
                              className,
                              id,
                              name,
                              image,
                              levelImage,
                              levelTitle,
                              levelDescription,
                              friendsAmount,
                              pointsAmount,
                              badges,
                              onBadgeClick,
                              onBadgePanelClose,
                              openedBadgeId,
                              drawsEntered,
                              drawsWon,
                              creditsWon,
                              connectionsAmount,
                              joinDate,
                              onClose,
                            }) => {
  const footer = (
    <SimplePanelFooter onClick={onClose}>Close</SimplePanelFooter>
  )

  const friendsSection = friendsAmount > 0 ? (
    <Subtitle>{friendsAmount} friend{friendsAmount > 1 ? 's' : ''}</Subtitle>
  ) : null

  const pointsSection = pointsAmount > 0 ? (
    <BaseHolder>
      <Title>
        <CircularImage inline src={'https://picsum.photos/200?image=94'} alt={'points'} /> {pointsAmount}&nbsp;
        point{pointsAmount > 1 ? 's' : ''}
      </Title>
    </BaseHolder>
  ) : null

  const badgeElements = badges.map(badge => <Badge key={badge.id} onClick={onBadgeClick} {...badge} />)

  const badgesSection = badges && badges.length > 0 ? <BadgesHolder leftAligned>{badgeElements}</BadgesHolder> : null

  const openedBadge = openedBadgeId && badges.find(badge => badge.id === openedBadgeId)

  const openedBadgePopup = openedBadge && (
    <BadgePopup
      image={openedBadge.image}
      title={openedBadge.title}
      description={openedBadge.description}
      onClose={onBadgePanelClose}
    />
  )

  return (
    <DashboardPanel className={className} footer={footer} title={name}>
      <Wrapper>
        <BaseHolder>
          <TopImagesHolder>
            <AvatarHolder>
              <Avatar src={image} alt={name} />
            </AvatarHolder>
            <CircularImage src={levelImage} alt={levelTitle} />
          </TopImagesHolder>
          <Title>{name}</Title>
          {friendsSection}
        </BaseHolder>
        {pointsSection}
        <ButtonsHolder>
          <ButtonMain>Follow</ButtonMain>
          <ButtonMain>Add to friends</ButtonMain>
        </ButtonsHolder>
        {badgesSection}
        <BaseHolder leftAligned>
          <Text>Draws entered: <Highlighted>{drawsEntered}</Highlighted></Text>
          <Text>Draws won: <Highlighted>{drawsWon}</Highlighted></Text>
          <Text>Credits won: <Highlighted>{creditsWon}</Highlighted></Text>
          <Text>Mutual friends: <Highlighted>{connectionsAmount}</Highlighted></Text>
          <Text>Joined: <Highlighted>{joinDate}</Highlighted></Text>
        </BaseHolder>
      </Wrapper>
      {openedBadgePopup}
    </DashboardPanel>
  )
}

DashboardUserPanel.propTypes = {
  className: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  levelImage: PropTypes.string,
  levelTitle: PropTypes.string,
  levelDescription: PropTypes.string,
  friendsAmount: PropTypes.number,
  pointsAmount: PropTypes.number,
  badges: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string,
    image: PropTypes.string,
    title: PropTypes.string,
    description: PropTypes.string,
  })),
  onBadgeClick: PropTypes.func.isRequired,
  onBadgePanelClose: PropTypes.func.isRequired,
  openedBadgeId: PropTypes.string,
  drawsEntered: PropTypes.number,
  drawsWon: PropTypes.number,
  creditsWon: PropTypes.number,
  connectionsAmount: PropTypes.number,
  joinDate: PropTypes.string,
  onClose: PropTypes.func.isRequired,
}

export default DashboardUserPanel
