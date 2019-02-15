import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { palette, size } from 'styled-theme'

import DashboardPanel from '../../molecules/DashboardPanel'
import WinnersWheel from '../../molecules/WinnersWheel'
import Dropdown from '../../atoms/Dropdown'
import Dot from '../../atoms/Dot'
import AvatarCircular from '../../atoms/AvatarCircular'
import SimplePanelFooter from '../../atoms/SimplePanelFooter'

import DashboardAllWinnersPanel from '../../organisms/DashboardAllWinnersPanel'
import DashboardUserContainer from '../../../containers/DashboardUserContainer'

import { panelSlideUp } from '../../themes/keyframes'

const WheelHolder = styled.div`
  position: relative;
  text-align: center;
  padding-top: 10px;
`

const WinnersWheelRestyled = styled(WinnersWheel)`
  display: inline-block;
  margin-top: 30px;
`

const LeftDropDown = styled(Dropdown)`
  position: absolute;
  top: 10px;
  left: 0;
`

const RightDropDown = styled(Dropdown)`
  position: absolute;
  top: 10px;
  right: 0;
`

const StatsHolder = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: space-between;
  margin: 30px 0;
`

const StatsItem = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  align-items: center;
  width: 80px;
`

const StatsAmount = styled.div`
  color: ${palette('text', 0)};
  font-size: 20px;
  font-weight: 700;
  margin: 5px 0 10px;
`

const StatsTitle = styled.div`
  color: ${palette('text', 0)};
  font-size: ${size('textSubtitle')};
`

const WinnerAvatar = styled(AvatarCircular)`
  border: 2px solid transparent;
  cursor: pointer;
  margin: 2px;
  
  &:hover {
    border: 2px solid ${palette('main', 0)};
  }
`

const WinnnerAvatarsHolder = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: flex-start;
  align-items: flex-start;
`

const InsideDashboardUserContainer = styled(DashboardUserContainer)`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow-y: auto;
  
  animation: ${panelSlideUp} 0.3s ease forwards 1;
`

const InsideDashboardAllWinnersPanel = styled(DashboardAllWinnersPanel)`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow-y: auto;
  
  animation: ${panelSlideUp} 0.3s ease forwards 1;
`

const WinnersPanel = ({
                        timeFilters, onTimeFilterChange, selectedTimeFilter,
                        rankFilters, onRankFilterChange, selectedRankFilter,
                        winnersWheelTitle, usersAmount,
                        friendsWinnersPercent, connectionsWinnersPercent,
                        friendsWinnersAmount, connectionsWinnersAmount, allWinnersAmount,
                        winners, onWinnerClick, selectedWinnerId, onWinnerPanelClose,
                        onShowAllWinners, onHideAllWinners, allWinnersShown,
                      }) => {
  const winnerItems = winners.map((winner) => {
    const onClick = () => onWinnerClick(winner.id)
    return <WinnerAvatar key={winner.id} forActivity image={winner.image} onClick={onClick} />
  })
  const footer = <SimplePanelFooter onClick={onShowAllWinners}>Show all winners</SimplePanelFooter>
  return (
    <DashboardPanel title={'Winners'} footer={footer}>
      <WheelHolder>
        <LeftDropDown
          items={timeFilters}
          onChange={onTimeFilterChange}
          selectedItem={selectedTimeFilter}
        />
        <WinnersWheelRestyled
          title={winnersWheelTitle}
          amount={usersAmount}
          primaryPercent={friendsWinnersPercent}
          secondaryPercent={connectionsWinnersPercent}
        />
        <RightDropDown
          items={rankFilters}
          onChange={onRankFilterChange}
          selectedItem={selectedRankFilter}
        />
      </WheelHolder>
      <StatsHolder>
        <StatsItem>
          <Dot color={'friends'} />
          <StatsAmount>{friendsWinnersAmount}</StatsAmount>
          <StatsTitle>Friends</StatsTitle>
        </StatsItem>
        <StatsItem>
          <Dot color={'connections'} />
          <StatsAmount>{connectionsWinnersAmount}</StatsAmount>
          <StatsTitle>Connections</StatsTitle>
        </StatsItem>
        <StatsItem>
          <Dot />
          <StatsAmount>{allWinnersAmount}</StatsAmount>
          <StatsTitle>All</StatsTitle>
        </StatsItem>
      </StatsHolder>
      <WinnnerAvatarsHolder>
        {winnerItems}
      </WinnnerAvatarsHolder>

      {allWinnersShown && (
        <InsideDashboardAllWinnersPanel
          onClose={onHideAllWinners}
          winners={winnerItems}
        />
      )}

      {selectedWinnerId && (
        <InsideDashboardUserContainer
          selectedUserId={selectedWinnerId}
          onPanelClose={onWinnerPanelClose}
        />
      )}

    </DashboardPanel>
  )
}

WinnersPanel.propTypes = {
  timeFilters: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string,
    value: PropTypes.string.isRequired,
  })).isRequired,
  onTimeFilterChange: PropTypes.func.isRequired,
  selectedTimeFilter: PropTypes.string.isRequired,

  rankFilters: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string,
    value: PropTypes.string.isRequired,
  })).isRequired,
  onRankFilterChange: PropTypes.func.isRequired,
  selectedRankFilter: PropTypes.string.isRequired,

  winnersWheelTitle: PropTypes.string.isRequired,
  usersAmount: PropTypes.number.isRequired,

  friendsWinnersPercent: PropTypes.number.isRequired,
  connectionsWinnersPercent: PropTypes.number.isRequired,

  friendsWinnersAmount: PropTypes.number.isRequired,
  connectionsWinnersAmount: PropTypes.number.isRequired,
  allWinnersAmount: PropTypes.number.isRequired,

  winners: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
  })),
  onWinnerClick: PropTypes.func.isRequired,
  onWinnerPanelClose: PropTypes.func.isRequired,
  selectedWinnerId: PropTypes.string,

  onShowAllWinners: PropTypes.func.isRequired,
  onHideAllWinners: PropTypes.func.isRequired,
  allWinnersShown: PropTypes.bool,
}

export default WinnersPanel
