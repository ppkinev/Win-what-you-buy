import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { palette, size, font } from 'styled-theme'
import NotificationItem from './NotificationItem'

const Holder = styled.div`
  max-width: 400px;
  width: 100%;
  max-height: 400px;
  background-color: ${palette('grey', 0)};
  box-shadow: 1px 1px 4px rgba(0,0,0,0.3);
  
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`

const ItemsList = styled.div`
  flex-grow: 1;
  overflow-y: auto;
  width: 100%;
`

const Footer = styled.div`
  background-color: ${palette('grey', 0)};
  border-top: 1px solid ${palette('grey', 2)};
  font-size: ${size('textRegular')};
  color: ${palette('main', 0)};
  line-height: 30px;
  width: 100%;
  text-align: center;
  cursor: pointer;
`

const Empty = styled.div`
  color: ${palette('text', 0)};
  font-size: ${size('textRegular')};
  padding: 30px 0;
`

const NotificationsPanel = ({ className, notifications, onMarkAllAsRead, onMarkItemAsRead, onItemClick, isLoading }) => {
  const noText = isLoading ? 'Loading...' : 'Currently you have no notifications'
  const noNotifications = <Empty>{noText}</Empty>

  const footer = notifications.some(item => item.isUnread) && (
    <Footer onClick={onMarkAllAsRead}>Mark all as read</Footer>
  )
  const notificationPanels = notifications.map(item => (
    <NotificationItem key={item.id} {...item} onClick={onItemClick} onMarkAsRead={onMarkItemAsRead} />
  ))

  return (
    <Holder className={className}>
      {
        notifications.length > 0
          ? (
            <ItemsList>
              {notificationPanels}
            </ItemsList>
          )
          : noNotifications
      }

      {footer}
    </Holder>
  )
}

NotificationsPanel.propTypes = {
  className: PropTypes.string,
  notifications: PropTypes.array,
  onMarkAllAsRead: PropTypes.func,
  onMarkItemAsRead: PropTypes.func,
  onItemClick: PropTypes.func,
  isLoading: PropTypes.bool,
}

export default NotificationsPanel
