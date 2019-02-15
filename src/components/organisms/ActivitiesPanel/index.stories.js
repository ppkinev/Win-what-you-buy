import React from 'react'
import styled from 'styled-components'
import { storiesOf } from '@storybook/react'
import ActivityItem from './ActivityItem'
import ActivityPanel from '.'

const Holder = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
`

storiesOf('Activity item', module)
  .add('default', () => (
    <Holder>
      <ActivityItem
        image={'https://placeimg.com/200/200/any'}
      />
      <ActivityItem
        image={'https://placeimg.com/200/200/any'}
      />
      <ActivityItem
        image={'https://placeimg.com/200/200/any'}
      />
    </Holder>
  ))
  .add('panel', () => (
    <ActivityPanel
      filters={[{ id: 'all', value: 'All' }, { id: 'fr', value: 'Friends' }]}
      activeFilterID={'all'}
      onShowMoreClick={() => window.console.log('onShowMoreClick')}
      onFilterClick={filter => window.console.log('onFilterClick', filter)}
      activities={[{type: '1'}, {type: '1'}, {type: '1'}, {type: '1'}]}
    />
  ))
