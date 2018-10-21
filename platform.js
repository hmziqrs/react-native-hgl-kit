import { Platform } from 'react-native';
import DeviceInfo from 'react-native-device-info';

export const isIOS = Platform.OS === 'ios';
export const isAndroid = !isIOS;
export const isIPad = Platform.OS === 'ios' && DeviceInfo.isTablet();
export const isTablet = DeviceInfo.isTablet();
