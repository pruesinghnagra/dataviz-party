import React, {useState, useEffect, useRef} from 'react'
import * as d3 from 'd3'

import { useInterval } from '../utils/useInterval'
import { generateArray as generateCircleData } from '../utils/generateArray'

export default function MovingCircles () {
  const [visibleCircles, setVisibleCircles] = useState(    
    generateCircleData()
  )

  const ref = useRef()
  console.log(ref)

  return (
    <>
      <h1>Ahhhhh</h1>   
    </>
  )

}