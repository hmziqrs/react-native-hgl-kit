import React from 'react';
import PropTypes from 'prop-types';
import {
  View,
  Platform,
  TouchableOpacity,
  TouchableNativeFeedback,
  TouchableWithoutFeedback,
} from 'react-native';

import colors from '../colors';

function TouchFeedback({
  style,
  noTouch,
  noChild,
  noNative,
  children,
  noFeedback,
  rippleColor,
  rippleEffect,
  ...props
}) {
  if (noTouch) {
    return (
      <View style={style} {...props}>
        {children}
      </View>
    );
  } else if (noFeedback) {
    return (
      <TouchableWithoutFeedback {...props}>
        <View style={style}>{children}</View>
      </TouchableWithoutFeedback>
    );
  } else if (Platform.OS === 'android' && Platform.Version >= 21 && !noNative) {
    return (
      <TouchableNativeFeedback
        background={TouchableNativeFeedback.Ripple(rippleColor, rippleEffect)}
        {...props}
      >
        {noChild ? (
          children
        ) : (
          <View pointerEvents="box-only" style={style}>
            {children}
          </View>
        )}
      </TouchableNativeFeedback>
    );
  }
  return (
    <TouchableOpacity style={style} {...props}>
      {children}
    </TouchableOpacity>
  );
}

TouchFeedback.propTypes = {
  children: PropTypes.any.isRequired,
  rippleColor: PropTypes.string,
  rippleEffect: PropTypes.bool,
  noFeedback: PropTypes.bool,
  noNative: PropTypes.bool,
  noChild: PropTypes.bool,
  noTouch: PropTypes.bool,
  style: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.object,
    PropTypes.array,
  ]),
};

TouchFeedback.defaultProps = {
  rippleColor: colors.dark.alpha(0.3).string(),
  rippleEffect: false,
  noFeedback: false,
  noNative: false,
  noChild: false,
  noTouch: false,
  style: {},
};

export default TouchFeedback;
