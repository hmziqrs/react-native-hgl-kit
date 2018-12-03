import { Platform, PixelRatio, Keyboard } from 'react-native';
import { isIphoneX } from 'react-native-iphone-x-helper';

import dimensions from './dimensions';
import { isTablet, isDebug } from './platform';

export function scaling(percent, ratio = { tab: 0.8, mobile: 1 }) {
  const deviceHeight = isIphoneX()
    ? dimensions.height * 0.9
    : Platform.OS === 'android'
    ? dimensions.height - dimensions.statusBarHeight
    : dimensions.height;

  const heightPercent = (percent * deviceHeight) / 100;
  const per = Math.round(heightPercent);

  // return per;
  return per * (isTablet ? ratio.tab || 0.8 : ratio.mobile || 1);
}

export function debugLog(...p) {
  if (isDebug) {
    console.log(...p);
  }
}

export function hideKeyboard(callback = () => {}) {
  Keyboard.dismiss();
  return callback();
}

export function getActiveRouteName(navigationState) {
  if (!navigationState) {
    return null;
  }
  const route = navigationState.routes[navigationState.index];
  // dive into nested navigators
  if (route.routes) {
    return getActiveRouteName(route);
  }
  return route.routeName;
}

export function sleep(data = null, duration = 1000) {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve(data);
    }, duration);
  });
}

export function ratio(n) {
  return n + PixelRatio.get() * 0.1 * n;
}
