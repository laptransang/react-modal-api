import { useState } from 'react';

import { getElementOffset, getMousePosition } from 'utils';

function useElementTransformWithMousePosition() {
  const [transformOriginValue, setTransformOriginValue] = useState<string>();

  const onTriggerElement = (element: any) => {
    const mousePosition = getMousePosition()
    const elementOffset = getElementOffset(element);

    setTransformOriginValue(
      mousePosition
        ? `${mousePosition.x - elementOffset.left}px ${mousePosition.y - elementOffset.top}px`
        : '',
    );
  }

  return {
    onTriggerElement,
    transformOriginValue
  }
}

export default useElementTransformWithMousePosition
