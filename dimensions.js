import { Dimensions } from 'react-native';
import { getStatusBarHeight } from 'react-native-status-bar-height';
import DeviceInfo from 'react-native-device-info';

export const { width, height } = Dimensions.get('window');
const statusBarHeight = getStatusBarHeight();

const obj = {
  width,
  height,
  statusBarHeight,
  availHeight: height - statusBarHeight,
  getWidth: () => Dimensions.get('window').width,
  getHeight: () => Dimensions.get('window').height,
  getAvailHeight: () => Dimensions.get('window').height - getStatusBarHeight(),
};

export function getOrientation() {
  if (DeviceInfo.isLandscape()) {
    return 'landscape';
  }
  return 'potrait';
}

export default obj;
