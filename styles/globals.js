import { StyleSheet } from 'react-native';

import styles from './index';

const style = StyleSheet.create({
  flex: styles({
    flex: true,
  }),
  absolute0: {
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    position: 'absolute',
  },
});

export default style;
