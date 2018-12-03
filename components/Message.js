/**
 *
 * Message
 *
 */

import React from 'react';
import { Text, Animated } from 'react-native';
import PropTypes from 'prop-types';

import { injectIntl, intlShape } from 'react-intl'; //eslint-disable-line

function Message({ intl, id, defaultMessage, values, animated, ...props }) {
  let Comp = Text;
  if (animated) {
    Comp = Animated.Text;
  }
  return (
    <Comp {...props}>{intl.formatMessage({ id, defaultMessage }, values)}</Comp>
  );
}

Message.propTypes = {
  intl: intlShape.isRequired,
  id: PropTypes.string.isRequired,
  defaultMessage: PropTypes.string.isRequired,
  values: PropTypes.object,
  animated: PropTypes.bool,
};

Message.defaultProps = {
  values: {},
  animated: false,
};

export default injectIntl(Message);
