import React, { useState } from 'react'
import { UserContext } from './UserContext'

export const UserProvider = ({children}) => {
    const [state, setState] = useState({estado:"logged-out", userName:""})
  return (
  <UserContext.Provider value={{state, setState}}> 
  {children}
  </UserContext.Provider>
  )
}
