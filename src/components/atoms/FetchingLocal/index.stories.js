import React from 'react'
import { storiesOf } from '@storybook/react'
import FetchingLocal from '.'

storiesOf('Fetching Local', module)
  .add('default', () => (<FetchingLocal />))
