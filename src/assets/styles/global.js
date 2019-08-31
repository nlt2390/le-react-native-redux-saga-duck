import { Platform, Dimensions } from 'react-native';

const deviceWidth = Dimensions.get('window').width;
const deviceHeight = Dimensions.get('window').height;

const isIOS = Platform.OS === 'ios';
const isIOSXMax = isIOS && deviceHeight > 895;
const minLength = Math.min(deviceWidth, deviceHeight);

let deviceScale = 1;

if (minLength >= 768) deviceScale = 1.2;
else if (minLength >= 400 && isIOS) deviceScale = 1.1;
else if (minLength <= 320 && isIOS) deviceScale = 0.8;

export const getSize = (size) => size * deviceScale;

export const COLOR = {
  transparent: 'rgba(0,0,0,0)',
  white: 'rgba(255, 255, 255, 1)',
  whiteTranslucent: 'rgba(255, 255, 255, 0.96)',
  whiteTranslucent1: 'rgba(255, 255, 255, 0.7)',
  whiteTranslucent2: 'rgba(255, 255, 255, 0.93)',
  grey: 'rgba(151, 151, 151, 1)',
  grey1: 'rgba(103, 110, 112, 1)',
  grey2: 'rgba(153, 153, 153, 1)',
  grey3: 'rgba(83, 82, 82, 1)',
  grey4: 'rgba(93, 93, 93, 1)',
  grey2Translucent: 'rgba(153, 153, 153, 0.3)',
  green: 'rgba(105, 190, 40, 1)',
  green2: 'rgba(0, 165, 70, 1)',
  green3: 'rgba(65, 117, 5, 1)',
  blue1: 'rgba( 0, 117, 176, 1)',
  blue2: 'rgba(0, 92, 132, 1)',
  blue3: 'rgba(1, 110, 166, 1)',
  blueTranslucent: 'rgba(0, 92, 132, 0.8)',
  blueTranslucent2: 'rgba(0, 92, 132, 0.9)',
  cyan: 'rgba(87, 195, 201, 1)',
  cyan1: 'rgba(171, 225, 228, 1)',
  cyan2: 'rgba(212, 239, 241, 1)',
  red: 'rgba(208, 2, 27, 1)',
  blackTranslucent1: 'rgba(0, 0, 0, 0.7)',
  black: 'rgba(0, 0, 0, 1)',
  yellow: 'rgba(251, 254, 223, 1)',
  buttonDisabled: 'rgba(230, 230, 230, 1)',
  buttonDisabledText: 'rgba(153, 153, 153, 1)',
  textPlaceholder: 'rgba(185,	188,	196, 1)',
};

export const HEIGHT_INPUT = getSize(48);

export const FONT = {
  sansRegular: 'SCSans-Regular',
  sansBold: 'SCSans-Bold',
  sansLight: 'SC Sans',
  scb: 'scb',
};

export const DEVICE = {
  width: deviceWidth,
  height: deviceHeight,
  isIOS,
  isIOSXMax,
};

export const CONTAINER_RESPONSIVE = {
  paddingHorizontal: deviceWidth < 500 ? 0 : ((deviceWidth - ((deviceWidth * 70) / 100)) / 2),
};
