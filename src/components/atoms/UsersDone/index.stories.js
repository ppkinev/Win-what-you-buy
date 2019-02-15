import React from 'react'
import { storiesOf } from '@storybook/react'
import UsersDone from '.'

const users = [
  {
    id: '0',
    image: 'https://static.rewarded.club/content/main/assets/images/default-profile.png'
  },
  {
    id: '1',
    image: 'https://static.rewarded.club/content/main/assets/images/default-profile.png'
  },
]

const users2 = [
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

storiesOf('UsersDone', module)
  .add('default', () => (<UsersDone users={users} totalAmount={users.length} />))
  .add('empty', () => (<UsersDone />))
  .add('many', () => (<UsersDone users={users2} totalAmount={315} />))
  .add('column', () => (<UsersDone users={users2} totalAmount={315} column />))
