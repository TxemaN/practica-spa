import React from 'react'

import { useFormulario } from '../auth/hooks/useFormulario'


export const LogInPage = () => {
   const {state, handleLogin,handleSubmit, handleLogOut}=useFormulario()
  return (
    <> 
          <form onSubmit={handleSubmit} action="">

              <input
                  type="text"
                  name='nombre'
                  id='nombre'
                  placeholder='NOMBRE USUARIO' />
              <input type="submit" value='Login' />


          </form>

          <button onClick={handleLogOut}>LOGOUT</button>
          </>
  )
}
