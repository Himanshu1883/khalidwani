import { useEffect, useRef } from 'react'

export function useCursor() {
  const dotRef  = useRef(null)
  const ringRef = useRef(null)
  const pos     = useRef({ mx: 0, my: 0, rx: 0, ry: 0 })
  const rafRef  = useRef(null)

  useEffect(() => {
    const dot  = dotRef.current
    const ring = ringRef.current
    if (!dot || !ring) return

    const onMove = (e) => {
      pos.current.mx = e.clientX
      pos.current.my = e.clientY
    }

    const tick = () => {
      const { mx, my } = pos.current
      pos.current.rx += (mx - pos.current.rx) * 0.13
      pos.current.ry += (my - pos.current.ry) * 0.13

      dot.style.left  = `${mx}px`
      dot.style.top   = `${my}px`
      ring.style.left = `${pos.current.rx}px`
      ring.style.top  = `${pos.current.ry}px`

      rafRef.current = requestAnimationFrame(tick)
    }

    document.addEventListener('mousemove', onMove)
    rafRef.current = requestAnimationFrame(tick)

    // Expand cursor on interactive elements
    const onEnter = () => {
      dot.classList.add('expanded')
      ring.classList.add('hidden')
    }
    const onLeave = () => {
      dot.classList.remove('expanded')
      ring.classList.remove('hidden')
    }

    const attachListeners = () => {
      document.querySelectorAll('a, button').forEach((el) => {
        el.addEventListener('mouseenter', onEnter)
        el.addEventListener('mouseleave', onLeave)
      })
    }

    attachListeners()

    return () => {
      document.removeEventListener('mousemove', onMove)
      cancelAnimationFrame(rafRef.current)
    }
  }, [])

  return { dotRef, ringRef }
}
