import React from 'react';
import { NavBar } from '../components/NavBar';
import { PintarCategoria } from '../productos/components/PintarCategoria';

export const MueblesPage = () => {
  
  return (
    <>
        <NavBar />
        <PintarCategoria categoria={'furniture'} />
    </>
  );
};
