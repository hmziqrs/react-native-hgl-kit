import { Dimensions } from 'react-native';
import { getStatusBarHeight } from 'react-native-status-bar-height';

export const { width, height } = Dimensions.get('window');
const statusBarHeight = getStatusBarHeight();

const obj = {
  width,
  height,
  statusBarHeight,
  availableHeight: height - statusBarHeight,
  getWidth: () => Dimensions.get('window').width,
  getHeight: () => Dimensions.get('window').height,
  getAvailHeight: () => Dimensions.get('window').height - getStatusBarHeight(),
};

export function getOrientation() {
  if (obj.getWidth() > obj.getHeight()) {
    return 'landscape';
  }
  return 'potrait';
}

export default obj;
