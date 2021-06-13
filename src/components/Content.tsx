import React, { useRef, forwardRef, useImperativeHandle, ReactNode } from 'react';
import { CSSTransition } from 'react-transition-group';

import { IModalPropTypes } from 'types/IModalPropTypes';
import { useElementTransformWithMousePosition } from 'hooks'

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
    onExit,
    children
  } = props;
  const { onTriggerElement, transformOriginValue } = useElementTransformWithMousePosition()
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

  return (
    <CSSTransition
      in={visible}
      classNames={`${prefixCls}-zoom`}
      onEnter={onTriggerElement}
      timeout={{ appear: 200, enter: 200, exit: 200 }}
      onExited={onExit}
      appear
    >
      <div className={`${prefixCls}`} role="document" style={{ maxWidth: width, transformOrigin: transformOriginValue }}>
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
