import React, { MouseEvent, ReactNode } from 'react';
import classNames from '../utils/classNames';
import KeyCode from '../utils/KeyCode';

type Props = {
  prefixCls: string;
  visible: boolean;
  centered?: boolean;
  keyboard?: boolean;
  onClose: (event: MouseEvent<HTMLButtonElement>) => void;
  onFocus?: (event: MouseEvent<HTMLButtonElement>) => void;
  children: ReactNode;
}

function Wrap(props: Props) {
  const { prefixCls, visible, centered, keyboard, onClose, onFocus, children } = props;

  function handleWrapClick(e: any) {
    if (e.target === e.currentTarget) {
      onClose(e);
    }
  }

  function handleKeyDown(e: any) {
    if (keyboard && e.keyCode === KeyCode.ESC) {
      e.stopPropagation();
      onClose(e);
      return;
    }

    // keep focus inside dialog
    if (visible && e.keyCode === KeyCode.TAB) {
      if (onFocus) {
        onFocus(e.shiftKey);
      }
    }
  }

  return (
    <div className={classNames(`${prefixCls}-wrap`, {[`${prefixCls}-wrap--hidden`]: !visible, [`${prefixCls}-centered`]: centered})} tabIndex={-1} role="dialog" onKeyDown={handleKeyDown} onClick={handleWrapClick}>
      {children}
    </div>
  )
}

export default Wrap;
