import React, {useEffect, useRef} from 'react'
import * as d3 from 'd3'

// Make one circle
export default function Circle () {
  const ref = useRef()

  useEffect(() => {
    const svgElement = d3.select(ref.current)
    svgElement.append('circle')
      .attr('cx', 150)
      .attr('cy', 70)
      .attr('r',  50)
  }, [])

  return (
    <svg
      ref={ref}
    />
  )
}
