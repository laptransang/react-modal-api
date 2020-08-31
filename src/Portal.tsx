import { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';

interface IPortal {
  getContainer?: any;
  ref?: any;
  children: any;
}

const Portal= (props: IPortal) => {
  const [ container, setContainer ] = useState(null);
  const { children, getContainer } = props;

  useEffect(() => {
    setContainer(getContainer());

    return () => {
      if (container) {
        container.parentNode.removeChild(container.current);
      }
    }
  }, [])

  if (container) {
    return ReactDOM.createPortal(children, container);
  }

  return null;
}

export default Portal;
