import React, { useRef } from 'react';

import PortalWrapper from './PortalWrapper';
import KeyCode from './utils/KeyCode';
import { IModalPropTypes } from './types/IModalPropTypes';
import './styles.css';
import store from './store';
import switchScrollingEffect from './utils/switchScrollingEffect';
import classNames from './utils/classNames';
import CloseIcon from 'components/CloseIcon';
import Mask from 'components/Mask';

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
  const startBoundaryRef = useRef(null);
  const endBoundaryRef = useRef(null);
  const boundaryStyle = { width: 0, height: 0, overflow: 'hidden', outline: 'none' };

  function handleKeyDown(e: any) {
    if (keyboard && e.keyCode === KeyCode.ESC) {
      e.stopPropagation();
      close(e);
      return;
    }

    // keep focus inside dialog
    if (visible && e.keyCode === KeyCode.TAB) {
      const { activeElement } = document;

      if (e.shiftKey && activeElement === startBoundaryRef.current) {
        endBoundaryRef.current.focus();
      } else if (! e.shiftKey && activeElement === endBoundaryRef.current) {
        startBoundaryRef.current.focus();
      }
    }
  }

  function close(e: any): void {
    if (onClose) {
      store.setOpenCount(store.openCount - 1);
      switchScrollingEffect({ close: true });
      onClose(e);
    }
  }

  function handleWrapClick(e: any) {
    if (e.target === e.currentTarget) {
      close(e);
    }
  }

  if (visible || !destroyOnClose) {
    return (
      <PortalWrapper visible={visible}>
        <div className={`${prefixCls}-root`} ref={modalRootRef}>
          <Mask prefixCls={prefixCls} visible={visible} />
          <div className={classNames(`${prefixCls}-wrap`, {[`${prefixCls}-wrap--hidden`]: !visible, [`${prefixCls}-centered`]: centered})} tabIndex={-1} role="dialog" onKeyDown={handleKeyDown} onClick={handleWrapClick}>
            <div className={`${prefixCls}`} role="document" style={{ maxWidth: width }}>
              <div ref={startBoundaryRef} tabIndex={0} aria-hidden="true" style={boundaryStyle} />
              <div className={`${prefixCls}-content`}>
                <CloseIcon prefixCls={prefixCls} onClick={close} closeIcon={closeIcon} />
                {children}
              </div>
              <div ref={endBoundaryRef} tabIndex={0} aria-hidden="true" style={boundaryStyle} />
            </div>
          </div>
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
