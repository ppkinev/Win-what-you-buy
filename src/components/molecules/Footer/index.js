import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { palette, font, size } from 'styled-theme'
import { Link } from 'react-router-dom'
import Logo from '../../atoms/Logo'
import ContainerLimited from '../../atoms/ContainerLimited'

const Holder = styled.div`
  width: 100%;
  background-color: ${palette('main', 0)};
`

const FlexHolder = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-end;
  justify-content: space-between;
  width: 100%;
  
  padding: 30px 0 50px;
  box-sizing: border-box;
  
  position: relative;
  z-index: 50;
  
  ${size('mobileMediaQuery')} {
    flex-direction: column;
    align-items: center;
  }
`

const LinksHolder = styled.div`
  display: inline-flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  
  & > * {
    margin-left: 20px;
  }
  
  ${size('mobileMediaQuery')} {
    margin-top: 20px;
    & > * {
      margin: 0 10px;
    }
  }
`

const StyledLink = styled(Link)`
  font-family: ${font('main')};
  color: ${palette('grey', 0)};
  font-size: ${size('textRegular')};
  font-weight: 400;
  text-decoration: none;
  
  &:hover {
    text-decoration: underline;
  }
`

const Footer = () => {
  return (
    <Holder>
      <ContainerLimited>
        <FlexHolder>
          <Logo white />
          <LinksHolder>
            <StyledLink to={'./terms'}>Terms</StyledLink>
            <StyledLink to={'./privacy'}>Privacy</StyledLink>
            <StyledLink to={'./faq'}>FAQ</StyledLink>
          </LinksHolder>
        </FlexHolder>
      </ContainerLimited>
    </Holder>
  )
}

export default Footer
