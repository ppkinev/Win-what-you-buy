import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { palette, size, font } from 'styled-theme'

import DashboardPanel from '../../molecules/DashboardPanel'
import UsersDone from '../../atoms/UsersDone'
import ButtonMain from '../../atoms/ButtonMain'
import FetchingLocal from '../../atoms/FetchingLocal'

const FooterHolder = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  
  padding: 0 10px;
  box-sizing: border-box;
`

const ShowAllLink = styled.div`
  cursor: pointer;
  font-family: ${font('main')};
  color: ${palette('text', 0)};
  font-size: ${size('textRegular')};
`

const Footer = ({ onEnter, onShowAll }) => {
  return (
    <FooterHolder>
      <ButtonMain onClick={onEnter}>Enter now</ButtonMain>
      {onShowAll && <ShowAllLink onClick={onShowAll}>Show all</ShowAllLink>}
    </FooterHolder>
  )
}

Footer.propTypes = {
  onEnter: PropTypes.func.isRequired,
  onShowAll: PropTypes.func,
}

const Title = styled.h3`
  color: ${palette('text', 0)};
  font-size: ${size('textRegular')};
  
  margin: 0 0 10px;
  padding: 0;
`

const Description = styled.p`
  margin: 0 0 20px;
  padding: 0;
  color: ${palette('text', 0)};
  font-size: ${size('textSubtitle')};
`

const Countdown = styled.p`
  margin: 0 0 20px;
  padding: 0;
  color: ${palette('main', 0)};
  font-size: ${size('textSubtitle')};
`

const PrizeImage = styled.img`
  height: auto;
  max-width: 100%;
`

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 0 10px;
  box-sizing: border-box;
  
  position: relative;
`

const LeftPart = styled.div``
const RightPart = styled.div`
  margin-left: 15px;
  max-width: 35%;
`

const DrawsPanel = ({ title, description, image, endDate, usersDone, usersDoneTotal, onEnter, onShowAll }) => {
  return (
    <DashboardPanel
      title={'Latest draw'}
      footer={<Footer onEnter={onEnter} onShowAll={onShowAll} />}
    >
      <Wrapper>
        <LeftPart>
          <Title>{title}</Title>
          <Description>{description}</Description>
          <Countdown>{endDate}</Countdown>
          <UsersDone large totalAmount={usersDoneTotal} users={usersDone} />
        </LeftPart>
        <RightPart>
          <PrizeImage src={image} />
        </RightPart>
      </Wrapper>
    </DashboardPanel>
  )
}

DrawsPanel.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  endDate: PropTypes.string.isRequired,
  usersDone: PropTypes.arrayOf(
    PropTypes.shape({
      image: PropTypes.string.isRequired,
      id: PropTypes.string.isRequired,
    }),
  ),
  usersDoneTotal: PropTypes.number,
  onEnter: PropTypes.func.isRequired,
  onShowAll: PropTypes.func,
}

export default DrawsPanel
