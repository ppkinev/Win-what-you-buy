import React from 'react'
import styled from 'styled-components'
import { storiesOf } from '@storybook/react'
import RetailerItem from '.'

const Holder = styled.div`
  display: flex;
  flex-wrap: wrap;
  
  & > * {
    width: calc(20% - 20px);
    margin: 10px;
  }
`

storiesOf('Retailer Item', module)
  .add('default', () => (
    <Holder>
      <RetailerItem
        id={'12'}
        image={'https://picsum.photos/200/300?image=98'}
        cashbackUrl={'http://google.com/cashback-url'}
        url={'http://google.com/'}
        name={'Test retailer'}
        comissionValue={2.52}
        comissionType={'percent'}
        isFeatured={false}

        userId={'111'}
      />
      <RetailerItem
        id={'12'}
        image={'https://picsum.photos/400/200?image=98'}
        cashbackUrl={'http://google.com/cashback-url'}
        url={'http://google.com/'}
        name={'Test retailer'}
        comissionValue={2.52}
        comissionType={'percent'}
        isFeatured={false}

        userId={'111'}
      />
      <RetailerItem
        id={'12'}
        image={'https://picsum.photos/200?image=98'}
        cashbackUrl={'http://google.com/cashback-url'}
        url={'http://google.com/'}
        name={'Test retailer'}
        comissionValue={2.52}
        comissionType={'percent'}
        isFeatured={false}

        userId={'111'}
      />
      <RetailerItem
        id={'12'}
        image={'https://picsum.photos/200?image=98'}
        cashbackUrl={'http://google.com/cashback-url'}
        url={'http://google.com/'}
        name={'Test retailer'}
        comissionValue={2.52}
        comissionType={'percent'}
        isFeatured={false}

        userId={'111'}
      />
      <RetailerItem
        id={'12'}
        image={'https://picsum.photos/200?image=98'}
        cashbackUrl={'http://google.com/cashback-url'}
        url={'http://google.com/'}
        name={'Test retailer'}
        comissionValue={2.52}
        comissionType={'percent'}
        isFeatured={false}

        userId={'111'}
      />
    </Holder>
  ))
