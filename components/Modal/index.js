import React, { Component } from 'react';
import { Animated } from 'react-native';
import PropTypes from 'prop-types';
import isFunction from 'lodash/isFunction';

import style from './style';

class Modal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      view: props.active || false,
    };
    this.animation = new Animated.Value(0);
    this.toValue = 1;
    if (props.active) {
      this.runAnimation();
    }
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.active === this.props.active) {
      return;
    }
    if (nextProps.active) {
      this.setState({ view: true }, () => {
        this.toValue = 1;
        this.runAnimation();
      });
    } else {
      this.toValue = 0;
      this.runAnimation(() => this.setState({ view: false }));
    }
  }

  runAnimation(callback = null) {
    Animated.timing(this.animation, {
      toValue: this.toValue,
      useNativeDriver: true,
      duration: this.props.duration,
    }).start(({ finished }) => {
      if (callback) {
        callback();
      }
      if (finished) {
        this.props.callback();
      }
    });
  }

  render() {
    if (!this.state.view) {
      return null;
    }
    const { children } = this.props;
    return (
      <Animated.View
        style={[style.container, this.props.style, { opacity: this.animation }]}
      >
        {isFunction(children) ? children(this.state.view) : children}
      </Animated.View>
    );
  }
}

Modal.propTypes = {
  style: PropTypes.any.isRequired,
  duration: PropTypes.number,
  callback: PropTypes.func,
  children: PropTypes.any,
  active: PropTypes.bool,
};

Modal.defaultProps = {
  callback: () => {},
  children: null,
  active: false,
  duration: 180,
};

export default Modal;
