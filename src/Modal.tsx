import React, { ReactNode } from 'react';

import PortalWrapper from './PortalWrapper';

interface IModal {
  children: ReactNode;
  visible: boolean;
  destroyOnClose: boolean;
}

function Modal(props: IModal) {
  const { children, visible, destroyOnClose } = props;

  if (visible || !destroyOnClose) {
    return (
      <PortalWrapper visible={visible}>
        {children}
      </PortalWrapper>
    );
  }

  return null;
}

export default Modal;
