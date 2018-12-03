import React, { Fragment, Component } from 'react';
import { View, Text } from 'react-native';
import PropTypes from 'prop-types';
import { TouchNative } from 'rn-hgl/components';

import { hideKeyboard } from '../../utils';

import Modal from '../Modal';

import styles from './styles';

class PickerAndroid extends Component {
  state = {
    active: false,
  };

  onToggle = (callback = () => {}) =>
    this.setState(state => ({ active: !state.active }), callback);

  render() {
    const { value, items, onChange } = this.props;
    const { active } = this.state;
    return (
      <Fragment>
        <TouchNative
          noFeedback
          onPress={() => hideKeyboard(() => this.onToggle())}
        >
          <View style={styles.base}>
            <Text style={[styles.text, value ? styles.fontNormal : {}]}>
              {value || 'Ministry Role'}
            </Text>
          </View>
        </TouchNative>
        <Modal active={active} style={{}}>
          <TouchNative
            noFeedback
            style={styles.safetyLayer}
            onPress={() => this.onToggle()}
          >
            <View style={styles.safetyLayer}>
              <View style={styles.modalContent}>
                {items.map(({ key }) => (
                  <TouchNative
                    key={key}
                    style={styles.item}
                    onPress={() =>
                      hideKeyboard(() => this.onToggle(() => onChange(key)))
                    }
                  >
                    <Text style={styles.itemText}>{key}</Text>
                  </TouchNative>
                ))}
              </View>
            </View>
          </TouchNative>
        </Modal>
      </Fragment>
    );
  }
}

PickerAndroid.propTypes = {
  onChange: PropTypes.func.isRequired,
  items: PropTypes.array.isRequired,
  value: PropTypes.string,
};

PickerAndroid.defaultProps = {
  value: null,
};

export default PickerAndroid;
