import React from 'react';
import { CSSTransition } from 'react-transition-group';

interface IMask {
  prefixCls: string;
  visible: boolean;
}

function Mask(props: IMask) {
  const { prefixCls, visible } = props;

  return (
    <CSSTransition
      in={visible}
      classNames={`${prefixCls}-fade`}
      timeout={{ appear: 10, enter: 10, exit: 50 }}
      appear
    >
      <div className={`${prefixCls}-mask`} />
    </CSSTransition>
  );
}

export default Mask;
