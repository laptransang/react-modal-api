import { useEffect, useState } from 'react'

function useAnimationVisible(visible: boolean) {
  const [animatedVisible, setAnimatedVisible] = useState(visible);

  const onAnimationExit = () => {
    setAnimatedVisible(false)
  }

  useEffect(() => {
    if (visible) {
      setAnimatedVisible(true);
    }
  }, [visible])

  return {
    animatedVisible,
    onAnimationExit
  }
}

export default useAnimationVisible
