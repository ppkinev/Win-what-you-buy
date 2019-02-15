import React from 'react'
import { storiesOf } from '@storybook/react'
import OfferCard from '.'

const users = [
  {
    id: '0',
    image: 'https://static.rewarded.club/content/main/assets/images/default-profile.png',
  },
  {
    id: '1',
    image: 'https://static.rewarded.club/content/main/assets/images/default-profile.png',
  },
  {
    id: '3',
    image: 'https://static.rewarded.club/content/main/assets/images/default-profile.png',
  },
]

const onClick = () => console.log('CLICKED')

storiesOf('Offer Card', module)
  .add('default', () => (
    <OfferCard
      image={'https://www.bnrconvention.com/wp-content/uploads/2017/04/cash-icon.png'}
      title={'Get something good'}
      odds={'2/17'}
      usersDone={users}
      usersDoneTotal={258}
      onButtonClick={onClick}
    />
  ))
  .add('right shifted', () => (
    <OfferCard
      rightShifted
      image={'https://www.bnrconvention.com/wp-content/uploads/2017/04/cash-icon.png'}
      title={'Do it now, until late'}
      odds={'1/11'}
      usersDone={users}
      usersDoneTotal={4}
      onButtonClick={onClick}
    />
  ))
