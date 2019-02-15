import React from 'react'
import { storiesOf } from '@storybook/react'
import SideMenu from '.'
import { imagesPath } from '../../../config'

const onMenuItemClick = (item) => {
  window.console.info('clicked', item)
}

const onMenuClose = () => {
  window.console.info('Menu closed')
}

const authorizedUser = {
  name: 'Peter Parker',
  image: `${imagesPath}/face_temp.jpg`,
  points: 32,
  credits: 74,
}

const menuItems = [
  { name: 'Dashboard', link: '/' },
  { name: 'Shop', link: 'shop' },
  { name: 'Play', link: 'play' },
  { name: 'Earn', link: 'earn' },
  { name: 'Draws', link: 'draws' },
  { name: 'Activities', link: 'activities' },
  { name: 'Collect', link: 'collect' },
]

storiesOf('Side Menu', module)
  .add('default', () => (
    <SideMenu
      onMenuItemClick={onMenuItemClick}
      menuItems={menuItems}
      user={authorizedUser}
      onMenuClose={onMenuClose}
    />
  ))
