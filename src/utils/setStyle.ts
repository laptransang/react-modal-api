import React from 'react';

export interface SetStyleOptions {
  element?: HTMLElement;
}

function setStyle(
  style: React.CSSProperties,
  options: SetStyleOptions = {},
): React.CSSProperties {
  const { element = document.body } = options;
  const oldStyle: React.CSSProperties = {};

  const styleKeys = Object.keys(style);

  // IE browser compatible
  styleKeys.forEach(key => {
    oldStyle[key] = element.style[key];
  });

  styleKeys.forEach(key => {
    element.style[key] = style[key];
  });

  return oldStyle;
}

export default setStyle
