import { Platform } from 'react-native';

export default function Elevation(level = 1, os = null) {
  if (os && Platform.OS !== os) {
    return {};
  }
  if (Platform.OS === 'android' && Platform.Version >= 21) {
    return {
      elevation: Math.ceil(level),
      overflow: 'hidden',
    };
  }
  if (Platform.OS === 'ios') {
    return {
      shadowColor: '#000000',
      shadowOpacity: level * 0.09,
      shadowRadius: level * 1.2,
      shadowOffset: {
        width: 0,
        height: level * 1.5,
      },
      overflow: 'visible',
    };
  }
}
