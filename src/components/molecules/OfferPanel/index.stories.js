import React from 'react'
import { storiesOf } from '@storybook/react'
import OfferPanel from '.'

const onClick = () => console.log('CLICKED')

const users = [
  {
    id: '0',
    image: 'https://static.rewarded.club/content/main/assets/images/default-profile.png'
  },
  {
    id: '1',
    image: 'https://static.rewarded.club/content/main/assets/images/default-profile.png'
  },
  {
    id: '3',
    image: 'https://static.rewarded.club/content/main/assets/images/default-profile.png'
  },
]

storiesOf('Offer Panel', module)
  .add('default', () => (
    <OfferPanel
      image={'https://www.bnrconvention.com/wp-content/uploads/2017/04/cash-icon.png'}
      title={'Bring money to the bank'}
      description={'Nullam nec diam diam. Praesent volutpat leo a tortor lacinia, quis egestas lectus mollis. Nam urna leo, sagittis ac felis vitae, placerat placerat mi. nibh. '}
      usersDone={users}
      usersDoneTotal={26}
      earnAmount={0.7}
      currency={'£'}
      onOfferClick={onClick}
    />
  ))
