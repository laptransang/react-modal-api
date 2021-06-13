import React, { useRef } from 'react';

import { IModalPropTypes } from 'types/IModalPropTypes';
import PortalWrapper from 'PortalWrapper';
import { Mask, Wrap, Content, CloseIcon } from 'components'
import { classNames, getMousePosition } from 'utils'
import { useAnimationVisible, useElementFocus, useSwitchScrollingEffect } from './hooks'

import './styles.css';

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
  const { animatedVisible, onAnimationExit } = useAnimationVisible(visible)
  const modalRootRef = useRef(null);
  const contentRef = useRef(null);
  const mousePosition = getMousePosition()
  const { onElementFocus } = useElementFocus(contentRef)
  const { switchScrollingEffect } = useSwitchScrollingEffect(visible)

  const handleClose = (e: React.MouseEvent | React.KeyboardEvent): void => {
    switchScrollingEffect({ close: true });

    if (onClose) {
      onClose(e);
    }
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
            onClose={handleClose}
            keyboard={keyboard}
            onFocus={onElementFocus}
          >
            <Content
              visible={visible}
              prefixCls={prefixCls}
              width={width}
              mousePosition={mousePosition}
              ref={contentRef}
              onExit={onAnimationExit}
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
