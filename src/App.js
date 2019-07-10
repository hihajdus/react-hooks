import React, { useState } from 'react';
import UserTable from './tables/UserTable';



const App = () => {

  const usersData = [
    { id: 1, name: 'John', username: 'johnrambo' },
    { id: 2, name: 'Johny', username: 'joyjohn' },
    { id: 3, name: 'Johnathan', username: 'nathanjo' },

  ]

  const [users] = useState(usersData)

  // const addUser = user => {
  //   user.id = users.length + 1
  //   serUsers([...users, user])
  // }

  return (
    <div className="container">
      <h1>App with hooks</h1>
      <div className="flex-row">
        <div className="flex-large">
          <h2>Add user</h2>
        </div>
        <div className="flex-large">
          <h2>View users</h2>
          <UserTable users={users} />
        </div>
      </div>
    </div>
  )
}

export default App;
