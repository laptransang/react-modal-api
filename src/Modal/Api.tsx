import * as React from 'react';
import * as ReactDOM from 'react-dom';
import Modal from './';
import { ModalFuncProps } from './Modal';

interface ApiDialogProps extends ModalFuncProps {
  close: (...args: any[]) => void;
}

class ApiDialog extends React.Component<ApiDialogProps> {
  handleConfirm = (e: any) => {
    const { onConfirm } = this.props;

    if (onConfirm) {
      onConfirm(e);
      this.handleClose();
    }
  };

  handleCancel = (e: any) => {
    const { onCancel } = this.props;

    if (onCancel) {
      onCancel(e);
    }

    this.handleClose();
  };

  handleClose = () => {
    const { close } = this.props;
    if (close) {
      close();
    }
  };

  render() {
    const { visible } = this.props;

    return (
      <Modal
        visible={visible}
        onConfirm={this.handleConfirm}
        onCancel={this.handleCancel}
      >
        <h1>Hello</h1>
      </Modal>
    );
  }
}

export default function api(config: ModalFuncProps) {
  const div = document.createElement('div');
  document.body.appendChild(div);
  let currentConfig = { ...config, close, visible: true } as any;
  function close(...args: any[]) {
    currentConfig =  {
      ...currentConfig,
      visible: false,
      afterClose() {destroy.bind(this, ...args) },
    };

    destroy(...args);
  }
  function update(newConfig: ModalFuncProps) {
    currentConfig = {
      ...currentConfig,
      ...newConfig,
    };
    render(currentConfig);
  }
  function destroy(...args: any[]) {
    const unmountResult = ReactDOM.unmountComponentAtNode(div);
    if (unmountResult && div.parentNode) {
      div.parentNode.removeChild(div);
    }
    const triggerCancel = args && args.length &&
      args.some(param => param && param.triggerCancel);
    if (config.onCancel && triggerCancel) {
      config.onCancel(...args);
    }
  }
  function render(props: any) {
    ReactDOM.render(<ApiDialog {...props} />, div);
  }
  render(currentConfig);
  return {
    destroy: close,
    update,
  };
}
