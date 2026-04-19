import React from 'react'
import { getAuth } from 'firebase/auth'

const Home = () => {
  const auth = getAuth();
  const user = auth.currentUser;

  return (
    <div>
      <h1>Welcome to homepage...</h1>

      {user ? (
        <>
          <p>{user.displayName}</p>
          <p>{user.email}</p>
        </>
      ) : (
        <p>No user logged in</p>
      )}

    </div>
  )
}

export default Home