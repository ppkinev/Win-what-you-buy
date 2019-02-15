import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { font, size, palette } from 'styled-theme'

import { DashboardPanel, FilterHorizontalList } from 'components'
import ActivityItem from './ActivityItem'

import DashboardUserContainer from '../../../containers/DashboardUserContainer'
import { panelSlideUp } from '../../themes/keyframes'

const Footer = styled.div`
  font-family: ${font('main')};
  color: ${palette('text', 0)};
  font-size: ${size('textRegular')};
  text-align: center;
  cursor: pointer;
`

const ItemsHolder = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  padding-top: 20px;
`

const InsideDashboardUserContainer = styled(DashboardUserContainer)`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow-y: auto;
  
  animation: ${panelSlideUp} 0.3s ease forwards 1;
  
  z-index: 10;
`

const ActivitiesPanel = ({
                           filters, activeFilterID, onFilterClick,
                           onShowMoreClick,
                           onUserClick, selectedUserId, onUserPanelClose,
                           activities, userSelfImage, userSelfId,
                         }) => {
  const footer = (
    <Footer onClick={onShowMoreClick}>Show more activities</Footer>
  )
  const activityItems = activities.map(act => (
    <ActivityItem
      key={act.id}
      onUserClick={onUserClick}
      userSelfImage={userSelfImage}
      userSelfId={userSelfId}
      activity={act}
    />
  ))
  return (
    <DashboardPanel title={'Activities'} footer={footer}>
      <FilterHorizontalList items={filters} onItemClick={onFilterClick} activeItemID={activeFilterID} />
      <ItemsHolder>{activityItems}</ItemsHolder>

      {selectedUserId && (
        <InsideDashboardUserContainer
          selectedUserId={selectedUserId}
          onPanelClose={onUserPanelClose}
        />
      )}
    </DashboardPanel>
  )
}

ActivitiesPanel.propTypes = {
  filters: PropTypes.arrayOf(PropTypes.shape(
    {
      id: PropTypes.string,
      value: PropTypes.string,
    },
  )).isRequired,
  activeFilterID: PropTypes.string.isRequired,
  onFilterClick: PropTypes.func.isRequired,
  onShowMoreClick: PropTypes.func.isRequired,

  selectedUserId: PropTypes.string.isRequired,
  onUserClick: PropTypes.func.isRequired,
  onUserPanelClose: PropTypes.func.isRequired,

  activities: PropTypes.array,

  userSelfImage: PropTypes.string,
  userSelfId: PropTypes.string,
}

export default ActivitiesPanel
