import React from 'react';

interface IMask {
  prefixCls: string;
  visible: boolean;
}

function Mask(props: IMask) {
  const { prefixCls, visible } = props;

  console.log('visible', visible);

  return (
    <div className={`${prefixCls}-mask`} />
  );
}

export default Mask;
