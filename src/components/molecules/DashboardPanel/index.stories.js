import React from 'react'
import styled from 'styled-components'
import { storiesOf } from '@storybook/react'
import DashboardPanel from '.'

const SomeBody = styled.div``

const FooterElement = styled.div``

const Footer = () => {
  return (
    <FooterElement>
      This is footer
    </FooterElement>
  )
}

storiesOf('Dashboard Panel', module)
  .add('default', () => (
    <DashboardPanel
      style={{minHeight: '500px'}}
      title={'Some header'}
      footer={<Footer />}
    >
      <SomeBody>This is body!!!</SomeBody>
    </DashboardPanel>
  ))
