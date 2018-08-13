import isNumber from 'lodash/isNumber';
import isString from 'lodash/isString';
import mapKeys from 'lodash/mapKeys';
import mapValues from 'lodash/mapValues';

import Dimensions from 'theme/Dimensions';

export function getStyledRadius(value, weight = Dimensions.radiusWeight) {
  const map = {
    top: 'borderTopLeftRadius',
    right: 'borderTopRightRadius',
    bottom: 'borderBottomRightRadius',
    left: 'borderBottomLeftRadius',
  };
  let radius = value;
  let prop = {};
  if (radius && isNumber(radius)) {
    prop = { borderRadius: value * weight };
  } else if (radius && isString(radius)) {
    radius = radius.split(' ');
    if (radius.length === 4) {
      if (radius[0] !== '_') {
        prop.borderTopLeftRadius = radius[0] * weight;
      }
      if (radius[1] !== '_') {
        prop.borderTopRightRadius = radius[1] * weight;
      }
      if (radius[2] !== '_') {
        prop.borderBottomRightRadius = radius[2] * weight;
      }
      if (radius[3] !== '_') {
        prop.borderBottomLeftRadius = radius[3] * weight;
      }
    } else if (radius.length === 2) {
      if (radius[0] !== '_') {
        prop.borderTopLeftRadius = radius[0] * weight;
        prop.borderBottomRightRadius = radius[0] * weight;
      }
      if (radius[1] !== '_') {
        prop.borderTopRightRadius = radius[1] * weight;
        prop.borderBottomLeftRadius = radius[1] * weight;
      }
    }
  } else if (radius && Object.keys(radius).length) {
    radius = mapKeys(radius, (_, key) => map[key]);
    prop = mapValues(radius, (v) => v * weight);
  }
  return prop;
}

export default getStyledRadius;
