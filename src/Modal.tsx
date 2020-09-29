import React, { useRef } from 'react';

import PortalWrapper from './PortalWrapper';
import { IModalPropTypes } from './types/IModalPropTypes';
import './styles.css';
import store from './store';
import switchScrollingEffect from './utils/switchScrollingEffect';
import CloseIcon from 'components/CloseIcon';
import Mask from 'components/Mask';
import Wrap from 'components/Wrap';
import Content from 'components/Content';

function Modal(props: IModalPropTypes) {
  const {
    width,
    onClose,
    centered,
    visible,
    keyboard,
    children,
    prefixCls,
    closeIcon,
    destroyOnClose
  } = props;
  const modalRootRef = useRef(null);
  const contentRef = useRef(null);

  function close(e: any): void {
    if (onClose) {
      store.setOpenCount(store.openCount - 1);
      switchScrollingEffect({ close: true });
      onClose(e);
    }
  }

  if (visible || !destroyOnClose) {
    return (
      <PortalWrapper visible={visible}>
        <div className={`${prefixCls}-root`} ref={modalRootRef}>
          <Mask prefixCls={prefixCls} visible={visible} />
          <Wrap
            prefixCls={prefixCls}
            visible={visible}
            centered={centered}
            onClose={close}
            keyboard={keyboard}
          >
            <Content
              prefixCls={prefixCls}
              width={width}
              ref={contentRef}
            >
              <CloseIcon prefixCls={prefixCls} onClick={close} closeIcon={closeIcon} />
              {children}
            </Content>
          </Wrap>
        </div>
      </PortalWrapper>
    );
  }
  return null;
}

Modal.defaultProps = {
  prefixCls: 'react-modal-api',
  keyboard: true,
  padding: 0,
  width: 520,
}

export default Modal;
