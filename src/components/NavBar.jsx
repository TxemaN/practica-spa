import { NavLink } from 'react-router-dom';

export const NavBar = () => {

  const evento = () => {

  }
  return (
     <nav>
      <ul>
        <li>
          <NavLink
          to='/'>
          Home
          </NavLink>
        </li>
        <li>
          <NavLink
          to='/Mobile'>
           Mobile 
          </NavLink>
        </li>
        <li>
          <NavLink
          to='/Muebles'>
           Muebles
          </NavLink>
        </li>
      </ul>
      <p>Hola ....</p>
      <button onClick={evento}>
        Logout
      </button>
     </nav>
  )
}
