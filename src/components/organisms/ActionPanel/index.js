import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { palette, size, font } from 'styled-theme'

import DashboardPanel from '../../molecules/DashboardPanel'
import UsersDone from '../../atoms/UsersDone'
import ButtonMain from '../../atoms/ButtonMain'

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

const Footer = ({ reward, currency, onApply, onShowAll }) => {
  return (
    <FooterHolder>
      <ButtonMain onClick={onApply}>+{reward} {currency}</ButtonMain>
      {onShowAll && <ShowAllLink onClick={onShowAll}>Show all</ShowAllLink>}
    </FooterHolder>
  )
}

Footer.propTypes = {
  reward: PropTypes.number.isRequired,
  currency: PropTypes.string,
  onApply: PropTypes.func.isRequired,
  onShowAll: PropTypes.func,
}

const Title = styled.h3`
  color: ${palette('text', 0)};
  font-size: ${size('textRegular')};
  
  margin: 0 0 20px;
  padding: 0;
  
  display: flex;
  align-items: center;
`

const Description = styled.p`
  margin: 0 0 20px;
  padding: 0;
  color: ${palette('text', 0)};
  font-size: ${size('textSubtitle')};
`

const ActionImage = styled.img`
  height: auto;
  width: 60px;
  margin-right: 10px;
`

const Wrapper = styled.div`
  padding: 20px 10px 0;
  box-sizing: border-box;
`

const ActionPanel = ({ title, description, image, details, url, reward, currency = 'points', usersDone, usersDoneTotal, onApply, onShowAll }) => {
  const onActionApply = () => onApply({title, image, description, url, details})
  return (
    <DashboardPanel
      title={'Try an action'}
      footer={<Footer reward={reward} currency={currency} onApply={onActionApply} onShowAll={onShowAll} />}
    >
      <Wrapper>
        <Title><ActionImage src={image} />{title}</Title>
        <Description>{description}</Description>
        <UsersDone large totalAmount={usersDoneTotal} users={usersDone} />
      </Wrapper>
    </DashboardPanel>
  )
}

ActionPanel.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  details: PropTypes.string,
  url: PropTypes.string,
  reward: PropTypes.number.isRequired,
  currency: PropTypes.string,
  usersDone: PropTypes.arrayOf(
    PropTypes.shape({
      image: PropTypes.string.isRequired,
      id: PropTypes.string.isRequired,
    }),
  ),
  usersDoneTotal: PropTypes.number,
  onApply: PropTypes.func.isRequired,
  onShowAll: PropTypes.func,
}

export default ActionPanel
