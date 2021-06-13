import React from 'react';
import { keyCode } from 'utils';

type IUseWrapElement = {
  visible: boolean,
  keyboard: boolean,
  onClose: Function,
  onFocus: Function
}

function useWrapElement({ visible, onClose, keyboard, onFocus }: IUseWrapElement) {
  const onWrapClick = (e: any) => {
    if (e.target === e.currentTarget) {
      onClose(e);
    }
  }

  const onKeyDown = (e: React.KeyboardEvent<HTMLDivElement>) => {
    if (keyboard && e.keyCode === keyCode.ESC) {
      e.stopPropagation();
      onClose(e);
      return;
    }

    // keep focus inside dialog
    if (visible && e.keyCode === keyCode.TAB) {
      if (onFocus) {
        onFocus(e);
      }
    }
  }

  return {
    onWrapClick,
    onKeyDown
  }
}

export default useWrapElement
