import React, {useState, useEffect, useRef} from 'react'
import * as d3 from 'd3'

import Circles from './Circles'
import { getUsers } from '../api/users'

function Home () {
  const [users, setUsers] = useState([])

  const ref = useRef()
  console.log(ref)

  useEffect(() => {
    getUsers()
    .then(res => {
      setUsers(res)
      return null
    })
    .catch(() => {})
  }, [])

  useEffect(() => {
    const svgElement = d3.select(ref.current)
    svgElement.append('circle')
      .attr('cx', 150)
      .attr('cy', 70)
      .attr('r',  50)
  }, [])
  
  return (
    <>
      <Circles />
      <section className="container mx-auto">
        <ul>
          {users.map(user => (
            <li key={user.id}><p>{user.name}</p></li>
          ))}
        </ul>
      </section>
    </>
  )
}

export default Home
