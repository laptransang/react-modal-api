import React, { ReactNode } from 'react';

import { classNames } from 'utils';
import { useWrapElement } from 'hooks'

type Props = {
  prefixCls: string;
  visible: boolean;
  centered?: boolean;
  keyboard?: boolean;
  onClose: (event: React.KeyboardEvent<HTMLDivElement>) => void;
  onFocus?: (event: React.KeyboardEvent<HTMLDivElement>) => void;
  children: ReactNode;
}

const Wrap = ({ prefixCls, visible, centered, keyboard, onClose, onFocus, children }: Props) => {
  const { onWrapClick, onKeyDown } = useWrapElement({ visible, keyboard, onClose, onFocus })

  return (
    <div
      tabIndex={-1}
      className={classNames(`${prefixCls}-wrap`, {[`${prefixCls}-centered`]: centered})} role="dialog"
      onKeyDown={onKeyDown}
      onClick={onWrapClick}
      style={{ display: visible ? null : 'none' }}
    >
      {children}
    </div>
  )
}

export default Wrap;
