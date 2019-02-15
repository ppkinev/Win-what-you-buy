import React from 'react'
import styled from 'styled-components'
import { storiesOf } from '@storybook/react'
import NotificationItem from './NotificationItem'
import NotificationsList from '.'

const Holder = styled.div`
  width: 400px;
  margin: 0 30px;
`

const notifications = [
  { id: '1', isUnread: true },
  { id: '2', isUnread: false },
  { id: '3', isUnread: true },
  { id: '4', isUnread: true },
  { id: '5', isUnread: false },
  { id: '6', isUnread: true },
  { id: '7', isUnread: true },
]

storiesOf('Notifications', module)
  .add('Notification Item', () => (
    <Holder>
      <NotificationItem key={'1'} id={'1'} isUnread />
      <NotificationItem key={'2'} id={'2'} />
      <NotificationItem key={'3'} id={'3'} isUnread />
      <NotificationItem key={'4'} id={'4'} />
    </Holder>
  ))
  .add('Notification List', () => (
    <NotificationsList notifications={notifications} />
  ))
