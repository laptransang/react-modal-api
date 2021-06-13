import React, { useRef } from 'react';

import { getParent } from 'utils';
import Portal from './Portal';

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
