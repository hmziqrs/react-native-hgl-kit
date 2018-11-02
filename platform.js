import { Platform } from 'react-native';
import DeviceInfo from 'react-native-device-info';

export const isAndroid = !isIOS;
export const isIOS = Platform.OS === 'ios';
export const isTablet = DeviceInfo.isTablet();
export const isIPad = Platform.OS === 'ios' && DeviceInfo.isTablet();
