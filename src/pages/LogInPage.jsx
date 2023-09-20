import React from 'react'
import { FormularioLog } from '../auth/components/FormularioLog'
import { useFormulario } from '../auth/hooks/useFormulario'


export const LogInPage = () => {
   const {state, handleLogin, handleLogOut}=useFormulario()
  return (
    <><form onSubmit={handleLogin}  action="">
        
        <input type="text" name='nombre' id='nombre' placeholder='NOMBRE USUARIO' value={data.nombre}/>
        <input type="submit"  />
        
        
        </form></>
  )
}
