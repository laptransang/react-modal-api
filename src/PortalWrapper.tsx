import React, { useRef, useEffect } from 'react';

import Portal from './Portal';

interface PortalWrapper {
  visible: boolean;
  forceRender?: boolean;
  children: React.ReactNode;
}

const windowIsUndefined = !(
  typeof window !== 'undefined' &&
  window.document &&
  window.document.createElement
);

const getParent = (getContainer: any) => {
  if (windowIsUndefined) {
    return null;
  }
  if (getContainer) {
    if (typeof getContainer === 'string') {
      return document.querySelectorAll(getContainer)[0];
    }
    if (typeof getContainer === 'function') {
      return getContainer();
    }
  }
  return document.body;
};

function PortalWrapper(props: PortalWrapper) {
  const { visible, forceRender, children } = props;
  const container = useRef(null);
  const component = useRef(null);
  const portal = useRef(null);

  function getContainer() {
    if (windowIsUndefined) {
      return null;
    }
    if (!container.current) {
      container.current = document.createElement('div');
      const parent = getParent(null);
      if (parent) {
        parent.appendChild(container.current);
      }
    }

    return container.current;
  }

  function savePortal(c: any) {
    console.log('c', c);
    component.current = c;
  }

  useEffect(() => {
    return () => {
      if (container && container.current) {
        container.current.parentNode.removeChild(container.current);
      }
    }
  }, [])

  if (!visible) {
    return null;
  }

  if (forceRender || visible || component.current) {
    portal.current = (
      <Portal
        getContainer={getContainer}
        ref={savePortal}
      >
        {children}
      </Portal>
    );
  }

  return portal.current;
}

export default PortalWrapper;
