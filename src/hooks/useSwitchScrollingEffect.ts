import { useLayoutEffect } from 'react';

import { switchScrollingEffect } from 'utils'

const useSwitchScrollingEffect = (visible: boolean) => {
  useLayoutEffect(() => {
    if (visible) {
      switchScrollingEffect();
    }
  }, [visible])

  return {
    switchScrollingEffect
  }
}

export default useSwitchScrollingEffect
