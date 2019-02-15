import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import DashboardPanel from '../../molecules/DashboardPanel'
import SimplePanelFooter from '../../atoms/SimplePanelFooter'

const WinnnerAvatarsHolder = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: flex-start;
  align-items: flex-start;
`

const DashboardAllWinnersPanel = ({ className, winners, onClose }) => {
  const footer = <SimplePanelFooter onClick={onClose}>Close</SimplePanelFooter>

  return (
    <DashboardPanel className={className} title={'All winners'} footer={footer}>
      <WinnnerAvatarsHolder>{winners}</WinnnerAvatarsHolder>
    </DashboardPanel>
  )
}

DashboardAllWinnersPanel.propTypes = {
  className: PropTypes.string,
  winners: PropTypes.array,
  onClose: PropTypes.func.isRequired,
}

export default DashboardAllWinnersPanel
