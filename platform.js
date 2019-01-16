import { Platform } from 'react-native';
import DeviceInfo from 'react-native-device-info';

export const isIOS = Platform.OS === 'ios';
export const isTablet = DeviceInfo.isTablet();
export const isAndroid = Platform.OS === 'android';
export const isIPad = Platform.OS === 'ios' && DeviceInfo.isTablet();
export const isDebug = __DEV__;
