import React from 'react';
import { TouchableWithoutFeedback, Keyboard } from 'react-native';
import PropTypes from 'prop-types';

function KeyboardView({ children, onDismiss, ...props }) {
  return (
    <TouchableWithoutFeedback
      {...props}
      onPress={() => {
        Keyboard.dismiss();
        onDismiss();
      }}
    >
      {children}
    </TouchableWithoutFeedback>
  );
}

KeyboardView.propTypes = {
  children: PropTypes.any.isRequired,
  onDismiss: PropTypes.func,
};

KeyboardView.defaultProps = {
  onDismiss: () => {},
};

export default KeyboardView;
