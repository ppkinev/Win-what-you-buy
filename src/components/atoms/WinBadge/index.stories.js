import React from 'react'
import { storiesOf } from '@storybook/react'
import WinBadge from '.'

storiesOf('Win Badge', module)
  .add('default', () => (<WinBadge image={'https://picsum.photos/200?image=26'} />))
