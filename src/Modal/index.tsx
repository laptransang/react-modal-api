import Modal, { ModalFuncProps } from './Modal';
import api from './Api';

Modal.api = function (props: ModalFuncProps) {
  const config = {
    type: 'info',
    iconType: 'info-circle',
    okCancel: false,
    ...props,
  };
  return api(config);
};

export default Modal;