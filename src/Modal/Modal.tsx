import * as React from 'react';
import { Dialog } from '../Dialog';
import * as PropTypes from 'prop-types';
import addEventListener from 'rc-util/lib/Dom/addEventListener';

let mousePosition: { x: number, y: number } | null;
let mousePositionEventBinded: boolean;

export interface ModalProps {
  visible?: boolean;
  confirmLoading?: boolean;
  title?: React.ReactNode | string;
  closable?: boolean;
  onConfirm?: (e: React.MouseEvent<any>) => void;
  onCancel?: (e: React.MouseEvent<any>) => void;
  afterClose?: () => void;
  centered?: boolean;
  width?: number;
  footer?: React.ReactNode;
  okText?: string;
  cancelText?: string;
  maskClosable?: boolean;
  destroyOnClose?: boolean;
  style?: React.CSSProperties;
  wrapClassName?: string;
  maskTransitionName?: string;
  transitionName?: string;
  className?: string;
  getContainer?: (instance: React.ReactInstance) => HTMLElement;
  zIndex?: number;
  bodyStyle?: React.CSSProperties;
  maskStyle?: React.CSSProperties;
  mask?: boolean;
  keyboard?: boolean;
  wrapProps?: any;
  prefixCls?: string;
}

export interface ModalFuncProps extends ModalProps {
  onConfirm?: (...args: any[]) => any | PromiseLike<any>;
  onCancel?: (...args: any[]) => any | PromiseLike<any>;
}

export type ModalFunc = (props: ModalFuncProps) => {
  destroy: () => void,
  update: (newConfig: ModalFuncProps) => void,
};

export interface ModalLocale {
  okText: string;
  cancelText: string;
  justOkText: string;
}

export default class Modal extends React.Component<ModalProps, {}> {
  static api: ModalFunc;
  static info: ModalFunc;
  static success: ModalFunc;
  static error: ModalFunc;
  static warn: ModalFunc;
  static warning: ModalFunc;
  static confirm: ModalFunc;

  static defaultProps = {
    prefixCls: 'rc-dialog',
    width: 520,
    transitionName: 'zoom',
    maskTransitionName: 'fade',
    confirmLoading: false,
    visible: false,
    okbuttonDisabled: false,
    cancelbuttonDisabled: false,
  };

  static propTypes = {
    prefixCls: PropTypes.string,
    onOk: PropTypes.func,
    onCancel: PropTypes.func,
    okText: PropTypes.node,
    cancelText: PropTypes.node,
    centered: PropTypes.bool,
    width: PropTypes.number,
    confirmLoading: PropTypes.bool,
    visible: PropTypes.bool,
    align: PropTypes.object,
    footer: PropTypes.node,
    title: PropTypes.node,
    closable: PropTypes.bool,
  };

  handleCancel = (e: any) => {
    const onCancel = this.props.onCancel;
    if (onCancel) {
      onCancel(e);
    }
  }

  componentDidMount() {
    if (mousePositionEventBinded) {
      return;
    }

    addEventListener(document.documentElement, 'click', (e: MouseEvent) => {
      mousePosition = {
        x: e.pageX,
        y: e.pageY,
      };

      setTimeout(() => mousePosition = null, 100);
    });
    mousePositionEventBinded = true;
  }

  render() {
    const { visible, width, prefixCls, ...rest } = this.props;

    const closeIcon = (
      <span className={`${prefixCls}-close-x`}>
        <div>close</div>
      </span>
    );

    console.log('prefixCls', rest);
    return (
      <Dialog
        animation="zoom"
        maskAnimation="fade"
        width={width}
        prefixCls={prefixCls}
        footer={null}
        visible={visible}
        onClose={this.handleCancel}
        closeIcon={closeIcon}
      >
        {this.props.children}
      </Dialog>
    );
  }
}