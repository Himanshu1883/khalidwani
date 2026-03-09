import { useState } from 'react'

const SVG_PLACEHOLDER = `data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='600' height='800' viewBox='0 0 600 800'%3E%3Crect width='600' height='800' fill='%231C1C1C'/%3E%3Crect x='0' y='0' width='600' height='3' fill='%23C9A84C'/%3E%3Ccircle cx='300' cy='300' r='110' fill='%23282828' stroke='%23C9A84C' stroke-width='1' stroke-opacity='0.3'/%3E%3Cellipse cx='300' cy='220' rx='60' ry='70' fill='%23333'/%3E%3Cellipse cx='300' cy='400' rx='100' ry='80' fill='%23333'/%3E%3Ctext x='300' y='560' font-family='Georgia%2Cserif' font-size='22' fill='%23C9A84C' text-anchor='middle' letter-spacing='4'%3EKHALID WANI%3C/text%3E%3Ctext x='300' y='595' font-family='Georgia%2Cserif' font-size='13' fill='%23727268' text-anchor='middle' letter-spacing='2'%3EKWCG%3C/text%3E%3C/svg%3E`

/**
 * FallbackImage tries each src in the `sources` array in order.
 * Falls back to an SVG placeholder silhouette if all fail.
 */
export default function FallbackImage({ sources = [], alt = 'Khalid Wani', className = '', style = {} }) {
  const [index, setIndex] = useState(0)

  const handleError = () => {
    if (index + 1 < sources.length) {
      setIndex(index + 1)
    } else {
      setIndex(sources.length) // triggers placeholder
    }
  }

  const src = index < sources.length ? sources[index] : SVG_PLACEHOLDER

  return (
    <img
      src={src}
      alt={alt}
      className={className}
      style={style}
      onError={handleError}
    />
  )
}
