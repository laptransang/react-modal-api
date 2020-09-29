let cached : number;

export default function getScrollBarSize() {
  if (typeof document === 'undefined') {
    return 0;
  }

  if (cached === undefined) {
    const inner = document.createElement('div');
    inner.style.width = '100%';
    inner.style.height = '200px';

    const outer = document.createElement('div');
    const outerStyle: HTMLDivElement = outer;

    outerStyle.style.position = 'absolute';
    outerStyle.style.top = '0px';
    outerStyle.style.left = '0px';
    outerStyle.style.pointerEvents = 'none';
    outerStyle.style.visibility = 'hidden';
    outerStyle.style.width = '200px';
    outerStyle.style.height = '150px';
    outerStyle.style.overflow = 'hidden';

    outer.appendChild(inner);

    document.body.appendChild(outer);

    const widthContained = inner.offsetWidth;
    outer.style.overflow = 'scroll';
    let widthScroll = inner.offsetWidth;

    if (widthContained === widthScroll) {
      widthScroll = outer.clientWidth;
    }

    document.body.removeChild(outer);

    cached = widthContained - widthScroll;
  }

  return cached;
}

