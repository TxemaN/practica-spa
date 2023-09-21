import React, { useContext } from 'react'
import { useFormulario } from '../auth/hooks/useFormulario';

export const LogInPage = () => {

  const { handleSubmit } = useFormulario();

  return (
    <>
      <h1 className='text-center'>Inicio de sesión</h1>
      <form className="form-control d-flex" onSubmit={handleSubmit}>

        <input
          className='form-control'
          type="text"
          name='nombre'
          id='nombre'
          placeholder='Introduce tu nombre..' />
        <input className='text-end btn btn-dark m-2' type="submit" value='Log in' />
      </form>
    </>
  );
};
