import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { palette, size } from 'styled-theme'
import SimplePopup from '../SimplePopup'

const Title = styled.h3`
  font-size: ${size('textSubtitle')};
  color: ${palette('text', 0)};
`

const Text = styled.p`
  font-size: ${size('textTitle')};
  color: ${palette('text', 0)};
  line-height: 20px;
`

const Item = styled.span`
  color: ${palette('main', 0)};
`

const Retailer = styled.span`
  font-weight :bold;
`

const ShoppingItemMobilePopup = ({ onClose, title, retailer }) => {
  return (
    <SimplePopup onClose={onClose}>
      <Title>You can win:</Title>
      <Text><Item>{title}</Item> which was bought from <Retailer>{retailer}</Retailer></Text>
    </SimplePopup>
  )
}

ShoppingItemMobilePopup.propTypes = {
  onClose: PropTypes.func,
  title: PropTypes.string,
  retailer: PropTypes.string,
}

export default ShoppingItemMobilePopup
