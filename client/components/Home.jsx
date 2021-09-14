import React, {useState, useEffect} from 'react'

import Circles from './Circles'
import { getUsers } from '../api/users'

function Home () {
  const [users, setUsers] = useState([])

  useEffect(() => {
    getUsers()
    .then(res => {
      setUsers(res)
      return null
    })
    .catch(() => {})
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
