import React from 'react'
import { NavBar } from '../components/NavBar'
import { PintarCategoria } from '../productos/components/PintarCategoria'

export const CellPage = () => {

  return (
   
      <>
        <NavBar />
        <PintarCategoria categoria={"smartphones"} />
      </>
  
  );
};
