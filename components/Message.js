import React from 'react';
import { Text, Animated } from 'react-native';
import PropTypes from 'prop-types';

import { useIntl } from 'react-intl'; //eslint-disable-line

function Message({ id, defaultMessage, values, animated, ...props }) {
  const intl = useIntl();

  let Comp = Text;
  if (animated) {
    Comp = Animated.Text;
  }
  return (
    <Comp {...props}>{intl.formatMessage({ id, defaultMessage }, values)}</Comp>
  );
}

Message.propTypes = {
  defaultMessage: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  values: PropTypes.object,
  animated: PropTypes.bool,
};

Message.defaultProps = {
  animated: false,
  values: {},
};

export default Message;
