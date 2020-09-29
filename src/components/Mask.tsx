import React from 'react';

import classNames from 'utils/classNames';

interface IMask {
  prefixCls: string;
  visible: boolean;
}

function Mask(props: IMask) {
  const { prefixCls, visible } = props;

  return (
    <div className={classNames(`${prefixCls}-mask`, {[`${prefixCls}-mask--hidden`]: !visible })} />
  );
}

export default Mask;
