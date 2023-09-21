import React from 'react'
import { getProductById } from '../productos/helpers';

// yarn

export const HomePage = () => {
  getProductById(2);
  return (
    <div>
  {/* <NavBar/> */}
   <p>Home Page</p>
   </div>
  )
}
