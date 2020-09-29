import React, { useRef, forwardRef, useImperativeHandle, ReactNode } from 'react';

interface ContentProps {
  prefixCls: string;
  width?: number;
  children: ReactNode;
}

interface ContentRef {
  changeActive: (next: boolean) => void;
}

const Content = forwardRef<ContentRef, ContentProps>((props, ref) => {
  const {
    prefixCls,
    width,
    children,
  } = props;

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
    <div className={`${prefixCls}`} role="document" style={{ maxWidth: width }}>
      <div ref={contentStartRef} tabIndex={0} aria-hidden="true" style={contentBoundaryStyle} />
      <div className={`${prefixCls}-content`}>
        {children}
      </div>
      <div ref={contentEndRef} tabIndex={0} aria-hidden="true" style={contentBoundaryStyle} />
    </div>
  )
})

export { ContentRef }
export default Content;
