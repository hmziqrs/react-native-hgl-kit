import isNumber from 'lodash/isNumber';
import isString from 'lodash/isString';
import isEmpty from 'lodash/isEmpty';

let colors = {};

import border from './border';
import margin from './margin';
import padding from './padding';
import position from './position';
import radius from './radius';
import elevation from './elevation';
import * as layout from './layout';

export function setColors(colorConfig) {
  colors = { ...colorConfig };
}

export default function getStyled(props, weight) {
  let styled = {};
  const transform = {};
  if (props.border) {
    styled = { ...styled, ...border(props.border, weight) };
  }
  if (props.margin) {
    styled = { ...styled, ...margin(props.margin, weight) };
  }
  if (props.padding) {
    styled = { ...styled, ...padding(props.padding, weight) };
  }
  if (
    isNumber(props.position) ||
    isString(props.position) ||
    !isEmpty(props.position)
  ) {
    styled = { ...styled, ...position(props.position, weight) };
  }
  if (props.positioning) {
    styled.position = props.positioning;
  }
  if (props.absolute) {
    styled.position = 'absolute';
  }
  if (props.radius) {
    styled = { ...styled, ...radius(props.radius, weight) };
  }
  if (props.align) {
    styled = { ...styled, ...layout.getStyledAlign(props.align) };
  }
  if (props.alignSelf) {
    styled.alignSelf = props.alignSelf;
  }
  if (props.opacity) {
    styled.opacity = props.opacity;
  }
  if (props.flex) {
    styled = { ...styled, ...layout.getStyledFlex(props.flex) };
  }
  if (isNumber(props.flexGrow)) {
    styled.flexGrow = props.flexGrow;
  }
  if (props.size) {
    styled = { ...styled, ...layout.getStyledSize(props.size) };
  }
  if (props.column) {
    styled.flexDirection = 'column';
  }
  if (props.row) {
    styled.flexDirection = 'row';
  }
  if (props.center) {
    styled = { ...styled, ...layout.getStyledAlign('center center') };
  }
  if (props.background) {
    styled.backgroundColor = colors[props.background] || props.background;
  }
  if (props.color) {
    styled.color = colors[props.color] || props.color;
  }
  if (props.borderColor) {
    styled.borderColor = colors[props.borderColor] || props.borderColor;
  }
  if (props.elevation) {
    styled = { ...styled, ...elevation(props.elevation) };
  }
  if (props.font) {
    styled.fontSize = props.font;
  }
  if (props.bold) {
    styled.fontWeight = props.bold;
  }
  if (props.textAlign) {
    styled.textAlign = props.textAlign;
  }
  if (props.textCenter) {
    styled.textAlignVertical = 'center';
    styled.textAlign = 'center';
  }
  if (props.scale) {
    transform.scale = props.scale;
  }
  if (props.translateX) {
    transform.translateX = props.translateX;
  }
  if (props.translateY) {
    transform.translateY = props.translateY;
  }
  const transCache = Object.keys(transform).length;
  if (transCache) {
    styled.transform = [];
    // eslint-disable-next-line
    for (const key in transform) {
      styled.transform.push({ [key]: transform[key] });
    }
  }
  return styled;
}
