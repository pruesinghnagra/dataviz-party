import React, {useState, useEffect} from 'react'

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

  console.log(users)
  
  return (
    <main className="mt-12 lg:mt-32">
      <section className="container mx-auto">
        <ul>
          {users.map(user => (
            <li key={user.id}>{user.name}</li>
          ))}
        </ul>
      </section>
    </main>
  )
}

export default Home
