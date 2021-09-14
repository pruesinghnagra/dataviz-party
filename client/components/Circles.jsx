import React, {useState, useEffect, useRef} from 'react'
import * as d3 from 'd3'

import { useInterval } from '../utils/useInterval'

const generateCircleData = () => (
  Array(10).fill(0).map(() => ([
    Math.random() * 80 + 10,
    Math.random() * 35 + 10,
  ]))
)

export default function Circles () {
  const [circleData, setCircleData] = useState(
    generateCircleData()
  )

  const ref = useRef()

  useEffect(() => {
    const svgElement = d3.select(ref.current)
    svgElement.selectAll('circle')
    .data(circleData)
    .join('circle')
      .attr('cx', d => d[0])
      .attr('cy', d => d[1])
      .attr('r', 3)
  }, [circleData])

  useInterval(() => {
    const newCircleData = generateCircleData()
    setCircleData(newCircleData)
  }, 2000)

  return (
    <svg viewBox="0 0 100 50" ref={ref}>
    </svg>
  )
}
