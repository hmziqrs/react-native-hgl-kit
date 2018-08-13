import isNumber from 'lodash/isNumber';
import isString from 'lodash/isString';
import isObject from 'lodash/isObject';

export function getStyledFlex(value) {
  let flexProp = {};
  const flex = value;
  if (isNumber(flex)) {
    flexProp = { flex };
  } else if (flex) {
    flexProp = { flex: 1 };
  }
  return flexProp;
}

/* eslint-disable */
export function getStyledSize(value) {
  let size = value;
  let prop = {};
  if (isNumber(size)) {
    prop = { height: size, width: size };
  } else if (isString(size)) {
    size = size.split(' ');
    const [height, width] = size;
    if (height !== '_') {
      prop.height = height;
    }
    if (width !== '_') {
      prop.width = width;
    }
  } else if (size && isObject(size)) {
    prop = size;
  }
  return prop;
}
/* eslint-enable */

export function getStyledAlign(value) {
  const align = value;
  const alignProp = {};
  if (align === null) {
    return {};
  }
  const [alignItems, justifyContent] = align.split(' ');
  if (alignItems !== '_') {
    alignProp.alignItems = alignItems;
  }
  if (justifyContent) {
    alignProp.justifyContent = justifyContent;
  }
  return alignProp;
}
