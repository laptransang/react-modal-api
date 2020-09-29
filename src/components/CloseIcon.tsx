import React, { ReactNode, MouseEvent } from 'react';

interface ICloseIcon {
  prefixCls: string;
  onClick: (event: MouseEvent<HTMLButtonElement>) => void;
  closeIcon?: ReactNode;
}

function CloseIcon(props: ICloseIcon) {
  const { onClick, closeIcon } = props;

  if (closeIcon === null) return null;

  return (
    <button type="button" onClick={onClick}>
      <svg xmlns="http://www.w3.org/2000/svg" version="1" viewBox="0 0 24 24">
        <path d="M13 12l5-5-1-1-5 5-5-5-1 1 5 5-5 5 1 1 5-5 5 5 1-1z" />
      </svg>
    </button>
  );
}

export default CloseIcon;
