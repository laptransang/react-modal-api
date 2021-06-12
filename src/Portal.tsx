import { useEffect, useRef } from 'react';
import ReactDOM from 'react-dom';

interface IPortal {
  getContainer?: any;
  ref?: any;
  children: any;
}

const Portal= (props: IPortal) => {
  const { children, getContainer } = props;
  const containerRef = useRef<HTMLElement>();
  const initRef = useRef(false);

  if (!initRef.current) {
    containerRef.current = getContainer();
    initRef.current = true;
  }

  useEffect(() => {
    return () => {
      containerRef.current.parentNode.removeChild(containerRef.current);
    }
  }, [])

  return containerRef.current ? ReactDOM.createPortal(children, containerRef.current) : null;
}

export default Portal;
