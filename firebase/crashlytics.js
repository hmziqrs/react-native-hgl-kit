import firebase from 'react-native-firebase';
import isString from 'lodash/isString';
import isBoolean from 'lodash/isBoolean';

import { isInteger, isFloat } from '../utils';

export const crashlytics = firebase.crashlytics();

function setParams(obj) {
  const objLen = Object.keys(obj);
  if (objLen && objLen.length) {
    // eslint-disable-next-line
    for (let key in obj) {
      const val = obj[key];
      if (isString(val)) {
        crashlytics.setStringValue(key, val);
      } else if (isInteger(val)) {
        crashlytics.setIntValue(key, val);
      } else if (isFloat(val)) {
        crashlytics.setFloatValue(key, val);
      } else if (isBoolean(val)) {
        crashlytics.setBoolValue(key, val);
      }
    }
  }
}

export function initCrash() {}

export function report(e) {
  setParams(e);
  crashlytics.log(e.message || 'Error');
  crashlytics.recordError(e.code || 1, e.message || 'Error');
}

export default crashlytics;
