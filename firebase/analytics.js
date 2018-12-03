import firebase from 'react-native-firebase';
import isObject from 'lodash/isObject';
import isArray from 'lodash/isArray';

const analytics = firebase.analytics();

export function initAnalytics() {
  analytics.setAnalyticsCollectionEnabled(true);
}

export function setUserProperties(params) {
  // eslint-disable-next-line
  for (const key in params) {
    const val = params[key];
    if (
      (!isArray(val) || !isObject(val)) &&
      val !== null &&
      val !== undefined &&
      val !== ''
    ) {
      analytics.setUserProperty(key, `${params[key].toString()}`);
    }
  }
}

export function setUserId(id) {
  analytics.setUserId(id);
}

export function setScreen(screen, app = 'App') {
  analytics.setCurrentScreen(screen, app);
}

export function log(event, params) {
  analytics.logEvent(event, params);
}

export default { initAnalytics, setUserProperties, setUserId, setScreen, log };
