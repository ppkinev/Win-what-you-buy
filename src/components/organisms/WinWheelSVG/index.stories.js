import React from 'react'
import { storiesOf } from '@storybook/react'
import WinWheelSVG from '.'

const items = [
  { text: 'Segment 1', image: 'https://picsum.photos/200?image=30', id: '0', mainPrize: true },
  { text: 'Segment 2', image: 'https://picsum.photos/200?image=31', id: '1' },
  { text: 'Segment 3', image: 'https://picsum.photos/200?image=32', id: '2' },
  { text: 'Segment 4', image: 'https://picsum.photos/200?image=33', id: '3' },
  { text: 'Segment 5', image: 'https://picsum.photos/200?image=34', id: '4' },
  { text: 'Segment 6', image: 'https://picsum.photos/200?image=35', id: '5' },
]

storiesOf('WinWheelSVG', module)
  .add('default', () => (<WinWheelSVG winWheelItems={items} />))
