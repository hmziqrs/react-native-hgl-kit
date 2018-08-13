import { Dimensions } from 'react-native';
import { getStatusBarHeight } from 'react-native-status-bar-height';

export const { width, height } = Dimensions.get('window');
const statusBarHeight = getStatusBarHeight();

const obj = {
  width,
  height,
  statusBarHeight,
  availableHeight: height - statusBarHeight,
};

export default obj;
