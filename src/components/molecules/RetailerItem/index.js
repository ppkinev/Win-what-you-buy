import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { palette, font, size } from 'styled-theme'
import { imagesPath } from '../../../config'

const Holder = styled.div`
  display: inline-block;
  flex-grow: 1;
`

const Star = styled.div`
  position: absolute;
  top: -5px;
  right: -5px;
  width: 40px;
  height: 40px;
  background: url('${imagesPath}/star_gold.png') no-repeat center;
  background-size: 100%;
  z-index: 30;
  transform: translate3d(0,0,0);
`

const Panel = styled.div`
  cursor: pointer;
  position: relative;
  background-color: ${palette('grey', 0)};
  
  display: flex;
  flex-direction: column;
  align-items: center;
  
  padding: 20px 24px;
  box-sizing: border-box;
  
  border-radius: 4px;
  
  opacity: 0.9;
  
  transition: opacity 0.3s ease, transform 0.3s ease;
  
  &:hover {
    opacity: 1;
    transform: scale(1.1);
  }
`

const ImageHolder = styled.div`
  height: 60px;
`

const Image = styled.img`
  max-height: 100%;
  width: auto;
`

const Title = styled.h3`
  margin: 10px 0 0;
  padding: 0;
  text-align: center;
  
  font-family: ${font('main')};
  font-size: ${size('textRegular')};
  color: ${palette('grey', 0)};
  opacity: 0.8;
  
  font-weight: 400;
`

const Cashback = styled.p`
  margin: 10px 0 0;
  padding: 0;
  
  font-size: 10px;
  font-family: ${font('main')};
  color: ${palette('main', 0)};
  
  text-transform: uppercase;
`

const openNewWindow = (url) => {
  window.open(url, '_blank')
}

const getType = (type) => {
  switch (type) {
    default:
      return '%'
  }
}

const RetailerItem = ({
                        id,
                        image,
                        cashbackUrl,
                        url,
                        name,
                        comissionValue,
                        comissionType,
                        isFeatured,

                        userId,
                      }) => {

  const updatedUrl = userId ? cashbackUrl.replace('[TID]', userId) : cashbackUrl
  const onCashbackLinkClick = () => openNewWindow(updatedUrl)

  return (
    <Holder>
      <Panel onClick={onCashbackLinkClick}>
        <ImageHolder><Image src={image} /></ImageHolder>
        <Cashback>Cashback {comissionValue}{getType(comissionType)}</Cashback>
        {isFeatured && <Star />}
      </Panel>
      <Title>{name}</Title>
    </Holder>
  )
}

RetailerItem.propTypes = {
  id: PropTypes.string,
  image: PropTypes.string.isRequired,
  cashbackUrl: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  comissionValue: PropTypes.number,
  comissionType: PropTypes.string,
  isFeatured: PropTypes.bool,

  userId: PropTypes.string,
}

export default RetailerItem
