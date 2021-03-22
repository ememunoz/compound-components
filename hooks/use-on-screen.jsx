import { useState, useEffect } from 'react'

export default function useOnScreen(ref, dependencies) {
  const [isIntersecting, setIntersecting] = useState(false)

  let observer = null

  useEffect(() => {
    observer = new IntersectionObserver(
      ([entry]) => {
        return setIntersecting(entry.isIntersecting)
      },
      {
        // rootMargin: '-500px',
        threshold: 1,
      }
    )
  }, [])

  useEffect(() => {
    observer.observe(ref.current)
    // Remove the observer as soon as the component is unmounted
    return () => {
      observer.disconnect()
    }
  }, dependencies)

  return isIntersecting
}
