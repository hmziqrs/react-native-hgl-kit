import isNumber from 'lodash/isNumber';
import isString from 'lodash/isString';
import mapKeys from 'lodash/mapKeys';
import mapValues from 'lodash/mapValues';
import upperFirst from 'lodash/upperFirst';

/* eslint-disable */
export function getStyledBorder(value) {
  let border = value;
  let prop = {};
  if (border && isNumber(border)) {
    prop = { borderWidth: border };
  } else if (border && isString(border)) {
    border = border.split(' ').map((v) => parseInt(v, 10));
    if (border.length === 4) {
      if (border[0] !== '_') {
        prop.borderTopWidth = border[0];
      }
      if (border[1] !== '_') {
        prop.borderRightWidth = border[1];
      }
      if (border[2] !== '_') {
        prop.borderBottomWidth = border[2];
      }
      if (border[3] !== '_') {
        prop.borderLeftWidth = border[3];
      }
    } else if (border.length === 2) {
      if (border[0] !== '_') {
        prop.borderTopWidth = border[0];
        prop.borderBottomWidth = border[0];
      }
      if (border[1] !== '_') {
        prop.borderRightWidth = border[1];
        prop.borderLeftWidth = border[1];
      }
    }
  } else if (border && Object.keys(border).length) {
    border = mapKeys(border, (_, key) => `border${upperFirst(key)}Width`);
    prop = mapValues(border, (v) => v);
  }
  return prop;
}
/* eslint-enable */

export default getStyledBorder;
