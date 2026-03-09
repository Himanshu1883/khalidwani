import { useEffect, useRef } from 'react'

/**
 * Attach to a container ref; all children with class "reveal", "reveal-left",
 * or "reveal-right" inside it will get the "visible" class when they scroll
 * into view.
 */
export function useScrollReveal(threshold = 0.15) {
  const containerRef = useRef(null)

  useEffect(() => {
    const elements = document.querySelectorAll('.reveal, .reveal-left, .reveal-right')

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible')
          }
        })
      },
      { threshold }
    )

    elements.forEach((el) => observer.observe(el))

    return () => observer.disconnect()
  }, [threshold])

  return containerRef
}

/**
 * Returns a ref; when the element intersects, calls onVisible once.
 */
export function useOnceVisible(onVisible, threshold = 0.15) {
  const ref = useRef(null)

  useEffect(() => {
    if (!ref.current) return
    const el = ref.current

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          onVisible()
          observer.disconnect()
        }
      },
      { threshold }
    )

    observer.observe(el)
    return () => observer.disconnect()
  }, [onVisible, threshold])

  return ref
}
