import React from 'react'
import { storiesOf } from '@storybook/react'
import { ContainerLimited } from 'components'
import WinProductsTable from '.'

const items = [
  {
    image: 'https://www.apple.com/v/product-red/i/images/og_product-red.png?201804090503',
    title: 'Cool red phone',
    price: 256,
    retailer: 'Apple.com',
    points: 125,
    odds: '1/32',
    id: 'aaca-asras',
  },
  {
    image: 'https://community.uservoice.com/wp-content/uploads/iterative-product-development-800x533.jpg',
    title: 'Light bulbs which are always turned on',
    price: 15,
    retailer: 'LightBulbs',
    points: 30,
    odds: '1/14',
    id: 'ffer-asdqe',
  },
]

const onItemClick = (id) => {
  window.console.info('ITEM ID: ', id)
}

const onGetMoreItemsClick = () => {
  window.console.info('GET MORE ITEMS')
}

storiesOf('WinProductsTable', module)
  .add('default', () => (
    <ContainerLimited>
      <WinProductsTable items={items} onItemClick={onItemClick} onGetMoreItemsClick={onGetMoreItemsClick} />
    </ContainerLimited>
  ))
