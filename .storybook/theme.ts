import { create } from '@storybook/theming/create';
import resolve from 'tailwindcss/resolveConfig';
import config from '../tailwind.config';
import logo from './assets/logo-grayscale.png';

const { theme } = resolve(config);
const { colors } = theme;

export default create({
  base: 'dark',

  brandTitle: 'Thallisto',
  brandImage: logo,

  colorPrimary: colors.orange['500'],
  colorSecondary: colors.blue['500'],

  appBg: colors.black,
  appContentBg: colors.gray['950'],
  appPreviewBg: colors.gray['900'],
  appBorderColor: colors.gray['600'],
  appBorderRadius: 4,

  textColor: colors.gray['100'],
  textInverseColor: colors.gray['950'],
  textMutedColor: colors.gray['400'],

  barBg: colors.gray['950'],
  barTextColor: colors.gray['100'],

  inputBg: colors.gray['900'],
  inputBorder: colors.gray['600'],
  inputTextColor: colors.gray['100'],
  inputBorderRadius: 4,
});
