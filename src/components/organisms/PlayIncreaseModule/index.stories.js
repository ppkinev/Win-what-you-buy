import React from 'react'
import { storiesOf } from '@storybook/react'
import PlayIncreaseModule from '.'

const onClickPlay = () => console.log('CLICKED play')
const onClickMinus = () => console.log('CLICKED minus')
const onClickPlus = () => console.log('CLICKED plus')

storiesOf('Play Increase Module', module)
  .add('default', () => (
    <PlayIncreaseModule
      betAmount={1}
      progressPercent={75}
      currency={'£'}
      onPlayBtnClick={onClickPlay}
      onMinusButtonClick={onClickMinus}
      onPlusButtonClick={onClickPlus}
    />
  ))
