import React, { useRef, forwardRef, useImperativeHandle, ReactNode } from 'react';
import { CSSTransition } from 'react-transition-group';

import { offset } from 'utils/offset';
import { IModalPropTypes } from 'types/IModalPropTypes';

interface ContentProps extends IModalPropTypes{
  prefixCls: string;
  visible: boolean;
  width?: number;
  children: ReactNode;
  onExit: any;
}

interface ContentRef {
  changeActive: (next: boolean) => void;
}

const Content = forwardRef<ContentRef, ContentProps>((props, ref) => {
  const {
    prefixCls,
    width,
    visible,
    mousePosition,
    onExit,
    children
  } = props;
  const [transformOrigin, setTransformOrigin] = React.useState<string>();
  const contentStartRef = useRef(null);
  const contentEndRef = useRef(null);
  const contentBoundaryStyle = { width: 0, height: 0, overflow: 'hidden', outline: 'none' };

  useImperativeHandle(ref, () => ({
    changeActive: (next: boolean) => {
      const { activeElement } = document;

      if (next && activeElement === contentEndRef.current) {
        contentStartRef.current.focus();
      } else if (!next && activeElement === contentStartRef.current) {
        contentEndRef.current.focus();
      }
    }
  }))

  const onEnter = (node: any): void => {
    const elementOffset = offset(node);

    setTransformOrigin(
      mousePosition
        ? `${mousePosition.x - elementOffset.left}px ${mousePosition.y - elementOffset.top}px`
        : '',
    );
  }

  return (
    <CSSTransition
      in={visible}
      classNames={`${prefixCls}-zoom`}
      onEnter={onEnter}
      timeout={{ appear: 200, enter: 200, exit: 200 }}
      onExited={onExit}
      appear
    >
      <div className={`${prefixCls}`} role="document" style={{ maxWidth: width, transformOrigin }}>
        <div ref={contentStartRef} tabIndex={0} aria-hidden="true" style={contentBoundaryStyle} />
        <div className={`${prefixCls}-content`}>
          {children}
        </div>
        <div ref={contentEndRef} tabIndex={0} aria-hidden="true" style={contentBoundaryStyle} />
      </div>
    </CSSTransition>
  )
})

export { ContentRef }
export default Content;
