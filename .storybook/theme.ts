import { create } from '@storybook/theming/create';

export default create({
  base: 'dark',

  fontBase: '"Open Sans", sans-serif',
  fontCode: 'monospace',

  brandTitle: 'Thallisto',
  brandUrl: 'https://example.com',
  brandImage: 'https://storybook.js.org/images/placeholders/350x150.png',
  brandTarget: '_self',

  colorPrimary: '#dd7826',
  colorSecondary: '#2b65d1',

  appBg: '#3d3d3d',
  appContentBg: '#a15858',
  appPreviewBg: '#5c5c5c',
  appBorderColor: '#dd7826',
  appBorderRadius: 4,

  textColor: '#ffffff',
  textInverseColor: '#424242',

  barTextColor: '#ffffff',
  barSelectedColor: '#585C6D',
  barHoverColor: '#585C6D',
  barBg: '#363636',

  inputBg: '#ffffff',
  inputBorder: '#10162F',
  inputTextColor: '#10162F',
  inputBorderRadius: 2,
});
