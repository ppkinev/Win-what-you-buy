import React from 'react'
import {storiesOf} from '@storybook/react'
import Dropdown from '.'

const items = [
  {id: 'all', value: 'All time'},
  {id: 'last', value: 'Last month'},
  {id: 'yes', value: 'Yesterday'},
]

storiesOf('Dropdown', module)
  .add('default', () => (
    <Dropdown items={items} selectedItem={'all'} />
  ))
