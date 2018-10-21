import * as services from './services';
import { isIphoneX } from 'react-native-iphone-x-helper';

import dimensions from 'configs/dimensions';
import { isTablet } from 'configs/platform';

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

export default { services };
