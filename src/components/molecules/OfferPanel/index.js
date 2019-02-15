import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { palette, size, font } from 'styled-theme'
import { ButtonMain, UsersDone } from 'components'

const Holder = styled.div`
  background-color: ${palette('grey', 0)};
  padding: 30px 30px 10px;
  border-radius: 3px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  
  height: 350px;
  max-width: 500px;
`

const Image = styled.img`
  width: 95px;
  height: 95px;
  border-radius: 50%;
  overflow: hidden;
  outline: none;
`

const Title = styled.h2`
  font-family: ${font('main')};
  font-size: ${size('textTitle')};
`

const Description = styled.p`
  font-family: ${font('main')};
  font-size: ${size('textParagraph')};
`

const OfferPanel = ({ id, image, title, description, usersDone, usersDoneTotal, earnAmount, currency = 'pts', onOfferClick }) => {
  const earnBtnText = currency === 'pts' ? `${earnAmount} ${currency}` : `${currency}${earnAmount}`
  const onClick = () => onOfferClick({ id, image, title, description })

  return (
    <Holder>
      <Image src={image} />
      <Title>{title}</Title>
      <Description>{description}</Description>
      <ButtonMain onClick={onClick}>Earn {earnBtnText}</ButtonMain>
      <UsersDone users={usersDone} totalAmount={usersDoneTotal} />
    </Holder>
  )
}

OfferPanel.propTypes = {
  id: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string,
  usersDone: PropTypes.array,
  usersDoneTotal: PropTypes.number,
  earnAmount: PropTypes.number.isRequired,
  currency: PropTypes.string,
  onOfferClick: PropTypes.func.isRequired,
}

export default OfferPanel
