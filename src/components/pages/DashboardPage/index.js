import React from 'react'
import PropTypes from 'prop-types'
import styled, { css } from 'styled-components'
import { palette, font, size } from 'styled-theme'

import PageTemplate from '../../templates/PageTemplate'
import ContainerLimited from '../../atoms/ContainerLimited'
import DashboardActivitiesContainer from '../../../containers/DashboardActivitiesContainer'
import DashboardWinnersContainer from '../../../containers/DashboardWinnersContainer'
import DashboardDrawsContainer from '../../../containers/DashboardDrawsContainer'
import DashboardActionsContainer from '../../../containers/DashboardActionsContainer'

const PageWrapper = styled.div`
  background-color: ${palette('main', 0)};
  padding-top: 50px;
  
  ${size('mobileMediaQuery')} {
    padding-top: 0;
  }
`

const Row = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  max-height: 70vh;
  
  &:not(:first-child) {
    margin-top: 10px;
  }
  
  & > *:not(:first-child) {
    margin-left: 10px;
  }
  
  ${size('mobileMediaQuery')} {
    flex-direction: column;
    max-height: none;
    
    & > *:not(:first-child) {
      margin-left: 0;
    }
    
    & > * {
      margin-top: 10px;
      margin-left: 0;  
    }
  }
  
  ${size('smallLaptopMediaQuery')} {
    max-height: none;
  }
`

const getColOrderCSS = order => `order: ${order};`
const OneThirdCol = styled.div`
  flex-grow: 1;
  width: 100%;
  
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  
  & > *:not(:first-child) {
    margin-top: 10px;
  }
  
  ${size('mobileMediaQuery')} {
    ${props => props.mobileOrder && getColOrderCSS(props.mobileOrder)};
  }
`
OneThirdCol.propTypes = {
  mobileOrder: PropTypes.number,
}

const FullHeightCol = styled.div`
  height: 100%;
  position: relative;
`

const HalfHeightCol = styled.div`
  height: 100%;
`

const DashboardPage = () => {
  return (
    <PageTemplate>
      <PageWrapper>
        <ContainerLimited>
          <Row>
            <OneThirdCol mobileorder={0}>
              <FullHeightCol>
                <DashboardActivitiesContainer />
              </FullHeightCol>
            </OneThirdCol>
            <OneThirdCol mobileOrder={-1}>
              <FullHeightCol>
                <DashboardWinnersContainer />
              </FullHeightCol>
            </OneThirdCol>
            <OneThirdCol>
              <HalfHeightCol>
                <DashboardDrawsContainer />
              </HalfHeightCol>
              <HalfHeightCol>
                <DashboardActionsContainer />
              </HalfHeightCol>
            </OneThirdCol>
          </Row>
        </ContainerLimited>
      </PageWrapper>
    </PageTemplate>
  )
}

export default DashboardPage
