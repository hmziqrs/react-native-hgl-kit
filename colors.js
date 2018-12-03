import Color from 'color';

const colors = {
  white: Color('#ffffff'),
  black: Color('#000000'),
  dark: Color('#333333'),
  alpha: Color('#000')
    .alpha(0.0)
    .string(),
};

function dummyCallback(params) {
  return { key: params.key, values: Color(params.colors[params.key]) };
}

export function setColors(rawColors, callback = dummyCallback) {
  for (const rawColorKey in rawColors) {
    const { key, value } = callback({
      library: Color,
      key: rawColorKey,
      colors: rawColors,
    });
    colors[key] = value;
  }
}

// export function setColor(rawColor, callback = dummyCallback) {
//   const { key, value } = callback({
//     library: Color,
//     key: rawColorKey,
//     colors: rawColors,
//   });
// }

export default colors;
