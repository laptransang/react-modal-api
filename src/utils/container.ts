/**
 * getParent
 * @param getContainer
 */
function getParent(getContainer: any) {
  if (getContainer) {
    if (typeof getContainer === 'string') {
      return document.querySelectorAll(getContainer)[0];
    }
    if (typeof getContainer === 'function') {
      return getContainer();
    }
    if (
      typeof getContainer === 'object' &&
      getContainer instanceof window.HTMLElement
    ) {
      return getContainer;
    }
  }
  return document.body;
}

/**
 * getScrollbarWidth
 */
function getScrollbarWidth() {
  return window.innerWidth - document.documentElement.clientWidth;
}

export { getParent, getScrollbarWidth }
