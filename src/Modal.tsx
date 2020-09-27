import React, { useRef } from 'react';

import PortalWrapper from './PortalWrapper';
import KeyCode from './utils/KeyCode';
import { IModalPropTypes } from './types/IModalPropTypes';
import './styles.css';

function Modal(props: IModalPropTypes) {
  const {
    width,
    onClose,
    visible,
    keyboard,
    children,
    prefixCls,
    destroyOnClose
  } = props;
  const startBoundary = useRef(null);
  const endBoundary = useRef(null);
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

      if (e.shiftKey) {
        if (activeElement === startBoundary.current) {
          endBoundary.current.focus();
        }
      } else if (activeElement === endBoundary.current) {
        startBoundary.current.focus();
      }
    }
  }

  function close(e: any) {
    if (onClose) {
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
        <div className={`${prefixCls}-root`}>
          <div className={`${prefixCls}-mask ${!visible && `${prefixCls}-mask--hidden`}`} />
          <div className={`${prefixCls}-wrap ${!visible && `${prefixCls}-wrap--hidden`}`} tabIndex={-1} role="dialog" onKeyDown={handleKeyDown} onClick={handleWrapClick}>
            <div className={`${prefixCls}`} role="document" style={{ maxWidth: width }}>
              <div ref={startBoundary} tabIndex={0} aria-hidden="true" style={boundaryStyle} />
              <div className={`${prefixCls}-content`}>
                {children}
              </div>
              <div ref={endBoundary} tabIndex={0} aria-hidden="true" style={boundaryStyle} />
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
