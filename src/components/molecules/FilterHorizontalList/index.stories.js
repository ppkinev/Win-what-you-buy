import React from 'react'
import { storiesOf } from '@storybook/react'
import FilterHorizontalList from '.'

const items = [
  {
    id: 'all',
    value: 'All',
  },
  {
    id: 'personal',
    value: 'Personal',
  },
  {
    id: 'friends',
    value: 'Friends',
  },
]

const activeItem = 'all'

const onClick = id => (window.console.log(id))

storiesOf('Filter Horizontal List', module)
  .add('default', () => (
    <FilterHorizontalList
      items={items}
      onItemClick={onClick}
      activeItemID={activeItem}
    />
  ))
