import isNumber from 'lodash/isNumber';
import isString from 'lodash/isString';
import mapKeys from 'lodash/mapKeys';
import mapValues from 'lodash/mapValues';
import upperFirst from 'lodash/upperFirst';

import Dimensions from 'theme/Dimensions';

export function getStyledMargin(value, weight = Dimensions.spaceWeight) {
  let prop = {};
  let margin = value;
  if (margin && isNumber(margin)) {
    prop = { margin: weight * margin };
  } else if (margin && isString(margin)) {
    margin = margin.split(' ');
    if (margin.length === 4) {
      if (margin[0] !== '_') {
        prop.marginTop = margin[0] * weight;
      }
      if (margin[1] !== '_') {
        prop.marginRight = margin[1] * weight;
      }
      if (margin[2] !== '_') {
        prop.marginBottom = margin[2] * weight;
      }
      if (margin[3] !== '_') {
        prop.marginLeft = margin[3] * weight;
      }
    } else if (margin.length === 2) {
      if (margin[0] !== '_') {
        prop.marginTop = margin[0] * weight;
        prop.marginBottom = margin[0] * weight;
      }
      if (margin[1] !== '_') {
        prop.marginRight = margin[1] * weight;
        prop.marginLeft = margin[1] * weight;
      }
    }
  } else if (margin && Object.keys(margin).length) {
    margin = mapKeys(margin, (_, key) => `margin${upperFirst(key)}`);
    prop = mapValues(margin, (v) => v * weight);
  }
  return prop;
}

export default getStyledMargin;
