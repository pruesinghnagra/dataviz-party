import React, {useState, useEffect, useRef} from 'react'
import * as d3 from 'd3'

import { useInterval } from '../utils/useInterval'
import { generateArray as generateCircleData } from '../utils/generateArray'

export default function Circles () {
  const [circleData, setCircleData] = useState(
    generateCircleData()
  )

  const ref = useRef()

  useInterval(() => {
    const newCircleData = generateCircleData()
    setCircleData(newCircleData)
  }, 2000)

  useEffect(() => {
    const svgElement = d3.select(ref.current)
    svgElement.selectAll('circle')
    .data(circleData)
    .join('circle')
      .attr('cx', d => d[0])
      .attr('cy', d => d[1])
      .attr('r', 3)
  }, [circleData])

  return (
    <svg viewBox="0 0 100 50" ref={ref}>
    </svg>
  )
}
