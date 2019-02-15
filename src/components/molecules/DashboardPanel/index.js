import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { size, palette, font } from 'styled-theme'

const Holder = styled.div`
  width: 100%;
  height: 100%;
  background-color: ${palette('grey', 0)};
  border-radius: 2px;
  box-shadow: 1px 1px 3px rgba(0,0,0,0.2);
  
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  
  text-align: left;
  
  padding: 0 20px;
  box-sizing: border-box;
  
  position: relative;
  overflow: hidden;
`

const Title = styled.h3`
  font-family: ${font('main')};
  font-size: ${size('textTitle')};
  color: ${palette('text', 0)};
  margin: 0;
  padding: 0 10px;
  box-sizing: border-box;
  
  height: 60px;
  line-height: 60px;
  width: 100%;
  
  border-bottom: 1px solid ${palette('grey', 2)};
  
  flex-shrink: 0;
  
  font-weight: 400;
`

const Body = styled.div`
  flex-grow: 1;
  width: 100%;
  height: 100%;
`

const Footer = styled.div`
  flex-shrink: 0;
  height: 80px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 100%;
`

const DashboardPanel = ({ className, title, children, footer }) => {
  return (
    <Holder className={className}>
      <Title>{title}</Title>
      <Body>{children}</Body>
      <Footer>{footer}</Footer>
    </Holder>
  )
}

DashboardPanel.propTypes = {
  className: PropTypes.string,
  title: PropTypes.string,
  children: PropTypes.node,
  footer: PropTypes.node,
}

export default DashboardPanel
