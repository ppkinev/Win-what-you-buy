import React from 'react'
import { storiesOf } from '@storybook/react'
import WinnersWheel from '.'

storiesOf('Winners Wheel', module)
  .add('default', () => (
    <WinnersWheel
      amount={1257}
      primaryPercent={80}
      secondaryPercent={90}
      title={'All time winners'}
    />
  ))
