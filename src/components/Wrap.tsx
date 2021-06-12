import React, { ReactNode } from 'react';

import classNames from 'utils/classNames';
import KeyCode from 'utils/KeyCode';

type Props = {
  prefixCls: string;
  visible: boolean;
  centered?: boolean;
  keyboard?: boolean;
  onClose: (event: React.KeyboardEvent<HTMLDivElement>) => void;
  onFocus?: (event: React.KeyboardEvent<HTMLDivElement>) => void;
  children: ReactNode;
}

function Wrap({ prefixCls, visible, centered, keyboard, onClose, onFocus, children }: Props) {
  // const [transitionVisible, setTransitionVisible] = useState(visible)

  function handleWrapClick(e: any) {
    if (e.target === e.currentTarget) {
      onClose(e);
    }
  }

  function handleKeyDown(e: React.KeyboardEvent<HTMLDivElement>) {
    if (keyboard && e.keyCode === KeyCode.ESC) {
      e.stopPropagation();
      onClose(e);
      return;
    }

    // keep focus inside dialog
    if (visible && e.keyCode === KeyCode.TAB) {
      if (onFocus) {
        onFocus(e);
      }
    }
  }

  // useEffect(() => {
  //   if (visible) {
  //     setTransitionVisible(true)
  //   }
  // }, [visible])

  return (
    <div
      tabIndex={-1}
      className={classNames(`${prefixCls}-wrap`, {[`${prefixCls}-centered`]: centered})} role="dialog"
      onKeyDown={handleKeyDown}
      onClick={handleWrapClick}
      style={{ display: visible ? null : 'none' }}
    >
      {children}
    </div>
  )
}

export default Wrap;
