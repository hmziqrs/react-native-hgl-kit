import { PixelRatio, Keyboard } from 'react-native';
import DeviceInfo from 'react-native-device-info';

import { isTablet, isDebug } from './platform';
import dimensions from './dimensions';

let log = false;

export function scaling(unit) {
  let ratio = dimensions.width / dimensions.height;
  const pixelDensity = PixelRatio.get();
  ratio = ratio + (pixelDensity + ratio) / 2;
  ratio = pixelDensity + ratio;

  if (!log) {
    log = true;
    console.log(
      `ratio: ${pixelDensity}, ${DeviceInfo.getDeviceNameSync()}  ${ratio}\nwidth: ${
        dimensions.width
      } check:${dimensions.width < 420 && pixelDensity > 2}\n\n`
    );
  }

  if (dimensions.width < 420 && pixelDensity > 2) {
    ratio *= 0.85;

    if (ratio >= 4) {
      ratio = 4;
    }
  }

  return ratio * unit;
}
// export function scaling(percent) {
//   const height = DeviceInfo.isLandscape()
//     ? dimensions.width
//     : dimensions.height;
//   const deviceHeight = isIphoneX()
//     ? height * 0.9
//     : Platform.OS === 'android'
//     ? height - dimensions.statusBarHeight
//     : height;

//   const heightPercent = (percent * deviceHeight) / 100;
//   const per = Math.round(heightPercent);

//   let unit = per;

//   const max = 1;
//   const min = 0.4;

//   if (unit > max) {
//     unit = max;
//   }

//   return per * unit;
// }

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
