import isNumber from 'lodash/isNumber';
import isString from 'lodash/isString';
import mapValues from 'lodash/mapValues';

import Dimensions from 'theme/Dimensions';

export function getStyledPosition(value, weight = Dimensions.spaceWeight) {
  let position = value;
  let prop = {};
  if (position === 0 || isNumber(position)) {
    const pos = position ? value * weight : 0;
    prop = {
      top: pos,
      right: pos,
      bottom: pos,
      left: pos,
    };
  } else if (position && isString(position)) {
    position = position
      .split(' ')
      .map((v) => (v === '_' ? v : parseInt(v, 10)));
    if (position.length === 4) {
      if (position[0] !== '_' && isNumber(position[0])) {
        prop.top = position[0] ? position[0] * weight : 0;
      }
      if (position[1] !== '_' && isNumber(position[1])) {
        prop.right = position[1] ? position[1] * weight : 0;
      }
      if (position[2] !== '_' && isNumber(position[2])) {
        prop.bottom = position[2] ? position[2] * weight : 0;
      }
      if (position[3] !== '_' && isNumber(position[3])) {
        prop.left = position[3] ? position[3] * weight : 0;
      }
    } else if (position.length === 2) {
      if (position[0] !== '_' && isNumber(position[0])) {
        prop.top = position[0] ? position[0] * weight : 0;
        prop.bottom = position[0] ? position[0] * weight : 0;
      }
      if (position[1] !== '_' && isNumber(position[1])) {
        prop.right = position[1] ? position[1] * weight : 0;
        prop.left = position[1] ? position[1] * weight : 0;
      }
    }
  } else if (position && Object.keys(position).length) {
    prop = mapValues(position, (v) => (v ? v * weight : 0));
  }
  return prop;
}

export default getStyledPosition;
