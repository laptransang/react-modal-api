import { ReactNode, MouseEvent, KeyboardEvent } from 'react';

interface IModalPropTypes {
  children: ReactNode;
  visible: boolean;
  destroyOnClose?: boolean;
  prefixCls?: string;
  width?: number;
  keyboard?: boolean;
  onClose: (e: KeyboardEvent | MouseEvent) => any;
  padding?: Array<string> | number;
  centered?: boolean;
  closeIcon?: ReactNode;
}

export { IModalPropTypes }
