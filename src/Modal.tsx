import React, { useRef, useState, useEffect, useLayoutEffect } from 'react';

import store from 'store';
import { IModalPropTypes } from 'types/IModalPropTypes';
import PortalWrapper from 'PortalWrapper';
import Mask from 'components/Mask';
import Wrap from 'components/Wrap';
import Content from 'components/Content';
import CloseIcon from 'components/CloseIcon';
import classNames from 'utils/classNames';
import switchScrollingEffect from 'utils/switchScrollingEffect';

import './styles.css';

let mousePosition: { x: number; y: number } | null;

const getClickPosition = (e: MouseEvent) => {
  mousePosition = {
    x: e.pageX,
    y: e.pageY,
  };

  setTimeout(() => {
    mousePosition = null;
  }, 100);
};

if (typeof window !== 'undefined' && window.document && window.document.documentElement) {
  document.documentElement.addEventListener('click', getClickPosition, true);
}

function Modal({
  width,
  onClose,
  centered,
  visible,
  keyboard,
  children,
  prefixCls,
  closeIcon,
  destroyOnClose
}: IModalPropTypes) {
  const [animatedVisible, setAnimatedVisible] = useState(visible);
  const modalRootRef = useRef(null);
  const contentRef = useRef(null);

  function close(e: React.MouseEvent | React.KeyboardEvent): void {
    store.setOpenCount(store.openCount - 1);
    switchScrollingEffect({ close: true });

    if (onClose) {
      onClose(e);
    }
  }

  function handleFocus(e: React.KeyboardEvent<HTMLDivElement>) {
    contentRef.current.changeActive(!e.shiftKey)
  }

  useLayoutEffect(() => {
    if (visible) {
      store.setOpenCount(store.openCount + 1);
      if (store.openCount === 1) {
        switchScrollingEffect();
      }
    }
  }, [visible])

  useEffect(() => {
    if (visible) {
      setAnimatedVisible(true);
    }
  }, [visible])

  const onExit = () => {
    setAnimatedVisible(false)
  }

  if (visible || !destroyOnClose) {
    return (
      <PortalWrapper visible={animatedVisible}>
        <div className={classNames(`${prefixCls}-root`, {[`${prefixCls}-visible`]: visible })} ref={modalRootRef}>
          <Mask prefixCls={prefixCls} visible={visible} />
          <Wrap
            prefixCls={prefixCls}
            visible={animatedVisible}
            centered={centered}
            onClose={close}
            keyboard={keyboard}
            onFocus={handleFocus}
          >
            <Content
              visible={visible}
              prefixCls={prefixCls}
              width={width}
              mousePosition={mousePosition}
              ref={contentRef}
              onExit={onExit}
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
