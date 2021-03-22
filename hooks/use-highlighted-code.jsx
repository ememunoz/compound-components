import { useEffect, useState } from 'react'
import { usePresentationContext } from '../components/Presentation/Presentation'

export const useHighlightedCode = (currentStep, highlights) => {
  const [currentHighlight, setCurrentHighlight] = useState(0)
  const contextCurrentStep = usePresentationContext()

  useEffect(() => {
    const eventListener = e => {
      if (contextCurrentStep === currentStep) {
        const { key } = e
        switch (key) {
          case 'ArrowUp':
            setCurrentHighlight(prevHighlight => {
              if (prevHighlight > 0) {
                return prevHighlight - 1
              }
              return prevHighlight
            })
            break
          case 'ArrowDown':
            setCurrentHighlight(prevHighlight => {
              if (prevHighlight < highlights.length - 1) {
                return prevHighlight + 1
              }
              return prevHighlight
            })
            break
          default:
            break
        }
      } else {
        setCurrentHighlight(0)
      }
    }
    document.addEventListener('keydown', eventListener)
    return () => document.removeEventListener('keydown', eventListener)
  }, [contextCurrentStep])

  return highlights[currentHighlight]
}
