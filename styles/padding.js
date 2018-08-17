import isNumber from 'lodash/isNumber';
import isString from 'lodash/isString';
import mapKeys from 'lodash/mapKeys';
import mapValues from 'lodash/mapValues';
import upperFirst from 'lodash/upperFirst';
import Dimensions from 'Dimensions';

export function getStyledPadding(value, weight = 2) {
  let prop = {};
  let padding = value;
  if (padding && isNumber(padding)) {
    prop = { padding: weight * padding };
  } else if (padding && isString(padding)) {
    padding = padding.split(' ');
    if (padding.length === 4) {
      if (padding[0] !== '_') {
        prop.paddingTop = padding[0] * weight;
      }
      if (padding[1] !== '_') {
        prop.paddingRight = padding[1] * weight;
      }
      if (padding[2] !== '_') {
        prop.paddingBottom = padding[2] * weight;
      }
      if (padding[3] !== '_') {
        prop.paddingLeft = padding[3] * weight;
      }
    } else if (padding.length === 2) {
      if (padding[0] !== '_') {
        prop.paddingTop = padding[0] * weight;
        prop.paddingBottom = padding[0] * weight;
      }
      if (padding[1] !== '_') {
        prop.paddingRight = padding[1] * weight;
        prop.paddingLeft = padding[1] * weight;
      }
    }
  } else if (padding && Object.keys(padding).length) {
    padding = mapKeys(padding, (_, key) => `padding${upperFirst(key)}`);
    prop = mapValues(padding, v => v * weight);
  }
  return prop;
}

export default getStyledPadding;
