import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { palette, font, size } from 'styled-theme'

const Holder = styled.div`
  display: flex;
  flex-direction: column;
  transition: opacity 0.2s ease;
  align-items: center;
  text-align: center;
  cursor: pointer;
  
  &:hover {
    opacity: 0.7;
  }
`

const Title = styled.h3`
  margin: 0;
  padding: 0;
  font-family: ${font('main')};
  font-size: ${size('textParagraph')};
  color: ${palette('text', 0)};
`

const Image = styled.img`
  display: inline-block;
  width: 40px;
  height: auto;
  margin-bottom: 6px;
`

const Badge = ({ id, title, image, onClick }) => {
  const onBadgeClick = () => onClick(id)
  return (
    <Holder onClick={onBadgeClick}>
      <Image src={image} />
      <Title>{title}</Title>
    </Holder>
  )
}

Badge.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
}

export default Badge
