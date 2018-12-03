import { StyleSheet } from 'react-native';
import dimensions from '../../dimensions';
import { scaling } from '../../utils';

import colors from '../../colors';

const styles = StyleSheet.create({
  base: {
    borderRadius: 4,
    marginBottom: scaling(2),
    paddingVertical: scaling(1.5),
    paddingHorizontal: scaling(2.4),
    backgroundColor: colors.borderColor.string(),
  },
  text: {
    fontStyle: 'italic',
    fontSize: scaling(2.8),
    color: colors.white.string(),
  },
  fontNormal: {
    fontStyle: 'normal',
    color: colors.dark.string(),
  },
  safetyLayer: {
    alignItems: 'center',
    justifyContent: 'center',
    ...StyleSheet.absoluteFillObject,
    backgroundColor: colors.black.alpha(0.3),
  },
  modalContent: {
    maxWidth: 600,
    borderRadius: 4,
    paddingVertical: 8,
    backgroundColor: colors.white.string(),
    width: dimensions.width * 0.75,
  },
  item: {
    paddingVertical: scaling(1.5),
    paddingHorizontal: 16,
  },
  itemText: {
    color: colors.black.string(),
    fontSize: scaling(2.4, { tab: 0.9 }),
  },
});

export default styles;
