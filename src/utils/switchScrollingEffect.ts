import setStyle from './setStyle';
import getScrollbarWidth from './getScrollbarWidth';

let cacheStyle: object = {};

function switchScrollingEffect({ close = false } = {}) {
  if (close) {
    setStyle(cacheStyle);
    cacheStyle = {};
    return;
  }

  const scrollbarWidth = getScrollbarWidth();

  cacheStyle = setStyle({
    position: 'relative',
    width: `calc(100% - ${scrollbarWidth}px)`,
    overflow: 'hidden'
  });
}

export default switchScrollingEffect;
