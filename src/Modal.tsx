import React, { ReactNode } from 'react';
import PortalWrapper from './PortalWrapper';

interface IModal {
  children: ReactNode;
  visible: boolean;
}

function Modal(props: IModal) {
  const { children, visible } = props;

  return (
    <PortalWrapper visible={visible}>
      {children}
    </PortalWrapper>
  );
}

export default Modal;
