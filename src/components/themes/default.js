import { reversePalette } from 'styled-theme/composer'

const theme = {}

theme.palette = {
  main: ['#e3212e', '#a4111d', '#ff968a', '#ffe4e3'],
  text: ['#333333'],
  grey: ['#ffffff', '#f1f1f1', '#dedede', '#c1c1c1', '#ababab'],
  gold: ['#ffb002', '#ffdf00'],
  buttonGradient: ['#f25270', '#db2233', '#a4111d'],
}

theme.reversePalette = reversePalette(theme.palette)

theme.fonts = {
  main: 'Helvetica Neue, Helvetica, Roboto, sans-serif',
  pre: 'Consolas, Liberation Mono, Menlo, Courier, monospace',
  quote: 'Georgia, serif',
}

theme.sizes = {
  menuItems: '20px',
  menuItemsProfile: '13px',

  textRegular: '14px',
  textTitle: '16px',
  textTitleLarge: '18px',
  textSubtitle: '13px',
  textParagraph: '12px',
  prizeTitle: '24px',
  // for media-queries
  mobileMediaQuery: '@media all and (max-width: 568px)',
  smallLaptopMediaQuery: '@media all and (max-height: 910px)',
}

export default theme
