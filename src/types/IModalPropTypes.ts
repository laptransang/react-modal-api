import { ReactNode, SyntheticEvent } from 'react';

interface IModalPropTypes {
  children: ReactNode;
  visible: boolean;
  destroyOnClose?: boolean;
  prefixCls?: string;
  width?: number;
  keyboard?: boolean;
  onClose: (e: SyntheticEvent<HTMLDivElement>) => any;
  padding?: Array<string> | number;
}

export { IModalPropTypes }
