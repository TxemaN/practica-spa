import React from 'react'
import { FormularioLog } from '../auth/components/FormularioLog'
import { useFormulario } from '../auth/hooks/useFormulario'


export const LogInPage = () => {
   const {state, handleLogin,handleSubmit}=useFormulario()
  return (
    <>
    <form onSubmit={handleSubmit}  action="">
        
        <input 
        type="text" 
        name='nombre' 
        id='nombre' 
        placeholder='NOMBRE USUARIO' />
        <input type="submit" value='logeado'  />
        
        
        </form></>
  )
}
