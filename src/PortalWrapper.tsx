import React, { useRef, useEffect } from 'react';

import { getParent } from './utils/container';
import Portal from './Portal';
import store from './store';
import switchScrollingEffect from './utils/switchScrollingEffect';

type Props = {
  visible: boolean;
  getContainer?: any;
  children: any;
}

function PortalWrapper(props: Props) {
  const { visible, children, getContainer } = props;
  const portal = useRef(null);
  const container = useRef(null);

  function getCurrentContainer() {
    if (!container.current) {
      container.current = document.createElement('div');
      const parent = getParent(getContainer);
      if (parent) {
        parent.appendChild(container.current);
      }
    }

    return container.current;
  }

  useEffect(() => {
    if (visible) {
      store.setOpenCount(store.openCount + 1);
      if (store.openCount === 1) {
        switchScrollingEffect();
      }
    }
  }, [visible])

  if (visible || portal.current) {
    portal.current = (
      <Portal getContainer={getCurrentContainer}>
        {children}
      </Portal>
    );
  }

  return portal.current;
}

export default PortalWrapper;
