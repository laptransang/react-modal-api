import React, { RefObject } from 'react';

function useElementFocus(element: RefObject<any>) {
  const onElementFocus = (e: React.KeyboardEvent<HTMLElement>) => {
    element.current.changeActive(!e.shiftKey)
  }

  return {
    onElementFocus
  }
}

export default useElementFocus
